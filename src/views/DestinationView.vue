<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { destinations } from '../data/destinations.js'
import AppIcon from '../components/ui/AppIcon.vue'

const route = useRoute()
const dest = computed(() => destinations[route.params.slug])

// 帶去諮詢頁的主題:國內六區統一送「國內旅遊」,國外則直接用地區名
const consultTopic = computed(() =>
  dest.value?.breadcrumb === '國內旅遊' ? '國內旅遊' : dest.value?.name,
)
</script>

<template>
  <div v-if="dest">
    <div class="breadcrumb">
      <RouterLink to="/">首頁</RouterLink>
      <span class="sep">›</span>
      <span>{{ dest.breadcrumb || '熱門目的地' }}</span>
      <span class="sep">›</span>
      <span>{{ dest.name }}</span>
    </div>

    <section class="hero">
      <img v-if="dest.heroImg" :src="dest.heroImg" :alt="dest.name + '主視覺'" class="hero-photo" />
      <div v-else class="hero-photo placeholder hero-placeholder">
        <AppIcon class="ph-mark" name="image" :size="30" />
        <span class="ph-text">主視覺待補</span>
      </div>
      <div class="hero-scrim" :class="{ 'scrim-light': !dest.heroImg }"></div>
      <div class="hero-text" :class="{ 'text-dark': !dest.heroImg }">
        <div class="hero-eyebrow">{{ dest.eyebrow }}</div>
        <h1 class="hero-title">{{ dest.name }}</h1>
        <p class="hero-tagline">{{ dest.tagline }}</p>
      </div>
    </section>

    <div class="facts-card">
      <div class="fact" v-for="f in dest.facts" :key="f.label">
        <div class="fact-icon"><AppIcon :name="f.icon" :size="20" /></div>
        <div class="fact-label">{{ f.label }}</div>
        <div class="fact-value">{{ f.value }}</div>
      </div>
    </div>

    <section class="intro">
      <div class="section-label">{{ dest.introEyebrow }}</div>
      <h2>{{ dest.introHeading }}</h2>
      <p>{{ dest.introText }}</p>
    </section>

    <section class="highlights">
      <div class="section-label">MUST-SEE</div>
      <h2>精選景點</h2>
      <div class="highlight-grid">
        <div class="highlight-card" v-for="h in dest.highlights" :key="h.name">
          <img v-if="h.img" :src="h.img" :alt="h.name" class="highlight-photo" />
          <div v-else class="highlight-photo placeholder">
            <span class="ph-text">圖片待補</span>
          </div>
          <div class="highlight-body">
            <h3>{{ h.name }}</h3>
            <p>{{ h.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <div class="cta-banner">
      <h2>{{ dest.ctaHeading }}</h2>
      <p>{{ dest.ctaText }}</p>
      <RouterLink :to="{ path: '/consult', query: { topic: consultTopic } }" class="cta-link">
        立即諮詢行程
      </RouterLink>
    </div>
  </div>

  <div v-else class="not-found">
    <p>這個目的地頁面還沒有資料。</p>
    <RouterLink to="/">回首頁</RouterLink>
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

.hero {
  position: relative;
  margin-top: 10px;
}
.hero-photo {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 32, 31, 0.05) 0%, rgba(6, 32, 31, 0.65) 100%);
}
.hero-text {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 64px;
  padding: 0 40px;
  color: #fff;
  text-align: center;
}
.hero-eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.85;
  margin-bottom: 10px;
}
.hero-title {
  font-weight: 700;
  font-size: clamp(40px, 6vw, 64px);
  margin: 0 0 10px;
}
.hero-tagline {
  font-size: 17px;
  opacity: 0.92;
  margin: 0;
}

/* 圖片待補時的佔位樣式 —— 資料補上 img 之後這些規則就不會生效 */
.placeholder {
  background: repeating-linear-gradient(45deg, #f3ece1, #f3ece1 14px, #efe6d8 14px, #efe6d8 28px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #a89c8e;
}
/* .highlight-photo / .hero-photo 的 display:block 定義在後面,
   這裡用複合選擇器提高特異性,確保佔位內容維持置中 */
.hero-photo.placeholder,
.highlight-photo.placeholder {
  display: flex;
}
.hero-placeholder {
  justify-content: flex-start;
  padding-top: 48px;
}
.ph-mark {
  opacity: 0.55;
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
.text-dark .hero-eyebrow {
  opacity: 0.7;
}
.text-dark .hero-tagline {
  color: #6b6259;
  opacity: 1;
}

.facts-card {
  max-width: 1040px;
  margin: -46px auto 0;
  position: relative;
  z-index: 2;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 18px 24px;
}
.fact {
  text-align: center;
  padding: 6px 18px;
  border-left: 1px solid #e7e0d6;
}
.fact:first-child {
  border-left: none;
}
.fact-icon {
  display: flex;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 6px;
}
.fact-label {
  font-size: 12px;
  color: #6b6259;
  margin-bottom: 3px;
}
.fact-value {
  font-size: 14px;
  font-weight: 700;
  color: var(--color-primary);
}

.intro {
  padding: 76px 40px 60px;
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
}
.intro h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 18px;
}
.intro p {
  font-size: 15.5px;
  line-height: 1.9;
  color: #2b2420;
  margin: 0 auto;
}

.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}
.highlights {
  padding: 20px 40px 72px;
  max-width: 1120px;
  margin: 0 auto;
}
.highlights h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 32px;
}
.highlight-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 22px;
}
.highlight-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  overflow: hidden;
}
.highlight-photo {
  width: 100%;
  height: 100px;
  object-fit: cover;
  display: block;
}
.highlight-body {
  padding: 18px 20px 22px;
}
.highlight-card h3 {
  font-size: 16px;
  margin: 0 0 8px;
  color: #2b2420;
}
.highlight-card p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.7;
  margin: 0;
}

.cta-banner {
  max-width: 1040px;
  margin: 60px auto;
  padding: 52px 48px;
  background: var(--color-primary);
  color: #fff;
  border-radius: 20px;
  text-align: center;
}
.cta-banner h2 {
  font-size: 26px;
  margin: 0 0 10px;
}
.cta-banner p {
  font-size: 14.5px;
  opacity: 0.85;
  margin: 0 0 24px;
}
.cta-banner .cta-link {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 13px 30px;
  border-radius: 8px;
  font-size: 15px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
}
.cta-banner .cta-link:hover {
  background: #d4551f;
}

.not-found {
  padding: 120px 40px;
  text-align: center;
}

@media (max-width: 1024px) {
  .hero-photo {
    height: 340px;
  }
  .facts-card {
    margin: -36px 24px 0;
  }
  .intro {
    padding: 60px 24px 44px;
  }
  .highlights {
    padding: 20px 24px 60px;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 12px 16px 0;
  }
  .hero-photo {
    height: 260px;
  }
  .hero-text {
    padding: 0 16px;
  }
  .hero-tagline {
    font-size: 14px;
  }
  .facts-card {
    grid-template-columns: repeat(2, 1fr);
    margin: -30px 16px 0;
    padding: 18px 10px;
    gap: 14px 0;
  }
  .fact:nth-child(3) {
    border-left: none;
  }
  .intro {
    padding: 44px 16px 36px;
  }
  .highlights {
    padding: 20px 16px 60px;
  }
  .highlight-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-banner {
    margin: 40px 16px;
    padding: 32px 24px;
  }
}
</style>
