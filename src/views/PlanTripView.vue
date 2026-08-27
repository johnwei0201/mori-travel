<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import heroFuji from '../assets/images/hero-japan-fuji.png'
import { travelStyles, months, hotSearches, otherPaths } from '../data/planTrip.js'
import { trips } from '../data/trips.js'

const selectedStyle = ref('autumn')
const selectedMonth = ref(11)

const styleName = computed(() => travelStyles.find((s) => s.id === selectedStyle.value).name)

const tripList = computed(() =>
  Object.entries(trips).map(([slug, trip]) => ({ slug, ...trip })),
)
</script>

<template>
  <section class="hero">
    <img :src="heroFuji" alt="富士山與河口湖的秋日楓紅" class="hero-photo" />
    <div class="hero-veil"></div>
    <div class="hero-copy">
      <div class="eyebrow light">PLAN YOUR TRIP</div>
      <h1>開始找旅行</h1>
      <p>還沒決定去哪裡也沒關係,三個步驟,幫你找到剛剛好的那一趟。</p>
    </div>
  </section>

  <div class="wrap">
    <div class="panel">
      <div class="panel-head">
        <h2>告訴我們你的旅行輪廓</h2>
        <span class="hint">全部選填,填越多找得越準</span>
      </div>

      <div class="fields">
        <div class="field">
          <label>DESTINATION</label>
          <div class="value placeholder">輸入國家、城市或景點</div>
        </div>
        <div class="field">
          <label>DEPARTURE MONTH</label>
          <div class="value">
            <span>2025 年 {{ selectedMonth }} 月</span><span class="caret">▾</span>
          </div>
        </div>
        <div class="field">
          <label>DURATION</label>
          <div class="value"><span>5–7 天</span><span class="caret">▾</span></div>
        </div>
        <div class="field">
          <label>BUDGET</label>
          <div class="value"><span>NT$3 萬以下</span><span class="caret">▾</span></div>
        </div>
        <button class="search-btn">搜尋行程</button>
      </div>

      <div class="quick">
        <span>熱門搜尋</span>
        <a v-for="q in hotSearches" :key="q" href="#">{{ q }}</a>
      </div>
    </div>
  </div>

  <section class="step wrap">
    <div class="step-head">
      <div class="step-num">01</div>
      <div class="step-title">
        <div class="eyebrow">TRAVEL STYLE</div>
        <h2>你想要什麼樣的旅行?</h2>
        <p>先從感覺開始挑。選一個最貼近你這趟想要的氛圍,我們會依此篩掉不合適的行程。</p>
      </div>
    </div>

    <div class="styles">
      <button
        v-for="s in travelStyles"
        :key="s.id"
        class="style"
        :class="{ active: selectedStyle === s.id }"
        :aria-pressed="selectedStyle === s.id"
        @click="selectedStyle = s.id"
      >
        <img :src="s.img" :alt="s.name" />
        <span class="style-mark">✓</span>
        <span class="style-body">
          <span class="style-name">{{ s.name }}</span>
          <span class="style-note">{{ s.note }}</span>
        </span>
      </button>
    </div>
  </section>

  <section class="step wrap tight">
    <div class="step-head">
      <div class="step-num">02</div>
      <div class="step-title">
        <div class="eyebrow">WHEN TO GO</div>
        <h2>什麼時候出發?</h2>
        <p>每個月都有它最好看的地方。看過整年的當季景色,再決定哪一段時間最適合你。</p>
      </div>
    </div>

    <div class="months">
      <button
        v-for="mo in months"
        :key="mo.m"
        class="month"
        :class="{ active: selectedMonth === mo.m }"
        :aria-pressed="selectedMonth === mo.m"
        @click="selectedMonth = mo.m"
      >
        <span class="month-num">{{ String(mo.m).padStart(2, '0') }}<em>月</em></span>
        <span class="month-season">{{ mo.season }}</span>
        <span class="month-where">{{ mo.where }}</span>
      </button>
    </div>
    <p class="months-note">※ 花期與雪況每年略有差異,實際出發日期以行程頁面公告為準。</p>
  </section>

  <section class="step wrap tight">
    <div class="step-head">
      <div class="step-num">03</div>
      <div class="step-title">
        <div class="eyebrow">YOUR MATCHES</div>
        <h2>剛剛好的行程</h2>
        <p>
          依照你選的「{{ styleName }} × {{ selectedMonth }} 月出發」,我們挑出這幾趟。點進去可以看完整每日行程與費用說明。
        </p>
      </div>
    </div>

    <div class="result-bar">
      <span>符合條件的行程 <b>{{ tripList.length }}</b> 筆</span>
      <span class="sort">排序:出發日期由近至遠</span>
    </div>

    <div class="trips">
      <article v-for="trip in tripList" :key="trip.slug" class="trip">
        <div class="trip-media">
          <img :src="trip.heroImg" :alt="trip.title" />
          <span class="trip-tag">{{ trip.tag }}</span>
        </div>
        <div class="trip-body">
          <h3>{{ trip.title }}</h3>
          <div class="trip-meta">
            <span>📅 {{ trip.date }} 出發</span>
            <span>☀️ {{ trip.duration }}</span>
          </div>
          <div class="trip-chips">
            <span v-for="f in trip.features" :key="f">{{ f }}</span>
          </div>
          <div class="trip-foot">
            <span class="price">NT${{ trip.price.toLocaleString() }}<small>/人</small></span>
            <RouterLink :to="`/trips/${trip.slug}`">查看行程</RouterLink>
          </div>
        </div>
      </article>
    </div>
  </section>

  <section class="paths">
    <div class="wrap">
      <div class="eyebrow">OTHER WAYS IN</div>
      <h2 class="paths-heading">還是沒想法?換個方式找</h2>
      <div class="paths-grid">
        <RouterLink v-for="p in otherPaths" :key="p.title" :to="p.to" class="path">
          <span class="path-icon">{{ p.icon }}</span>
          <h3>{{ p.title }}</h3>
          <p>{{ p.text }}</p>
          <span class="path-go">{{ p.action }} →</span>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="cta">
    <div class="wrap">
      <div class="eyebrow light">TALK TO US</div>
      <h2>還在猶豫哪一趟?我們陪你想</h2>
      <p>留下你的旅行想像,專屬顧問會在一個工作天內回覆,替你比對最適合的出發日期與行程安排。</p>
      <RouterLink to="/consult" class="cta-btn">預約免費諮詢</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.wrap {
  max-width: 1180px;
  margin: 0 auto;
  padding-inline: 40px;
}

