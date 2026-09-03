<script setup>
import AppIcon from '../ui/AppIcon.vue'
import logoMark from '../../assets/icons/mori_logo.png'

const contacts = [
  { id: 1, icon: 'phone', text: '02-7755-6688' },
  { id: 2, icon: 'mail', text: 'hello@moritravel.com.tw' },
  { id: 3, icon: 'clock', text: '週一至週五 09:30 - 18:30' },
  { id: 4, icon: 'pin', text: '241 新北市三重區自強路四段 101 號' },
]

const socials = [
  { id: 1, icon: 'facebook' },
  { id: 2, icon: 'instagram' },
  { id: 3, icon: 'message' },
]
</script>

<template>
  <footer class="footer">
    <div class="top">
      <div class="brand">
        <h2 class="logo">
          <img :src="logoMark" alt="" class="logo-mark" />
          <span class="logo-name">MORI <span class="logo-travel">TRAVEL</span></span>
        </h2>
        <p class="desc">專為喜愛探索世界的你,打造剛剛好的旅行體驗。</p>

        <div class="contacts">
          <p v-for="c in contacts" :key="c.id" class="contact-item">
            <AppIcon :name="c.icon" :size="16" />
            <span>{{ c.text }}</span>
          </p>
        </div>
      </div>

      <div class="subscribe">
        <h3 class="sub-title">訂閱旅遊靈感電子報</h3>
        <p class="sub-desc">掌握最新優惠與旅遊靈感,每月精選直送你的信箱!</p>

        <div class="sub-form">
          <input type="email" placeholder="輸入你的 Email" />
          <button>訂閱</button>
        </div>

        <div class="socials">
          <span v-for="s in socials" :key="s.id" class="social-icon">
            <AppIcon :name="s.icon" :size="17" />
          </span>
        </div>
      </div>
    </div>

    <div class="bottom">
      <p>© {{ new Date().getFullYear() }} MORI TRAVEL. All rights reserved.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: var(--color-primary);
  color: white;
  padding: 48px 40px 24px;
}

.top {
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 40px;
}

.brand {
  flex: 1;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 12px;
}
/* logo 本身是深綠,和頁尾底色相同,用濾鏡轉成白色:
   brightness(0) 先把不透明的像素壓成黑,invert(1) 再翻成白,透明區不受影響 */
.logo-mark {
  height: 30px;
  width: auto;
  display: block;
  flex-shrink: 0;
  filter: brightness(0) invert(1);
}
/* 只讓 TRAVEL 變細,不影響外層包住整組字的 .logo-name */
.logo .logo-travel {
  font-weight: 400;
}

.desc {
  font-size: 14px;
  color: #cfe0df;
  margin-bottom: 20px;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 9px;
  font-size: 14px;
  color: #cfe0df;
  margin-bottom: 10px;
}

.subscribe {
  flex: 1;
  max-width: 400px;
}

.sub-title {
  font-size: 16px;
  margin-bottom: 8px;
}

.sub-desc {
  font-size: 13px;
  color: #cfe0df;
  margin-bottom: 16px;
}

.sub-form {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.sub-form input {
  flex: 1;
  padding: 10px 14px;
  border-radius: 6px;
  border: none;
  font-size: 14px;
  background: #ffffff;
  color: #2b2420;
}

.sub-form input::placeholder {
  color: #8b8178;
}

.sub-form button {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
}

.socials {
  display: flex;
  gap: 12px;
}

.social-icon {
  width: 36px;
  height: 36px;
  border: 1px solid #4a7472;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom {
  border-top: 1px solid #2a5654;
  padding-top: 20px;
  text-align: center;
  font-size: 13px;
  color: #9fc0be;
}

@media (max-width: 1024px) {
  .footer {
    padding: 40px 24px 20px;
  }
  .top {
    gap: 36px;
  }
}

@media (max-width: 640px) {
  .footer {
    padding: 32px 16px 20px;
  }
  .top {
    flex-direction: column;
    gap: 28px;
  }
  .subscribe {
    max-width: none;
  }
}
</style>
