<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import AppIcon from '../components/ui/AppIcon.vue'
import PlaceMap from '../components/ui/PlaceMap.vue'
import { attractions } from '../data/attractions.js'

const route = useRoute()
const spot = computed(() => attractions[route.params.slug])

/** 同一個地區的其他景點,放在頁尾讓人繼續逛 */
const siblings = computed(() => {
  if (!spot.value) return []
  return Object.entries(attractions)
    .filter(([slug, a]) => a.regionSlug === spot.value.regionSlug && slug !== route.params.slug)
    .map(([slug, a]) => ({ slug, ...a }))
})
</script>

<template>
  <div v-if="spot">
    <div class="breadcrumb">
      <RouterLink to="/">首頁</RouterLink>
      <span class="sep">›</span>
      <span>{{ spot.parent }}</span>
      <span class="sep">›</span>
      <RouterLink :to="`/destinations/${spot.regionSlug}`">{{ spot.region }}</RouterLink>
      <span class="sep">›</span>
      <span>{{ spot.name }}</span>
    </div>

    <section class="hero">
      <img :src="spot.img" :alt="spot.name" class="hero-photo" />
      <div class="hero-scrim"></div>
      <div class="hero-text">
        <div class="hero-eyebrow">{{ spot.eyebrow }}</div>
        <h1 class="hero-title">{{ spot.name }}</h1>
        <p class="hero-tagline">{{ spot.tagline }}</p>
      </div>
    </section>

    <div class="facts-card">
      <div class="fact" v-for="f in spot.facts" :key="f.label">
        <div class="fact-icon"><AppIcon :name="f.icon" :size="20" /></div>
        <div class="fact-label">{{ f.label }}</div>
        <div class="fact-value">{{ f.value }}</div>
      </div>
    </div>

    <section class="intro">
      <div class="intro-text">
        <div class="section-label">ABOUT</div>
        <h2>關於{{ spot.name }}</h2>
        <p>{{ spot.intro }}</p>
      </div>
      <PlaceMap :query="spot.mapQuery" :label="`${spot.name}的位置地圖`" />
    </section>

    <section class="points">
      <div class="section-label">HIGHLIGHTS</div>
      <h2>不能錯過</h2>
      <div class="point-grid">
        <div v-for="(p, i) in spot.points" :key="p.title" class="point-card">
          <span class="point-num">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
        </div>
      </div>
    </section>

    <section class="tips-section">
      <div class="tips-inner">
        <div class="section-label">GOOD TO KNOW</div>
        <h2>出發前先知道</h2>
        <ul class="tips">
          <li v-for="t in spot.tips" :key="t">
            <AppIcon name="check" :size="17" />
            <span>{{ t }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section v-if="siblings.length" class="siblings wrap">
      <div class="section-label">NEARBY</div>
      <h2>{{ spot.region }}的其他景點</h2>
      <div class="sibling-grid">
        <RouterLink
          v-for="s in siblings"
          :key="s.slug"
          :to="`/attractions/${s.slug}`"
          class="sibling-card"
        >
          <img :src="s.img" :alt="s.name" />
          <div class="sibling-body">
            <h3>{{ s.name }}</h3>
            <p>{{ s.tagline }}</p>
          </div>
        </RouterLink>
      </div>
    </section>

    <div class="cta-banner">
      <h2>想把{{ spot.name }}排進行程嗎?</h2>
      <p>告訴顧問您的假期與預算,我們幫您把路線接起來。</p>
      <div class="cta-actions">
        <RouterLink :to="{ path: '/consult', query: { topic: spot.parent === '國內旅遊' ? '國內旅遊' : spot.region } }" class="cta-primary">
          立即諮詢行程
        </RouterLink>
        <RouterLink :to="`/destinations/${spot.regionSlug}`" class="cta-ghost">
          回到{{ spot.region }}
        </RouterLink>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <p>這個景點頁面還沒有資料。</p>
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
  flex-wrap: wrap;
}
.breadcrumb a {
  text-decoration: none;
  color: inherit;
}
.breadcrumb a:hover {
  color: var(--color-accent);
}
.breadcrumb .sep {
  opacity: 0.6;
}

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 40px;
}