.eyebrow {
  font-size: 12.5px;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  line-height: 1;
}
.eyebrow.light {
  color: #ffd9c2;
}

/* hero */
.hero {
  position: relative;
}
.hero-photo {
  width: 100%;
  height: clamp(340px, 46vw, 520px);
  object-fit: cover;
  display: block;
}
.hero-veil {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(6, 65, 63, 0.42) 0%,
    rgba(6, 65, 63, 0.12) 38%,
    rgba(250, 247, 242, 0) 62%
  );
}
.hero-copy {
  position: absolute;
  top: clamp(32px, 6vw, 62px);
  left: 0;
  right: 0;
  text-align: center;
  color: #fff;
  padding-inline: 24px;
}
.hero-copy h1 {
  font-size: clamp(30px, 4.6vw, 50px);
  font-weight: 700;
  letter-spacing: 1px;
  margin-top: 12px;
  text-shadow: 0 2px 18px rgba(6, 65, 63, 0.45);
}
.hero-copy p {
  margin-top: 10px;
  font-size: clamp(14px, 1.5vw, 16.5px);
  color: #f2ede6;
  text-shadow: 0 1px 10px rgba(6, 65, 63, 0.5);
}

/* search panel */
.panel {
  position: relative;
  z-index: 5;
  margin-top: clamp(-110px, -9vw, -70px);
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 18px 48px rgba(43, 36, 32, 0.16);
  padding: clamp(20px, 2.6vw, 30px);
}
.panel-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 18px;
}
.panel-head h2 {
  font-size: clamp(18px, 2vw, 22px);
  color: var(--color-primary);
}
.panel-head .hint {
  font-size: 13px;
  color: #6b6259;
}

