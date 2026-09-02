<script setup>
import heroEurope from '../assets/images/hero-europe.png'
import destJapan from '../assets/images/destination-japan.png'
import destKorea from '../assets/images/destination-korea.png'
import destSea from '../assets/images/destination-southeast-asia.png'
import destEurope from '../assets/images/destination-europe.png'
import destAmerica from '../assets/images/destination-america.png'
import destOceania from '../assets/images/destination-oceania.png'
import AppIcon from '../components/ui/AppIcon.vue'

const regions = [
  { id: 1, name: '日本', img: destJapan, slug: 'japan' },
  { id: 2, name: '韓國', img: destKorea, slug: 'korea' },
  { id: 3, name: '東南亞', img: destSea, slug: 'southeast-asia' },
  { id: 4, name: '歐洲', img: destEurope, slug: 'europe' },
  { id: 5, name: '美加', img: destAmerica, slug: 'america' },
  { id: 6, name: '紐澳', img: destOceania, slug: 'oceania' },
]

const whyItems = [
  { id: 1, icon: 'shield', title: '安心出發', desc: '嚴選合作夥伴,完善旅遊保險', to: '/booking' },
  { id: 2, icon: 'headphone', title: '專人服務', desc: '旅遊顧問一對一諮詢', to: '/service' },
  { id: 3, icon: 'clipboard', title: '行程透明', desc: '行程內容清楚標示,無隱藏費用' },
]
</script>

<template>
  <section class="hero-photo">
    <img :src="heroEurope" alt="國外旅遊" class="hero-img" />
    <div class="hero-scrim"></div>
    <div class="hero-text">
      <div class="eyebrow">INTERNATIONAL TRAVEL</div>
      <h1>國外旅遊</h1>
      <p>把世界的風景,一次收藏</p>
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
        <img :src="r.img" :alt="r.name" />
        <div class="label">{{ r.name }}</div>
      </RouterLink>
    </div>
  </section>

  <section class="why-section">
    <div class="why-inner">
      <RouterLink class="why-item" v-for="w in whyItems" :key="w.id" :to="w.to ?? '/consult'">
        <span class="icon"><AppIcon :name="w.icon" :size="21" /></span>
        <div>
          <h3>{{ w.title }}</h3>
          <p>{{ w.desc }}</p>
        </div>
      </RouterLink>
    </div>
  </section>

  <div class="cta-banner">
    <h2>準備好出發了嗎?</h2>
    <p>探索六大洲熱門地區,找到剛剛好的國外旅程。</p>
    <RouterLink to="/plan" class="cta-link">瀏覽全部行程</RouterLink>
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
  padding: 10px 12px;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition:
    background 0.18s ease,
    transform 0.18s ease;
}
.why-item:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}
.why-item .icon {
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
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
.cta-banner .cta-link {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14.5px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
}
.cta-banner .cta-link:hover {
  background: #d4551f;
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
