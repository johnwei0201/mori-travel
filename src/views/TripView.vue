<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { trips } from '../data/trips.js'

const route = useRoute()
const trip = computed(() => trips[route.params.slug])
const total = computed(() => (trip.value ? trip.value.price * 2 : 0))
</script>

<template>
  <div v-if="trip">
    <div class="breadcrumb">
      <RouterLink to="/">首頁</RouterLink>
      <span class="sep">›</span>
      <span>精選國外行程</span>
      <span class="sep">›</span>
      <span>{{ trip.title }}</span>
    </div>

    <section class="hero">
      <img :src="trip.heroImg" :alt="trip.title" class="hero-photo" />
      <div class="hero-scrim"></div>
      <div class="hero-text">
        <span class="hero-tag">{{ trip.tag }}</span>
        <h1 class="hero-title">{{ trip.title }}</h1>
      </div>
    </section>

    <div class="layout">
      <div class="main-col">
        <section>
          <div class="meta-row">
            <span>📅 {{ trip.date }} 出發</span>
            <span>☀️ {{ trip.duration }}</span>
            <span>👥 已有 {{ trip.signups }} 人報名</span>
          </div>
          <div class="tag-list">
            <span v-for="f in trip.features" :key="f">{{ f }}</span>
          </div>
        </section>

        <section>
          <div class="section-label">OVERVIEW</div>
          <h2>行程介紹</h2>
          <p class="desc-text">{{ trip.desc }}</p>
        </section>

        <section>
          <div class="section-label">ITINERARY</div>
          <h2>每日行程</h2>
          <div class="itinerary-item" v-for="(day, i) in trip.itinerary" :key="day.title">
            <div class="day-badge"><span>DAY</span><b>{{ i + 1 }}</b></div>
            <div class="itinerary-body">
              <h3>{{ day.title }}</h3>
              <p>{{ day.text }}</p>
            </div>
          </div>
        </section>

        <section>
          <div class="section-label">FARE DETAILS</div>
          <h2>費用說明</h2>
          <div class="include-grid">
            <div>
              <h3>費用包含</h3>
              <ul>
                <li class="yes" v-for="t in trip.include" :key="t">{{ t }}</li>
              </ul>
            </div>
            <div>
              <h3>費用不含</h3>
              <ul>
                <li class="no" v-for="t in trip.exclude" :key="t">{{ t }}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <aside class="booking-box">
        <div class="booking-price-label">每人起</div>
        <div class="booking-price">NT${{ trip.price.toLocaleString() }} <small>/ 人</small></div>

        <div class="booking-field">
          <label>出發日期</label>
          <div class="value"><span>{{ trip.date }}</span><span>▾</span></div>
        </div>

        <div class="booking-field">
          <label>旅客人數</label>
          <div class="value">
            <span>2 位成人</span>
            <span class="qty-control">
              <span class="qty-btn">−</span>
              <span class="qty-btn">+</span>
            </span>
          </div>
        </div>

        <div class="booking-total">
          <span>總計</span>
          <b>NT${{ total.toLocaleString() }}</b>
        </div>

        <button class="book-btn">立即預訂</button>
        <p class="book-note">預訂後將由專屬顧問與您確認行程細節</p>
      </aside>
    </div>
  </div>

  <div v-else class="not-found">
    <p>這個行程頁面還沒有資料。</p>
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
  height: 380px;
  object-fit: cover;
  display: block;
}
.hero-scrim {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(6, 32, 31, 0.05) 0%, rgba(6, 32, 31, 0.7) 100%);
}
.hero-text {
  position: absolute;
  left: 40px;
  right: 40px;
  bottom: 28px;
  color: #fff;
}
.hero-tag {
  display: inline-block;
  background: var(--color-accent);
  color: #fff;
  font-size: 15px;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 12px;
}
.hero-title {
  font-weight: 700;
  font-size: clamp(28px, 4vw, 40px);
  margin: 0;
}