.fields {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1fr auto;
  gap: 12px;
  align-items: end;
}
.field {
  border: 1px solid #e7e0d6;
  border-radius: 10px;
  padding: 9px 14px;
  transition: border-color 0.15s ease;
}
.field:hover {
  border-color: #cdbfae;
}
.field label {
  display: block;
  font-size: 10.5px;
  letter-spacing: 1.4px;
  color: #6b6259;
  line-height: 1;
  margin-bottom: 6px;
}
.field .value {
  font-size: 14.5px;
  color: #2b2420;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}
.field .value.placeholder {
  color: #a89c8e;
}
.field .caret {
  color: #b5a898;
  font-size: 11px;
}
.search-btn {
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 10px;
  padding: 15px 30px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  height: 100%;
  white-space: nowrap;
  transition: background 0.15s ease;
}
.search-btn:hover {
  background: #d4551f;
}

.quick {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 16px;
  padding-top: 15px;
  border-top: 1px solid #e7e0d6;
  font-size: 13px;
  color: #6b6259;
}
.quick a {
  color: var(--color-primary);
  text-decoration: none;
  border: 1px solid #e7e0d6;
  border-radius: 999px;
  padding: 4px 13px;
  background: var(--color-bg);
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.quick a:hover {
  border-color: var(--color-primary);
  background: #eef4f2;
}

/* step sections */
.step {
  padding-block: clamp(48px, 6vw, 76px);
}
.step.tight {
  padding-top: 0;
}
.step-head {
  display: flex;
  align-items: flex-start;
  gap: clamp(14px, 2vw, 22px);
  margin-bottom: clamp(24px, 3vw, 34px);
}
.step-num {
  font-size: clamp(38px, 5vw, 58px);
  font-weight: 300;
  line-height: 0.82;
  color: #f8dccd;
  font-variant-numeric: tabular-nums;
  flex-shrink: 0;
}
.step-title h2 {
  font-size: clamp(22px, 2.7vw, 31px);
  color: var(--color-primary);
  margin-top: 8px;
}
.step-title p {
  color: #6b6259;
  font-size: 14.5px;
  line-height: 1.9;
  margin-top: 6px;
  max-width: 62ch;
}

/* travel styles */
.styles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(12px, 1.6vw, 20px);
}
.style {
  position: relative;
  border: none;
  padding: 0;
  background: none;
  border-radius: 14px;
  overflow: hidden;
  text-align: left;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(43, 36, 32, 0.07);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.style img {
  width: 100%;
  height: clamp(130px, 15vw, 172px);
  object-fit: cover;
  display: block;
}
.style:hover {
  transform: translateY(-3px);
  box-shadow: 0 14px 26px rgba(43, 36, 32, 0.16);
  outline: 2.5px solid var(--color-accent);
  outline-offset: -2.5px;
}
.style-body {
  display: block;
  background: #fff;
  padding: 13px 16px 15px;
}
.style-name {
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: var(--color-primary);
}
.style-note {
  display: block;
  font-size: 12.5px;
  color: #6b6259;
  margin-top: 2px;
}
.style-mark {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);
  border: 1.5px solid rgba(255, 255, 255, 0.9);
  display: grid;
  place-items: center;
  color: transparent;
  font-size: 14px;
  font-weight: 700;
  transition:
    background 0.18s ease,
    color 0.18s ease;
}
.style.active {
  outline: 2.5px solid var(--color-accent);
  outline-offset: -2.5px;
}
.style.active .style-mark {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}

/* month grid */
.months {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: clamp(8px, 1vw, 12px);
}
.month {
  border: 1px solid #e7e0d6;
  background: #fff;
  border-radius: 12px;
  padding: 14px 12px 15px;
  text-align: left;
  cursor: pointer;
  transition:
    border-color 0.18s ease,
    background 0.18s ease,
    transform 0.18s ease;
}
.month:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}
.month-num {
  display: block;
  font-size: 21px;
  font-weight: 700;
  color: var(--color-primary);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}
.month-num em {
  font-style: normal;
  font-size: 12px;
  font-weight: 400;
  color: #6b6259;
  margin-left: 2px;
}
.month-season {
  display: block;
  margin-top: 9px;
  font-size: 13.5px;
  font-weight: 500;
  color: #2b2420;
  line-height: 1.5;
}
.month-where {
  display: block;
  margin-top: 3px;
  font-size: 11.5px;
  color: #6b6259;
  line-height: 1.5;
}
.month.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
}
.month.active .month-num,
.month.active .month-season {
  color: #fff;
}
.month.active .month-num em,
.month.active .month-where {
  color: #b8d6d2;
}
.months-note {
  margin-top: 12px;
  font-size: 12.5px;
  color: #6b6259;
}

