<script setup>
import { ref, watch, nextTick, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import AuthForm from './AuthForm.vue'
import { useAuth } from '../../composables/useAuth.js'

const { isOpen, mode, close, switchMode } = useAuth()

const panel = ref(null)
const formRef = ref(null)

/** 記住原本的 overflow,關閉時還原,不要寫死成 '' */
let prevOverflow = ''

function lockScroll() {
  prevOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
}
function unlockScroll() {
  document.body.style.overflow = prevOverflow
}

/**
 * 焦點鎖定:Tab 走到最後一個可聚焦元素時繞回第一個,
 * 避免鍵盤使用者 Tab 到彈窗後面那層看不見的頁面。
 */
function onKeydown(e) {
  if (e.key === 'Escape') {
    close()
    return
  }
  if (e.key !== 'Tab' || !panel.value) return

  const focusable = panel.value.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])',
  )
  if (!focusable.length) return
  const first = focusable[0]
  const last = focusable[focusable.length - 1]

  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault()
    last.focus()
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault()
    first.focus()
  }
}

watch(isOpen, async (open) => {
  if (open) {
    lockScroll()
    document.addEventListener('keydown', onKeydown)
    await nextTick()
    formRef.value?.focusFirst()
  } else {
    unlockScroll()
    document.removeEventListener('keydown', onKeydown)
  }
})

// 元件被卸載時務必收尾,否則捲動會永遠被鎖住
onUnmounted(() => {
  unlockScroll()
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <!-- Teleport 到 body:彈窗不受 Header 的 sticky 與各種 overflow 影響 -->
  <Teleport to="body">
    <Transition name="auth">
      <div
        v-if="isOpen"
        class="auth-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="auth-title"
        @click.self="close"
      >
        <div ref="panel" class="auth-panel">
          <button class="auth-close" type="button" aria-label="關閉" @click="close">
            <span aria-hidden="true">×</span>
          </button>

          <div class="auth-head">
            <h2 id="auth-title">{{ mode === 'register' ? '建立 MORI 帳號' : '會員登入' }}</h2>
          </div>

          <AuthForm ref="formRef" :mode="mode" @switch-mode="switchMode" />

          <div class="auth-foot">
            <p class="demo-note">此為作品集示範,不會真的建立帳號或傳送任何資料。</p>
            <RouterLink to="/login" class="full-page" @click="close">
              進入登入頁面 <span aria-hidden="true">➤</span>
            </RouterLink>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.auth-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(43, 36, 32, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow-y: auto;
}

.auth-panel {
  position: relative;
  width: 100%;
  max-width: 420px;
  background: #fff;
  border: 1px solid #e7e0d6;
  border-radius: 18px;
  padding: 34px 32px 26px;
  box-shadow: 0 24px 60px rgba(43, 36, 32, 0.28);
  margin: auto;
}

.auth-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1;
  color: #6b6259;
  background: none;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;
}
.auth-close:hover {
  background: var(--color-bg);
  color: #2b2420;
}

.auth-head {
  margin-bottom: 24px;
}
.auth-head h2 {
  font-size: 23px;
  color: var(--color-primary);
  margin: 0;
}

.auth-foot {
  margin-top: 22px;
  padding-top: 18px;
  border-top: 1px solid #f0e9df;
  text-align: center;
}
.demo-note {
  font-size: 12px;
  line-height: 1.7;
  color: #a89c8e;
  margin: 0 0 10px;
}
.full-page {
  font-size: 13px;
  color: var(--color-primary);
  text-decoration: underline;
}
.full-page:hover {
  color: var(--color-accent);
}

/* 背景淡入、面板同時往上浮一點 */
.auth-enter-active,
.auth-leave-active {
  transition: opacity 0.2s ease;
}
.auth-enter-active .auth-panel,
.auth-leave-active .auth-panel {
  transition:
    transform 0.22s ease,
    opacity 0.22s ease;
}
.auth-enter-from,
.auth-leave-to {
  opacity: 0;
}
.auth-enter-from .auth-panel,
.auth-leave-to .auth-panel {
  opacity: 0;
  transform: translateY(12px);
}

/* 尊重使用者的系統設定,關掉動畫偏好時不要做位移 */
@media (prefers-reduced-motion: reduce) {
  .auth-enter-active,
  .auth-leave-active,
  .auth-enter-active .auth-panel,
  .auth-leave-active .auth-panel {
    transition: none;
  }
  .auth-enter-from .auth-panel,
  .auth-leave-to .auth-panel {
    transform: none;
  }
}

@media (max-width: 480px) {
  .auth-backdrop {
    padding: 16px;
  }
  .auth-panel {
    padding: 30px 22px 22px;
  }
}
</style>