.layout {
  max-width: 1120px;
  margin: 40px auto 80px;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 48px;
  align-items: start;
}

.main-col section {
  margin-bottom: 48px;
}
.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 10px;
}
.main-col h2 {
  font-size: 22px;
  color: var(--color-primary);
  margin: 0 0 16px;
}

.meta-row {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  font-size: 14px;
  color: #6b6259;
  margin-bottom: 20px;
}
.meta-row span {
  display: flex;
  align-items: center;
  gap: 6px;
}

.desc-text {
  font-size: 15px;
  line-height: 1.9;
  color: #2b2420;
}

.tag-list {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.tag-list span {
  background: var(--color-peach, #fdf1e0);
  color: var(--color-primary);
  font-size: 15px;
  padding: 6px 14px;
  border-radius: 6px;
  font-weight: 500;
}

.itinerary-item {
  display: flex;
  gap: 20px;
  padding: 20px 0;
  border-bottom: 1px solid #e7e0d6;
}
.itinerary-item:last-child {
  border-bottom: none;
}
.day-badge {
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--color-primary);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 1.2;
}
.day-badge b {
  font-size: 16px;
}
.itinerary-body h3 {
  font-size: 15.5px;
  margin: 4px 0 6px;
  color: #2b2420;
}
.itinerary-body p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.7;
  margin: 0;
}

.include-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px 24px;
}
.include-grid h3 {
  font-size: 14px;
  margin: 0 0 10px;
  color: var(--color-primary);
}
.include-grid ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.include-grid li {
  font-size: 13.5px;
  color: #2b2420;
  padding: 5px 0 5px 22px;
  position: relative;
}
.include-grid li.yes::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}
.include-grid li.no::before {
  content: '–';
  position: absolute;
  left: 0;
  color: #6b6259;
  font-weight: 700;
}

.booking-box {
  position: sticky;
  top: calc(var(--header-h) + 24px);
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 26px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.booking-price-label {
  font-size: 13px;
  color: #6b6259;
}
.booking-price {
  font-size: 28px;
  font-weight: 700;
  color: var(--color-accent);
  margin: 4px 0 20px;
}
.booking-price small {
  font-size: 13px;
  color: #6b6259;
  font-weight: 400;
}

.booking-field {
  margin-bottom: 16px;
}
.booking-field label {
  display: block;
  font-size: 12.5px;
  color: #6b6259;
  margin-bottom: 6px;
}
.booking-field .value {
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 14.5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.qty-control {
  display: flex;
  align-items: center;
  gap: 14px;
}
.qty-btn {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #e7e0d6;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
}

.booking-total {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-top: 16px;
  margin-top: 4px;
  border-top: 1px solid #e7e0d6;
  font-size: 14px;
  color: #6b6259;
}
.booking-total b {
  font-size: 19px;
  color: #2b2420;
}

.book-btn {
  width: 100%;
  margin-top: 18px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
}
.book-note {
  font-size: 12px;
  color: #6b6259;
  text-align: center;
  margin-top: 10px;
}

.not-found {
  padding: 120px 40px;
  text-align: center;
}

@media (max-width: 1024px) {
  .hero-photo {
    height: 300px;
  }
  .layout {
    grid-template-columns: 1fr;
    padding: 0 24px;
  }
  .booking-box {
    position: static;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 12px 16px 0;
  }
  .hero-photo {
    height: 220px;
  }
  .hero-text {
    left: 16px;
    right: 16px;
    bottom: 18px;
  }
  .layout {
    padding: 0 16px;
    gap: 32px;
  }
  .meta-row {
    gap: 14px;
  }
  .itinerary-item {
    gap: 14px;
  }
  .day-badge {
    width: 44px;
    height: 44px;
  }
  .include-grid {
    grid-template-columns: 1fr;
  }
  .booking-box {
    padding: 20px;
  }
}
</style>
