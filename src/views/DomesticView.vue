<script setup>
const categories = [
  { id: 1, icon: '🏔️', title: '山林秘境', desc: '太魯閣、阿里山、合歡山的壯闊景色' },
  { id: 2, icon: '🌊', title: '海島假期', desc: '澎湖、綠島、蘭嶼的湛藍海岸' },
  { id: 3, icon: '🏙️', title: '城市小旅行', desc: '台北、台中、台南的人文步調' },
  { id: 4, icon: '♨️', title: '溫泉療癒', desc: '北投、礁溪、關子嶺的放鬆時光' },
]

const trips = [
  { id: 1, gradient: 'linear-gradient(135deg,#3d8a86,#0a5f61)', title: '花蓮太魯閣三日遊', desc: '峽谷步道・清水斷崖', price: 8900 },
  { id: 2, gradient: 'linear-gradient(135deg,#4fa8c9,#0a5f61)', title: '墾丁陽光假期', desc: '沙灘海景・南國度假', price: 6500 },
  { id: 3, gradient: 'linear-gradient(135deg,#e8622c,#c2410c)', title: '台南美食巡禮', desc: '古都散策・在地小吃', price: 4900 },
]
</script>

<template>
  <section class="hero-illust">
    <svg class="illust-svg" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMax slice">
      <rect width="1200" height="380" fill="#fdf1e0" />
      <circle cx="980" cy="80" r="46" fill="#e8622c" opacity="0.85" />
      <polygon points="0,380 220,170 400,300 580,130 780,300 980,190 1200,380" fill="#0a5f61" opacity="0.22" />
      <polygon points="0,380 160,250 360,360 540,210 740,360 920,250 1200,380" fill="#0a5f61" opacity="0.4" />
      <polygon points="0,380 280,300 480,370 660,290 860,370 1200,300 1200,380" fill="#0a5f61" />
    </svg>
    <div class="hero-illust-text">
      <div class="eyebrow">DOMESTIC TRAVEL</div>
      <h1>國內旅遊</h1>
      <p>從城市到山海,發現台灣的美好日常</p>
    </div>
  </section>

  <section class="category-section wrap">
    <div class="section-label">EXPLORE</div>
    <h2>熱門主題</h2>
    <div class="category-grid">
      <div class="category-card" v-for="c in categories" :key="c.id">
        <div class="cat-icon">{{ c.icon }}</div>
        <h3>{{ c.title }}</h3>
        <p>{{ c.desc }}</p>
      </div>
    </div>
  </section>

  <section class="trips-section">
    <div class="inner">
      <div class="section-label">POPULAR</div>
      <h2>熱門行程</h2>
      <div class="trip-grid">
        <div class="trip-card-mock" v-for="t in trips" :key="t.id">
          <div class="mock-photo" :style="{ background: t.gradient }"></div>
          <div class="trip-info">
            <h3>{{ t.title }}</h3>
            <p>{{ t.desc }}</p>
            <div class="price">NT${{ t.price.toLocaleString() }} 起</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <h2>準備好探索台灣了嗎?</h2>
    <p>專屬旅遊顧問一對一協助,為你規劃剛剛好的國內旅程。</p>
    <button>立即諮詢行程</button>
  </div>
</template>

<style scoped>
.hero-illust {
  position: relative;
  overflow: hidden;
}
.illust-svg {
  width: 100%;
  height: 380px;
  display: block;
}
.hero-illust-text {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
}
.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-primary);
  opacity: 0.75;
  margin-bottom: 10px;
}
.hero-illust-text h1 {
  font-weight: 700;
  font-size: clamp(36px, 6vw, 56px);
  color: var(--color-primary);
  margin: 0 0 10px;
}
.hero-illust-text p {
  font-size: 16px;
  color: #6b6259;
  margin: 0;
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 40px;
}
.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.category-section {
  padding: 64px 40px;
}
.category-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 32px;
}
.category-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.category-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 28px 22px;
  text-align: center;
}
.cat-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fdf1e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 0 auto 16px;
}
.category-card h3 {
  font-size: 16px;
  margin: 0 0 8px;
}
.category-card p {
  font-size: 13px;
  color: #6b6259;
  line-height: 1.6;
  margin: 0;
}

.trips-section {
  background: #fdf1e0;
  padding: 60px 40px;
}
.trips-section .inner {
  max-width: 1120px;
  margin: 0 auto;
}
.trips-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 32px;
}
.trip-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.trip-card-mock {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.mock-photo {
  height: 180px;
}
.trip-info {
  padding: 18px 20px;
}
.trip-info h3 {
  font-size: 16px;
  margin: 0 0 6px;
  color: #2b2420;
}
.trip-info p {
  font-size: 13px;
  color: #6b6259;
  margin: 0 0 12px;
}
.trip-info .price {
  font-size: 17px;
  font-weight: 700;
  color: var(--color-accent);
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
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .trip-grid {
    grid-template-columns: 1fr;
  }
}
</style>
