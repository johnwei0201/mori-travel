<script setup>
import { ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import AuthForm from '../components/auth/AuthForm.vue'

const route = useRoute()
// 網址帶 ?mode=register 就直接開在註冊,方便從別處直接連過來
const mode = ref(route.query.mode === 'register' ? 'register' : 'login')
</script>

<template>
  <div class="breadcrumb">
    <RouterLink to="/">首頁</RouterLink>
    <span class="sep">›</span>
    <span>{{ mode === 'register' ? '註冊' : '會員登入' }}</span>
  </div>

  <section class="page-head">
    <div class="head-inner">
      <div class="eyebrow">{{ mode === 'register' ? 'JOIN MORI' : 'WELCOME BACK' }}</div>
      <h1>{{ mode === 'register' ? '建立 MORI 帳號' : '會員登入' }}</h1>
      <p>
        {{
          mode === 'register'
            ? '收藏喜歡的行程,下次回來接著看。'
            : '登入後可以查看你的諮詢紀錄與收藏。'
        }}
      </p>
    </div>
  </section>

  <div class="layout">
    <div class="form-card">
      <AuthForm :mode="mode" @switch-mode="(m) => (mode = m)" />
      <p class="demo-note">此為作品集示範,不會真的建立帳號或傳送任何資料。</p>
    </div>

    <aside class="side">
      <div class="side-card">
        <h2 class="side-title">不登入也能用</h2>
        <p class="side-lead">
          這個網站的行程、景點與旅遊指南都是公開的,不需要帳號就能瀏覽。
          會員功能是為了之後收藏行程與查詢諮詢紀錄而準備的。
        </p>
        <RouterLink to="/plan" class="side-link"
          >直接開始找旅行 <span aria-hidden="true">➤</span></RouterLink
        >
      </div>

      <div class="side-card">
        <h2 class="side-title">想直接找人問?</h2>
        <p class="side-lead">填一張諮詢單,顧問會在一個工作天內回覆你。</p>
        <RouterLink to="/consult" class="side-link"
          >諮詢行程 <span aria-hidden="true">➤</span></RouterLink
        >
      </div>
    </aside>
  </div>
</template>

<style scoped>
.breadcrumb {
  font-size: 13px;
  color: #999;
  padding: 14px 40px 0;
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.breadcrumb a {
  color: #999;
}
.breadcrumb a:hover {
  color: var(--color-accent);
}
.breadcrumb .sep {
  color: #cdbfae;
}

.page-head {
  background: var(--color-primary);
  color: #fff;
  margin-top: 10px;
  padding: clamp(40px, 5vw, 64px) 40px;
}
.head-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.eyebrow {
  font-size: 12.5px;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 1;
  color: #ffc4a3;
  margin-bottom: 12px;
}
.page-head h1 {
  font-size: clamp(28px, 4vw, 38px);
  margin: 0 0 10px;
}
.page-head p {
  font-size: 15px;
  opacity: 0.88;
  margin: 0;
}

.layout {
  max-width: 1120px;
  margin: 0 auto;
  padding: 44px 40px 72px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 320px;
  gap: 32px;
  align-items: start;
}

.form-card {
  background: #fff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: clamp(26px, 3vw, 38px);
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.07);
  max-width: 460px;
}
.demo-note {
  margin: 20px 0 0;
  padding-top: 16px;
  border-top: 1px solid #f0e9df;
  font-size: 12px;
  line-height: 1.7;
  color: #a89c8e;
  text-align: center;
}

.side {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.side-card {
  background: #fff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 24px 22px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.07);
}
.side-title {
  font-size: 15.5px;
  color: var(--color-primary);
  margin: 0 0 10px;
}
.side-lead {
  font-size: 13.5px;
  line-height: 1.8;
  color: #6b6259;
  margin: 0 0 14px;
}
.side-link {
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-accent);
}
.side-link:hover {
  text-decoration: underline;
}

@media (max-width: 900px) {
  .layout {
    grid-template-columns: 1fr;
    padding: 32px 24px 56px;
  }
  .form-card {
    max-width: none;
  }
  .breadcrumb,
  .page-head {
    padding-left: 24px;
    padding-right: 24px;
  }
}

@media (max-width: 640px) {
  .layout {
    padding: 26px 16px 48px;
  }
  .breadcrumb,
  .page-head {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>
