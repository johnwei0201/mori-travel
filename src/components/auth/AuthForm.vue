<script setup>
import { ref, reactive, computed, watch, nextTick } from 'vue'
import AppIcon from '../ui/AppIcon.vue'

const props = defineProps({
  /** 'login' | 'register' */
  mode: { type: String, default: 'login' },
  /** 彈窗裡要自動聚焦第一個欄位,獨立頁面不需要 */
  autofocus: { type: Boolean, default: false },
})

const emit = defineEmits(['switch-mode', 'done'])

const isRegister = computed(() => props.mode === 'register')

const form = reactive({ name: '', email: '', password: '', agree: false })
const errors = reactive({})
const submitted = ref(false)
const root = ref(null)

/** 只做基本格式檢查:有沒有 @、有沒有點、中間有沒有東西 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate() {
  Object.keys(errors).forEach((k) => delete errors[k])

  if (isRegister.value && !form.name.trim()) errors.name = '請填寫稱呼'
  if (!form.email.trim()) errors.email = '請填寫 Email'
  else if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Email 格式看起來不太對'

  if (!form.password) errors.password = '請填寫密碼'
  else if (isRegister.value && form.password.length < 8) errors.password = '密碼至少 8 個字'

  if (isRegister.value && !form.agree) errors.agree = '請先同意服務條款'

  return Object.keys(errors).length === 0
}

function submit() {
  if (!validate()) {
    // 把焦點送到第一個出錯的欄位,使用者不必自己找
    nextTick(() => document.querySelector('.auth-form .invalid')?.focus())
    return
  }
  submitted.value = true
  emit('done')
}

// 切換登入/註冊時清掉錯誤訊息,不然會殘留上一個模式的提示
watch(
  () => props.mode,
  () => {
    Object.keys(errors).forEach((k) => delete errors[k])
    submitted.value = false
  },
)

// 直接抓第一個輸入框,不必依賴會隨模式切換而改變的具名 ref
defineExpose({
  focusFirst: () => root.value?.querySelector('input')?.focus(),
})
</script>

<template>
  <div ref="root" class="auth-form">
    <!-- 送出後的成功畫面。沒有後端,所以只是示範 -->
    <div v-if="submitted" class="done">
      <span class="done-mark"><AppIcon name="check" :size="26" /></span>
      <h3>{{ isRegister ? '註冊完成' : '登入成功' }}</h3>
      <p>
        這是作品集的示範流程,{{ isRegister ? '並沒有真的建立帳號' : '並沒有真的登入' }}。
        網站的行程資料都是靜態的,不需要帳號也能瀏覽。
      </p>
      <button type="button" class="btn-ghost" @click="submitted = false">回上一步</button>
    </div>

    <form v-else novalidate @submit.prevent="submit">
      <div v-if="isRegister" class="field">
        <label for="auth-name">怎麼稱呼您</label>
        <input
          id="auth-name"
          v-model="form.name"
          type="text"
          placeholder="王小明"
          autocomplete="name"
          :class="{ invalid: errors.name }"
          :aria-invalid="!!errors.name"
        />
        <p v-if="errors.name" class="err">{{ errors.name }}</p>
      </div>

      <div class="field">
        <label for="auth-email">Email</label>
        <input
          id="auth-email"
          v-model="form.email"
          type="email"
          placeholder="you@example.com"
          autocomplete="email"
          :class="{ invalid: errors.email }"
          :aria-invalid="!!errors.email"
        />
        <p v-if="errors.email" class="err">{{ errors.email }}</p>
      </div>

      <div class="field">
        <div class="label-row">
          <label for="auth-password">密碼</label>
          <button v-if="!isRegister" type="button" class="link-sm">忘記密碼?</button>
        </div>
        <input
          id="auth-password"
          v-model="form.password"
          type="password"
          :placeholder="isRegister ? '至少 8 個字' : '請輸入密碼'"
          :autocomplete="isRegister ? 'new-password' : 'current-password'"
          :class="{ invalid: errors.password }"
          :aria-invalid="!!errors.password"
        />
        <p v-if="errors.password" class="err">{{ errors.password }}</p>
      </div>

      <label v-if="isRegister" class="agree" :class="{ invalid: errors.agree }">
        <input v-model="form.agree" type="checkbox" />
        <span>我已閱讀並同意服務條款與隱私權政策</span>
      </label>
      <p v-if="errors.agree" class="err">{{ errors.agree }}</p>

      <button type="submit" class="btn-primary">
        {{ isRegister ? '建立帳號' : '登入' }}
      </button>

      <p class="switch">
        {{ isRegister ? '已經有帳號了?' : '還沒有帳號?' }}
        <button type="button" @click="emit('switch-mode', isRegister ? 'login' : 'register')">
          {{ isRegister ? '直接登入' : '免費註冊' }}
        </button>
      </p>
    </form>
  </div>
</template>

<style scoped>
.auth-form .field {
  margin-bottom: 16px;
}
.auth-form label,
.label-row label {
  display: block;
  font-size: 13.5px;
  font-weight: 500;
  color: #2b2420;
  margin-bottom: 7px;
}
.label-row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.link-sm {
  font: inherit;
  font-size: 12.5px;
  color: var(--color-primary);
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
}

/* 輸入框沿用諮詢表單的樣式,整站的欄位長得一樣 */
.auth-form input[type='text'],
.auth-form input[type='email'],
.auth-form input[type='password'] {
  width: 100%;
  background: #ffffff;
  color: #2b2420;
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  padding: 11px 14px;
  font: inherit;
  font-size: 14.5px;
  transition: border-color 0.15s ease;
}
.auth-form input:hover {
  border-color: #cdbfae;
}
.auth-form input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}
.auth-form input::placeholder {
  color: #a89c8e;
}
.auth-form input.invalid {
  border-color: #c2410c;
}

/* 寫成 .auth-form .agree 才蓋得過上面那條 .auth-form label(display:block) */
.auth-form .agree {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 4px;
  font-size: 13px;
  font-weight: 400;
  color: #6b6259;
  cursor: pointer;
}
.auth-form .agree input {
  accent-color: var(--color-primary);
  margin: 0;
  flex-shrink: 0;
}

.err {
  margin: 7px 0 0;
  font-size: 12.5px;
  color: #c2410c;
}

.btn-primary {
  width: 100%;
  margin-top: 18px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 13px 24px;
  font: inherit;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.15s ease;
}
.btn-primary:hover {
  background: #d2541f;
}

.switch {
  margin: 16px 0 0;
  text-align: center;
  font-size: 13px;
  color: #6b6259;
}
.switch button {
  font: inherit;
  font-size: 13px;
  font-weight: 700;
  color: var(--color-primary);
  background: none;
  border: none;
  padding: 0 2px;
  cursor: pointer;
  text-decoration: underline;
}

/* 送出後的成功畫面 */
.done {
  text-align: center;
  padding: 8px 0 4px;
}
.done-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #eef4f2;
  color: var(--color-primary);
  margin-bottom: 14px;
}
.done h3 {
  font-size: 19px;
  color: var(--color-primary);
  margin: 0 0 10px;
}
.done p {
  font-size: 13.5px;
  line-height: 1.8;
  color: #6b6259;
  margin: 0 0 20px;
}
.btn-ghost {
  background: none;
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  padding: 11px 24px;
  font: inherit;
  font-size: 14px;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.btn-ghost:hover {
  border-color: #cdbfae;
}
</style>