/* results */
.result-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
  padding: 13px 18px;
  background: #fdf1e0;
  border-radius: 10px;
  margin-bottom: 22px;
  font-size: 14px;
}
.result-bar b {
  color: var(--color-primary);
}
.result-bar .sort {
  color: #6b6259;
  font-size: 13px;
}

.trips {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(14px, 1.8vw, 24px);
}
.trip {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(43, 36, 32, 0.08);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.trip:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(43, 36, 32, 0.16);
}
.trip-media {
  position: relative;
}
.trip-media img {
  width: 100%;
  height: clamp(150px, 17vw, 194px);
  object-fit: cover;
  display: block;
}
.trip-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-accent);
  color: #fff;
  font-size: 12px;
  padding: 4px 11px;
  border-radius: 6px;
}
.trip-body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.trip-body h3 {
  font-size: 17.5px;
  color: var(--color-primary);
}
.trip-meta {
  font-size: 12.5px;
  color: #6b6259;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.trip-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.trip-chips span {
  background: #fdf1e0;
  color: var(--color-primary);
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 6px;
}
.trip-foot {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #e7e0d6;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}
.price {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}
.price small {
  font-size: 12px;
  color: #6b6259;
  font-weight: 400;
  margin-left: 3px;
}
.trip-foot a {
  font-size: 13.5px;
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
  transition: color 0.15s ease;
}
.trip-foot a:hover {
  color: var(--color-accent);
}

/* other paths */
.paths {
  background: #fff;
  border-top: 1px solid #e7e0d6;
  border-bottom: 1px solid #e7e0d6;
  padding-block: clamp(42px, 5vw, 64px);
}
.paths-heading {
  font-size: clamp(21px, 2.5vw, 28px);
  color: var(--color-primary);
  margin-top: 10px;
}
.paths-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(14px, 2vw, 26px);
  margin-top: 26px;
}
.path {
  border: 1px solid #e7e0d6;
  border-radius: 12px;
  padding: 22px 22px 24px;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    transform 0.18s ease;
}
.path:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}
.path-icon {
  font-size: 22px;
  line-height: 1;
}
.path h3 {
  font-size: 16.5px;
  color: var(--color-primary);
}
.path p {
  font-size: 13.5px;
  color: #6b6259;
  line-height: 1.8;
}
.path-go {
  margin-top: 4px;
  font-size: 13.5px;
  color: var(--color-accent);
  font-weight: 500;
}

/* cta */
.cta {
  background: var(--color-primary);
  color: #fff;
  padding-block: clamp(46px, 6vw, 72px);
  text-align: center;
}
.cta h2 {
  font-size: clamp(23px, 3vw, 32px);
  margin-top: 12px;
}
.cta p {
  color: #cfe0dd;
  font-size: 15px;
  line-height: 1.9;
  margin-top: 10px;
  max-width: 54ch;
  margin-inline: auto;
}
.cta-btn {
  display: inline-block;
  margin-top: 24px;
  background: var(--color-accent);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 14px 34px;
  font-size: 15.5px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.15s ease;
}
.cta-btn:hover {
  background: #d4551f;
}

@media (max-width: 1024px) {
  .wrap {
    padding-inline: 24px;
  }
  .fields {
    grid-template-columns: 1fr 1fr;
  }
  .search-btn {
    grid-column: 1 / -1;
    height: auto;
    padding: 14px;
  }
  .styles {
    grid-template-columns: repeat(2, 1fr);
  }
  .months {
    grid-template-columns: repeat(4, 1fr);
  }
  .trips {
    grid-template-columns: repeat(2, 1fr);
  }
  .paths-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .wrap {
    padding-inline: 16px;
  }
  .panel {
    margin-top: -46px;
    border-radius: 14px;
  }
  .fields {
    grid-template-columns: 1fr;
  }
  .styles {
    grid-template-columns: 1fr 1fr;
  }
  .months {
    grid-template-columns: repeat(2, 1fr);
  }
  .trips {
    grid-template-columns: 1fr;
  }
  .step-head {
    gap: 12px;
  }
}
</style>
