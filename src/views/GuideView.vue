<script setup>
import tripTokyo from '../assets/images/trip-tokyo-autumn.png'
import tripHokkaido from '../assets/images/trip-hokkaido-winter.png'
import tripItaly from '../assets/images/trip-italy-classic.png'

const articles = [
  {
    id: 1,
    img: tripTokyo,
    tag: '日本',
    title: '東京賞楓完整攻略:最佳時間與路線規劃',
    desc: '從賞楓地圖到交通安排,一篇看懂東京秋季旅遊重點。',
  },
  {
    id: 2,
    img: tripHokkaido,
    tag: '日本',
    title: '北海道雪季旅遊攻略:交通、穿搭、必去景點',
    desc: '第一次去北海道賞雪,行前必讀的實用建議整理。',
  },
  {
    id: 3,
    img: tripItaly,
    tag: '歐洲',
    title: '義大利自由行懶人包:城市串聯與交通攻略',
    desc: '羅馬、佛羅倫斯到威尼斯,城市之間該怎麼安排最順?',
  },
]

const categories = ['🎒 行前準備', '🚄 交通指南', '🍜 美食推薦', '🏨 住宿攻略']

const checklist = [
  {
    id: 1,
    icon: '🛂',
    title: '證件財務',
    items: ['護照(效期 6 個月以上)', '簽證 / 電子許可', '機票與訂房確認單', '信用卡・現金・當地貨幣'],
  },
  {
    id: 2,
    icon: '🧳',
    title: '衣物穿搭',
    items: ['換洗衣物', '保暖外套 / 雨具', '舒適好走的鞋款', '睡衣'],
  },
  {
    id: 3,
    icon: '🪥',
    title: '個人清潔',
    items: ['牙刷、牙膏', '毛巾、盥洗用品', '防曬乳、個人保養品', '常備藥品'],
  },
  {
    id: 4,
    icon: '🔌',
    title: '3C 用品',
    items: ['手機、充電器', '轉接頭、行動電源', '相機、記憶卡', '耳機'],
  },
]
</script>

<template>
  <section class="guide-hero">
    <div class="eyebrow">TRAVEL GUIDE</div>
    <h1>旅遊指南</h1>
    <p>行前準備、交通攻略、在地美食,出發前先看這裡</p>
    <div class="guide-search">
      <input type="text" placeholder="搜尋文章,例如:東京、賞楓、簽證" />
      <button>搜尋</button>
    </div>
  </section>

  <section class="checklist-section">
    <div class="section-label">BEFORE YOU GO</div>
    <h2>行前必備清單</h2>
    <div class="checklist-grid">
      <div class="checklist-card" v-for="c in checklist" :key="c.id">
        <div class="checklist-icon">{{ c.icon }}</div>
        <h3>{{ c.title }}</h3>
        <ul>
          <li v-for="item in c.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="articles-section">
    <div class="section-label">FEATURED</div>
    <h2>精選文章</h2>
    <div class="article-grid">
      <div class="article-card" v-for="a in articles" :key="a.id">
        <img :src="a.img" :alt="a.title" />
        <div class="article-body">
          <span class="article-tag">{{ a.tag }}</span>
          <h3>{{ a.title }}</h3>
          <p>{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="category-row">
    <span class="category-pill" v-for="c in categories" :key="c">{{ c }}</span>
  </div>

  <div class="cta-banner">
    <h2>想收到更多旅遊靈感嗎?</h2>
    <p>訂閱電子報,每月精選旅遊攻略直送信箱。</p>
    <button>訂閱電子報</button>
  </div>
</template>

<style scoped>
.guide-hero {
  background: #fdf1e0;
  padding: 64px 40px;
  text-align: center;
}
.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 10px;
}
.guide-hero h1 {
  font-size: clamp(32px, 5vw, 44px);
  color: var(--color-primary);
  margin: 0 0 12px;
}
.guide-hero p {
  font-size: 15px;
  color: #6b6259;
  margin: 0 0 28px;
}
.guide-search {
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.guide-search input {
  flex: 1;
  border: none;
  padding: 14px 18px;
  font-size: 14px;
}
.guide-search input:focus {
  outline: none;
}
.guide-search button {
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 0 24px;
  font-weight: 700;
  cursor: pointer;
}

.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.checklist-section {
  padding: 56px 40px 0;
  max-width: 1120px;
  margin: 0 auto;
}
.checklist-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.checklist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.checklist-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 24px 20px;
}
.checklist-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fdf1e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  margin-bottom: 14px;
}
.checklist-card h3 {
  font-size: 15px;
  margin: 0 0 12px;
  color: #2b2420;
}
.checklist-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.checklist-card li {
  font-size: 12.5px;
  color: #6b6259;
  padding: 4px 0 4px 20px;
  position: relative;
  line-height: 1.5;
}
.checklist-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

.articles-section {
  padding: 60px 40px;
  max-width: 1120px;
  margin: 0 auto;
}
.articles-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.article-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.article-card img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}
.article-body {
  padding: 18px 20px;
}
.article-tag {
  font-size: 11.5px;
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.article-card h3 {
  font-size: 16px;
  margin: 8px 0 8px;
  color: #2b2420;
  line-height: 1.5;
}
.article-card p {
  font-size: 13px;
  color: #6b6259;
  margin: 0;
  line-height: 1.6;
}

.category-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 40px 60px;
}
.category-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 14px;
}

.cta-banner {
  max-width: 1040px;
  margin: 0 auto 64px;
  padding: 48px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 20px;
  text-align: center;
}
.cta-banner h2 {
  font-size: 24px;
  margin: 0 0 10px;
}
.cta-banner p {
  font-size: 14px;
  opacity: 0.85;
  margin: 0 0 22px;
}
.cta-banner button {
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14.5px;
  font-weight: 700;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .checklist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 860px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .checklist-grid {
    grid-template-columns: 1fr;
  }
}
</style>
