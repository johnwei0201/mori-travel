<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../ui/AppIcon.vue'

const menuOpen = ref(false)
const route = useRoute()

const links = [
  { to: '/', text: '回首頁' },
  { to: '/domestic', text: '國內旅遊' },
  { to: '/international', text: '國外旅遊' },
  { to: '/booking', text: '機票訂房' },
  { to: '/guide', text: '旅遊指南' },
]

// 換頁後把選單收起來,否則點完連結選單會一直開著
watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false
  },
)

function onKeydown(e) {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">MORI <span>TRAVEL</span></RouterLink>

    <nav class="nav">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.text }}</RouterLink>
    </nav>

    <div class="actions">
      <button class="icon-btn" aria-label="會員登入">
        <AppIcon name="user" :size="19" />
      </button>
      <RouterLink to="/plan" class="cta-btn">開始找旅行</RouterLink>

      <button
        class="burger"
        :class="{ open: menuOpen }"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        :aria-label="menuOpen ? '關閉選單' : '開啟選單'"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <nav id="mobile-nav" class="mobile-nav" v-show="menuOpen">
      <RouterLink v-for="l in links" :key="l.to" :to="l.to">{{ l.text }}</RouterLink>
      <button class="mobile-account">
        <AppIcon name="user" :size="18" />
        <span>會員登入</span>
      </button>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: #f3ece1;
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid #e7e0d6;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  text-decoration: none;
}
.logo span {
  font-weight: 400;
}

.nav {
  display: flex;
  /* 連結左右各 16px 內距,兩兩相加剛好是原本的 32px 字間距 */
  gap: 0;
  /* 撐滿 Header 內容高度,再用負 margin 吃掉 Header 的上下內距,
     這樣 hover 的底色才會從 Header 頂端貫穿到底端 */
  align-self: stretch;
  margin-block: -16px;
}
.nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 19px;
  /* 平時就用和 hover 相同的字重,滑過時只換顏色與底色,不再有粗細跳動 */
  font-weight: 500;
  padding: 0 16px;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}
.nav a:hover {
  background: #ffffff;
  color: #c2410c;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.icon-btn {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
}
.cta-btn {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s ease;
}
.cta-btn:hover {
  background: #d4551f;
}

/* 漢堡按鈕:桌機隱藏,1024px 以下才出現 */
.burger {
  display: none;
  width: 40px;
  height: 36px;
  padding: 8px 6px;
  border: none;
  background: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
}
.burger span {
  display: block;
  height: 2.5px;
  width: 100%;
  border-radius: 2px;
  background: var(--color-primary);
  transition:
    transform 0.22s ease,
    opacity 0.18s ease;
}
.burger.open span:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
}

/* 展開的選單面板:貼在 Header 正下方 */
.mobile-nav {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #ffffff;
  border-bottom: 1px solid #e7e0d6;
  box-shadow: 0 14px 26px rgba(43, 36, 32, 0.12);
  flex-direction: column;
}
.mobile-nav a,
.mobile-account {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 15px 24px;
  font-size: 16.5px;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  border: none;
  background: none;
  border-bottom: 1px solid #f0e9df;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease;
}
.mobile-nav a:hover,
.mobile-account:hover {
  background: var(--color-bg);
  color: #c2410c;
}
.mobile-account {
  border-bottom: none;
  color: var(--color-primary);
}

@media (max-width: 1024px) {
  .header {
    padding: 14px 24px;
  }
  .nav {
    display: none;
  }
  .burger {
    display: flex;
  }
  .mobile-nav {
    display: flex;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 12px 16px;
  }
  .logo {
    font-size: 19px;
  }
  .actions {
    gap: 10px;
  }
  /* 手機寬度放不下,會員入口移到展開的選單裡 */
  .icon-btn {
    display: none;
  }
  .cta-btn {
    padding: 8px 14px;
    font-size: 13px;
  }
  .mobile-nav a,
  .mobile-account {
    padding: 14px 16px;
  }
}
</style>
