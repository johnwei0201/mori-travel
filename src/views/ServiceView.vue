<script setup>
import { RouterLink } from 'vue-router'
import AppIcon from '../components/ui/AppIcon.vue'

const services = [
  {
    icon: 'message',
    title: '行程規劃',
    desc: '依你的假期長度、預算與旅伴組成,一起把行程調整到剛剛好,不用自己從零比較。',
  },
  {
    icon: 'passport',
    title: '證件與簽證',
    desc: '護照效期、簽證與各國入境規定,顧問會主動提醒,並協助準備所需文件。',
  },
  {
    icon: 'clipboard',
    title: '行前確認',
    desc: '出發前寄送行程確認單、集合時間與行李建議,該注意的都幫你整理好。',
  },
  {
    icon: 'phone',
    title: '旅途中支援',
    desc: '班機延誤、臨時狀況或想調整安排,旅程中都能直接聯繫台灣端顧問。',
  },
]

const steps = [
  {
    n: '01',
    title: '提出需求',
    text: '線上填寫諮詢單或直接來電,告訴我們想去哪、什麼時候出發、預算大概多少。還沒想好也沒關係。',
  },
  {
    n: '02',
    title: '顧問回覆',
    text: '一個工作天內,由專屬顧問以你偏好的方式聯繫,提供一到兩個適合的行程方向。',
  },
  {
    n: '03',
    title: '調整定案',
    text: '依你的意見調整內容、日期與住宿等級,確認沒問題後再完成報名手續。',
  },
  {
    n: '04',
    title: '出發與支援',
    text: '行前寄送完整說明與提醒,出發後同一位顧問繼續跟進,不會換人重講一次。',
  },
]

const contacts = [
  { icon: 'phone', label: '服務專線', value: '02-7755-6688' },
  { icon: 'mail', label: 'Email', value: 'hello@moritravel.com.tw' },
  { icon: 'clock', label: '服務時間', value: '週一至週五 09:30 – 18:30' },
]
</script>

<template>
  <div class="breadcrumb">
    <RouterLink to="/">首頁</RouterLink>
    <span class="sep">›</span>
    <span>專人服務</span>
  </div>

  <section class="page-head">
    <div class="head-inner">
      <div class="eyebrow">PERSONAL SERVICE</div>
      <h1>專人服務</h1>
      <p>
        每一趟旅程都有一位專屬顧問,從規劃到回國都是同一個人。不用重複說明,也不用自己查那些零散的規定。
      </p>
    </div>
  </section>

  <section class="wrap block">
    <div class="section-label">WHAT WE DO</div>
    <h2>顧問能幫你做什麼</h2>
    <div class="service-grid">
      <div v-for="s in services" :key="s.title" class="service-card">
        <span class="service-icon"><AppIcon :name="s.icon" :size="24" /></span>
        <h3>{{ s.title }}</h3>
        <p>{{ s.desc }}</p>
      </div>
    </div>
  </section>

  <section class="flow-section">
    <div class="wrap">
      <div class="section-label">HOW IT WORKS</div>
      <h2>服務流程</h2>
      <ol class="flow">
        <li v-for="s in steps" :key="s.n">
          <span class="flow-num">{{ s.n }}</span>
          <h3>{{ s.title }}</h3>
          <p>{{ s.text }}</p>
        </li>
      </ol>
    </div>
  </section>

  <section class="wrap block">
    <div class="contact-strip">
      <div v-for="c in contacts" :key="c.label" class="contact-item">
        <span class="contact-icon"><AppIcon :name="c.icon" :size="20" /></span>
        <div>
          <div class="contact-label">{{ c.label }}</div>
          <div class="contact-value">{{ c.value }}</div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <h2>想先跟顧問聊聊嗎?</h2>
    <p>免費諮詢、不綁約,聊完覺得不合適隨時可以喊停。</p>
    <RouterLink to="/consult" class="cta-link">預約免費諮詢</RouterLink>
  </div>
</template>

<style scoped>
.breadcrumb {
  font-size: 13px;
  color: #999;
  padding: 14px 40px 0;
  display: flex;
  gap: 6px;
}
.breadcrumb a {
  text-decoration: none;
  color: inherit;
}
.breadcrumb .sep {
  opacity: 0.6;
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 40px;
}
.block {
  padding-block: clamp(44px, 5.5vw, 68px);
}

.eyebrow,
.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 8px;
}
.eyebrow {
  color: #ffc4a3;
}

/* 頁首 */
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
.page-head h1 {
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 700;
  margin: 12px 0 10px;
}
.page-head p {
  font-size: 15.5px;
  line-height: 1.9;
  color: #cfe0dd;
  max-width: 58ch;
  margin: 0;
}

h2 {
  font-size: clamp(21px, 2.5vw, 27px);
  color: var(--color-primary);
  margin: 0 0 28px;
}

/* 服務項目 */
.service-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.service-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 26px 22px 28px;
}
.service-icon {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #fdf1e0;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}
.service-card h3 {
  font-size: 16.5px;
  color: var(--color-primary);
  margin: 0 0 8px;
}
.service-card p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.85;
  margin: 0;
}

/* 流程 */
.flow-section {
  background: #fdf1e0;
  padding-block: clamp(44px, 5.5vw, 68px);
}
.flow {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.flow li {
  position: relative;
  padding-top: 22px;
  border-top: 2px solid #e3cdae;
}
.flow-num {
  display: block;
  font-size: 26px;
  font-weight: 300;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
  line-height: 1;
  margin-bottom: 12px;
}
.flow h3 {
  font-size: 16px;
  color: var(--color-primary);
  margin: 0 0 8px;
}
.flow p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.85;
  margin: 0;
}

/* 聯絡資訊 */
.contact-strip {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 26px 30px;
}
.contact-item {
  display: flex;
  align-items: center;
  gap: 14px;
}
.contact-icon {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid #e7e0d6;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.contact-label {
  font-size: 12.5px;
  color: #6b6259;
  margin-bottom: 3px;
}
.contact-value {
  font-size: 15px;
  color: #2b2420;
  font-weight: 500;
}

/* CTA */
.cta-banner {
  max-width: 1040px;
  margin: 0 auto clamp(48px, 6vw, 72px);
  padding: clamp(36px, 4.5vw, 52px) 40px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 20px;
  text-align: center;
}
.cta-banner h2 {
  font-size: clamp(21px, 2.5vw, 26px);
  color: #fff;
  margin: 0 0 10px;
}
.cta-banner p {
  font-size: 14.5px;
  color: #cfe0dd;
  margin: 0 0 24px;
}
.cta-link {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  padding: 13px 32px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition: background 0.15s ease;
}
.cta-link:hover {
  background: #d4551f;
}

@media (max-width: 1024px) {
  .wrap {
    padding-inline: 24px;
  }
  .page-head {
    padding-inline: 24px;
  }
  .service-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .flow {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-strip {
    grid-template-columns: 1fr;
  }
  .cta-banner {
    margin-inline: 24px;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 12px 16px 0;
  }
  .wrap {
    padding-inline: 16px;
  }
  .page-head {
    padding-inline: 16px;
  }
  .service-grid,
  .flow {
    grid-template-columns: 1fr;
  }
  .cta-banner {
    margin-inline: 16px;
    padding: 32px 20px;
  }
}
</style>