.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

/* 主視覺 */
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
  background: linear-gradient(180deg, rgba(6, 32, 31, 0.05) 0%, rgba(6, 32, 31, 0.68) 100%);
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
  font-size: clamp(34px, 5vw, 56px);
  margin: 0 0 10px;
}
.hero-tagline {
  font-size: 17px;
  opacity: 0.92;
  margin: 0;
}

/* 快速資訊 */
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

/* 簡介 */
/* 左欄文案、右欄地圖。1024 以下改成上下堆疊,
   中間尺寸硬擠兩欄的話文字與地圖都會太窄。 */
.intro {
  padding: 76px 40px 60px;
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 44px;
  /* 文案靠上,與地圖上緣切齊;置中的話文字短時上方會空一塊 */
  align-items: start;
}
.intro-text {
  text-align: left;
}
.intro h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 18px;
}
.intro p {
  font-size: 15.5px;
  line-height: 1.95;
  color: #2b2420;
  margin: 0;
}

/* 看點 */
.points {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 40px 72px;
}
.points h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 32px;
}
.point-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.point-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 26px 24px 28px;
}
.point-num {
  display: block;
  font-size: 26px;
  font-weight: 300;
  color: #f8dccd;
  font-variant-numeric: tabular-nums;
  line-height: 1;
  margin-bottom: 12px;
}
.point-card h3 {
  font-size: 17px;
  color: var(--color-primary);
  margin: 0 0 8px;
}
.point-card p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.85;
  margin: 0;
}

/* 出發前先知道 */
.tips-section {
  background: #fdf1e0;
  padding: clamp(44px, 5.5vw, 64px) 40px;
}
.tips-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.tips-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 24px;
}
.tips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 14px;
}
.tips li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14.5px;
  color: #2b2420;
  line-height: 1.8;
}
.tips li :deep(.app-icon) {
  color: var(--color-primary);
  margin-top: 3px;
}

/* 同區其他景點 */
.siblings {
  padding-block: clamp(44px, 5.5vw, 68px);
}
.siblings h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.sibling-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 22px;
}
.sibling-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  overflow: hidden;
  text-decoration: none;
  display: block;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.sibling-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 26px rgba(43, 36, 32, 0.16);
}
.sibling-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
}
.sibling-body {
  padding: 16px 18px 20px;
}
.sibling-body h3 {
  font-size: 16.5px;
  color: var(--color-primary);
  margin: 0 0 6px;
}
.sibling-body p {
  font-size: 13px;
  color: #6b6259;
  line-height: 1.75;
  margin: 0;
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
  margin: 0 0 10px;
}
.cta-banner p {
  font-size: 14.5px;
  color: #cfe0dd;
  margin: 0 0 24px;
}
.cta-actions {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-primary,
.cta-ghost {
  display: inline-block;
  padding: 13px 30px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  text-decoration: none;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.cta-primary {
  background: var(--color-accent);
  color: #fff;
}
.cta-primary:hover {
  background: #d4551f;
}
.cta-ghost {
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
}
.cta-ghost:hover {
  border-color: #fff;
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
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .points {
    padding: 0 24px 60px;
  }
  .point-grid,
  .sibling-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .wrap,
  .tips-section {
    padding-inline: 24px;
  }
  .cta-banner {
    margin-inline: 24px;
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
    bottom: 48px;
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
  .points {
    padding: 0 16px 48px;
  }
  .point-grid,
  .sibling-grid {
    grid-template-columns: 1fr;
  }
  .wrap,
  .tips-section {
    padding-inline: 16px;
  }
  .cta-banner {
    margin-inline: 16px;
    padding: 32px 20px;
  }
}
</style>
