<script setup>
import destJapan from '../assets/images/destination-japan.png'
import destKorea from '../assets/images/destination-korea.png'
import destEurope from '../assets/images/destination-europe.png'

const routes = [
  { id: 1, path: '台北 → 東京', price: 6800 },
  { id: 2, path: '台北 → 首爾', price: 5200 },
  { id: 3, path: '台北 → 曼谷', price: 7900 },
  { id: 4, path: '台北 → 大阪', price: 6300 },
]

const stays = [
  { id: 1, name: '日本住宿', img: destJapan, price: 2400 },
  { id: 2, name: '韓國住宿', img: destKorea, price: 1900 },
  { id: 3, name: '歐洲住宿', img: destEurope, price: 3600 },
]
</script>

<template>
  <section class="booking-hero">
    <div class="eyebrow">FLIGHTS &amp; HOTELS</div>
    <h1>機票訂房</h1>
    <p>一站比價,找到最划算的機票與住宿組合</p>

    <div class="booking-widget">
      <div class="tabs">
        <div class="tab active">✈️ 機票</div>
        <div class="tab">🏨 訂房</div>
      </div>
      <div class="widget-form">
        <div class="widget-field"><label>出發地</label><div class="val">台北 TPE</div></div>
        <div class="widget-field"><label>目的地</label><div class="val">東京 NRT</div></div>
        <div class="widget-field"><label>出發日期</label><div class="val">2025/11/12</div></div>
        <div class="widget-field"><label>旅客人數</label><div class="val">2 位成人</div></div>
        <button class="widget-search-btn">搜尋</button>
      </div>
    </div>
  </section>

  <section class="routes-section">
    <div class="section-label">POPULAR ROUTES</div>
    <h2>熱門航線</h2>
    <div class="route-list">
      <div class="route-row" v-for="r in routes" :key="r.id">
        <span class="path">{{ r.path }}</span>
        <span class="price">NT${{ r.price.toLocaleString() }} 起</span>
      </div>
    </div>
  </section>

  <section class="stay-section">
    <div class="stay-inner">
      <div class="section-label">STAY</div>
      <h2>各地住宿精選</h2>
      <div class="stay-grid">
        <div class="stay-card" v-for="s in stays" :key="s.id">
          <img :src="s.img" :alt="s.name" />
          <div class="info">
            <h3>{{ s.name }}</h3>
            <p>市區飯店起 NT${{ s.price.toLocaleString() }}/晚</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <h2>準備好比價了嗎?</h2>
    <p>同時比較機票與飯店,規劃最划算的旅程組合。</p>
    <button>立即搜尋</button>
  </div>
</template>

<style scoped>
.booking-hero {
  background: linear-gradient(135deg, #fdf1e0, var(--color-bg));
  padding: 70px 40px 90px;
  text-align: center;
}
.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 10px;
}
.booking-hero h1 {
  font-size: clamp(32px, 5vw, 44px);
  color: var(--color-primary);
  margin: 0 0 12px;
}
.booking-hero p {
  font-size: 15px;
  color: #6b6259;
  margin: 0 0 36px;
}

.booking-widget {
  max-width: 900px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
  overflow: hidden;
}
.tabs {
  display: flex;
}
.tab {
  flex: 1;
  padding: 16px;
  text-align: center;
  font-size: 14.5px;
  font-weight: 700;
  color: #6b6259;
  background: var(--color-bg);
}
.tab.active {
  color: var(--color-primary);
  background: #ffffff;
  border-bottom: 3px solid var(--color-accent);
}
.widget-form {
  display: grid;
  grid-template-columns: repeat(4, 1fr) auto;
}
.widget-field {
  padding: 18px 20px;
  border-right: 1px solid #e7e0d6;
  text-align: left;
}
.widget-field label {
  display: block;
  font-size: 12px;
  color: #6b6259;
  margin-bottom: 6px;
}
.widget-field .val {
  font-size: 14.5px;
  font-weight: 600;
}
.widget-search-btn {
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 0 32px;
  font-size: 15px;
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

.routes-section {
  padding: 60px 40px;
  max-width: 1120px;
  margin: 0 auto;
}
.routes-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.route-list {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background: #e7e0d6;
  border-radius: 12px;
  overflow: hidden;
}
.route-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  padding: 18px 24px;
}
.route-row .path {
  font-size: 15px;
  font-weight: 600;
}
.route-row .price {
  color: var(--color-accent);
  font-weight: 700;
}

.stay-section {
  background: #fdf1e0;
  padding: 60px 40px;
}
.stay-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.stay-inner h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.stay-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.stay-card {
  background: #ffffff;
  border-radius: 14px;
  overflow: hidden;
}
.stay-card img {
  height: 150px;
  object-fit: cover;
  width: 100%;
}
.stay-card .info {
  padding: 14px 16px;
}
.stay-card h3 {
  font-size: 15px;
  margin: 0 0 4px;
}
.stay-card p {
  font-size: 12.5px;
  color: #6b6259;
  margin: 0;
}

.cta-banner {
  max-width: 1040px;
  margin: 64px auto;
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
  .widget-form {
    grid-template-columns: 1fr 1fr;
  }
  .widget-field {
    border-bottom: 1px solid #e7e0d6;
  }
  .widget-search-btn {
    grid-column: 1 / -1;
    padding: 14px;
  }
  .stay-grid {
    grid-template-columns: 1fr;
  }
}
</style>
