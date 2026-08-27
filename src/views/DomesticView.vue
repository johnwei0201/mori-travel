<script setup>
// 圖片待補:之後把 import 解除註解,並把下面對應的 img 從 null 換成變數即可,
// 版面與樣式都不用再改。
// import heroTaiwan from '../assets/images/hero-taiwan.png'
// import destNorth from '../assets/images/destination-north.png'
// ...

const heroImg = null

const regions = [
  { id: 1, name: '台北・北海岸', img: null, slug: 'taipei' },
  { id: 2, name: '宜蘭・花蓮', img: null, slug: 'yilan-hualien' },
  { id: 3, name: '台中・南投', img: null, slug: 'taichung-nantou' },
  { id: 4, name: '台南・高雄', img: null, slug: 'tainan-kaohsiung' },
  { id: 5, name: '墾丁・屏東', img: null, slug: 'kenting' },
  { id: 6, name: '澎湖・離島', img: null, slug: 'penghu' },
]

const whyItems = [
  { id: 1, icon: '🚐', title: '專車接送', desc: '定點集合出發,免自行開車' },
  { id: 2, icon: '🎧', title: '專人服務', desc: '旅遊顧問一對一諮詢' },
  { id: 3, icon: '📋', title: '行程透明', desc: '行程內容清楚標示,無隱藏費用' },
]
</script>

<template>
  <section class="hero-photo">
    <img v-if="heroImg" :src="heroImg" alt="國內旅遊" class="hero-img" />
    <div v-else class="hero-img hero-placeholder">
      <span class="ph-mark">🖼</span>
      <span class="ph-text">主視覺待補</span>
    </div>
    <div class="hero-scrim" :class="{ 'scrim-light': !heroImg }"></div>
    <div class="hero-text" :class="{ 'text-dark': !heroImg }">
      <div class="eyebrow">DOMESTIC TRAVEL</div>
      <h1>國內旅遊</h1>
      <p>從城市到山海,發現台灣的美好日常</p>
    </div>
  </section>

  <section class="region-section">
    <div class="section-label">DESTINATIONS</div>
    <h2>熱門地區</h2>
    <div class="region-grid">
      <RouterLink
        class="region-card"
        v-for="r in regions"
        :key="r.id"
        :to="`/destinations/${r.slug}`"
        target="_blank"
        rel="noopener"
      >
        <img v-if="r.img" :src="r.img" :alt="r.name" />
        <div v-else class="card-placeholder">
          <span class="ph-mark">🖼</span>
          <span class="ph-text">圖片待補</span>
        </div>
        <div class="label" :class="{ 'label-dark': !r.img }">{{ r.name }}</div>
      </RouterLink>
    </div>
  </section>

  <section class="why-section">
    <div class="why-inner">
      <div class="why-item" v-for="w in whyItems" :key="w.id">
        <span class="icon">{{ w.icon }}</span>
        <div>
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
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
.hero-photo {
  position: relative;
}
.hero-img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 32, 31, 0.05), rgba(6, 32, 31, 0.65));
}
.hero-text {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 60px;
  text-align: center;
  color: #fff;
}
.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 10px;
}
.hero-text h1 {
  font-weight: 700;
  font-size: clamp(36px, 6vw, 56px);
  margin: 0 0 10px;
}
.hero-text p {
  font-size: 16px;
  opacity: 0.9;
  margin: 0;
}

/* 圖片待補時的佔位樣式 —— 補上真實圖片後這些規則就不會生效 */
.hero-placeholder,
.card-placeholder {
  background: repeating-linear-gradient(
    45deg,
    #f3ece1,
    #f3ece1 14px,
    #efe6d8 14px,
    #efe6d8 28px
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #a89c8e;
}
.card-placeholder {
  width: 100%;
  height: 100%;
}
/* 主視覺的標示往上靠,避免和置底的標題文字重疊 */
.hero-placeholder {
  justify-content: flex-start;
  padding-top: 48px;
}
.ph-mark {
  font-size: 26px;
  opacity: 0.7;
}
.ph-text {
  font-size: 13px;
  letter-spacing: 1px;
}
.scrim-light {
  background: linear-gradient(180deg, rgba(6, 32, 31, 0), rgba(6, 32, 31, 0.06));
}
.text-dark {
  color: var(--color-primary);
}
.text-dark .eyebrow {
  opacity: 0.7;
}
.text-dark p {
  color: #6b6259;
  opacity: 1;
}

.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.region-section {
  padding: 64px 40px;
  max-width: 1120px;
  margin: 0 auto;
}
.region-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 32px;
}
.region-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.region-card {
  position: relative;
  display: block;
  border-radius: 16px;
  overflow: hidden;
  height: 200px;
  color: inherit;
  text-decoration: none;
  transition: box-shadow 0.2s ease;
}
.region-card:hover {
  box-shadow: 0 12px 26px rgba(43, 36, 32, 0.2);
  outline: 2.5px solid var(--color-accent);
  outline-offset: -2.5px;
}
.region-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.region-card .label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 16px;
  background: linear-gradient(180deg, transparent, rgba(6, 32, 31, 0.7));
  color: #fff;
  font-size: 17px;
  font-weight: 700;
}
.region-card .label-dark {
  background: none;
  color: var(--color-primary);
}

.why-section {
  background: #fdf1e0;
  padding: 56px 40px;
}
.why-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  gap: 40px;
}
.why-item {
  display: flex;
  align-items: center;
  gap: 14px;
  flex: 1;
}
.why-item .icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.why-item h3 {
  font-size: 15px;
  margin: 0 0 4px;
  color: var(--color-primary);
}
.why-item p {
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
  .hero-img {
    height: 340px;
  }
  .region-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .why-inner {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
