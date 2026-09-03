<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import heroFuji from '../assets/images/hero-japan-fuji.png'
import { travelStyles, months, hotSearches, consultPath } from '../data/planTrip.js'
import AppIcon from '../components/ui/AppIcon.vue'
import { tripCatalog, durationOptions, budgetOptions } from '../data/tripCatalog.js'

// 篩選條件:全部都是空字串 / null = 不限
const keyword = ref('')
const selectedMonth = ref(null)
const selectedDuration = ref('')
const selectedBudget = ref('')
const selectedStyle = ref(null)

const styleName = computed(
  () => travelStyles.find((s) => s.id === selectedStyle.value)?.name ?? '不限風格',
)
const monthName = computed(() => (selectedMonth.value ? `${selectedMonth.value} 月` : '不限月份'))

// 已套用的條件,用來顯示標籤列與判斷要不要顯示「清除」
const activeFilters = computed(() => {
  const list = []
  if (keyword.value.trim()) list.push({ key: 'keyword', text: `關鍵字:${keyword.value.trim()}` })
  if (selectedStyle.value) list.push({ key: 'style', text: styleName.value })
  if (selectedMonth.value) list.push({ key: 'month', text: `${selectedMonth.value} 月出發` })
  if (selectedDuration.value) list.push({ key: 'duration', text: selectedDuration.value })
  if (selectedBudget.value) list.push({ key: 'budget', text: selectedBudget.value })
  return list
})

const results = computed(() =>
  tripCatalog.filter((t) => {
    // 關鍵字:比對標題、地區與 keywords 陣列
    const kw = keyword.value.trim().toLowerCase()
    if (kw) {
      const haystack = [t.title, t.region, ...(t.keywords ?? [])].join(' ').toLowerCase()
      if (!haystack.includes(kw)) return false
    }
    if (selectedMonth.value && t.month !== selectedMonth.value) return false
    if (selectedStyle.value && !t.styles.includes(selectedStyle.value)) return false

    if (selectedDuration.value) {
      const d = durationOptions.find((o) => o.label === selectedDuration.value)
      if (d && (t.days < d.min || t.days > d.max)) return false
    }
    if (selectedBudget.value) {
      const b = budgetOptions.find((o) => o.label === selectedBudget.value)
      if (b && (t.price < b.min || t.price > b.max)) return false
    }
    return true
  }),
)

// 依出發日期由近至遠
const sortedResults = computed(() =>
  [...results.value].sort((a, b) => a.date.localeCompare(b.date)),
)

function removeFilter(key) {
  if (key === 'keyword') keyword.value = ''
  if (key === 'style') selectedStyle.value = null
  if (key === 'month') selectedMonth.value = null
  if (key === 'duration') selectedDuration.value = ''
  if (key === 'budget') selectedBudget.value = ''
}

function clearAll() {
  keyword.value = ''
  selectedStyle.value = null
  selectedMonth.value = null
  selectedDuration.value = ''
  selectedBudget.value = ''
}

// 再點一次同一個選項 = 取消選取,方便把條件放寬
function pickStyle(id) {
  selectedStyle.value = selectedStyle.value === id ? null : id
}
function pickMonth(m) {
  selectedMonth.value = selectedMonth.value === m ? null : m
}

function scrollToResults() {
  document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
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

      <form class="fields" @submit.prevent="scrollToResults">
        <div class="field">
          <label for="f-keyword">DESTINATION</label>
          <input
            id="f-keyword"
            v-model="keyword"
            type="search"
            placeholder="輸入國家、城市或景點"
          />
        </div>
        <div class="field">
          <label for="f-month">DEPARTURE MONTH</label>
          <select id="f-month" v-model="selectedMonth">
            <option :value="null">不限月份</option>
            <option v-for="mo in months" :key="mo.m" :value="mo.m">{{ mo.m }} 月</option>
          </select>
        </div>
        <div class="field">
          <label for="f-days">DURATION</label>
          <select id="f-days" v-model="selectedDuration">
            <option value="">不限天數</option>
            <option v-for="d in durationOptions" :key="d.label" :value="d.label">
              {{ d.label }}
            </option>
          </select>
        </div>
        <div class="field">
          <label for="f-budget">BUDGET</label>
          <select id="f-budget" v-model="selectedBudget">
            <option value="">不限預算</option>
            <option v-for="b in budgetOptions" :key="b.label" :value="b.label">
              {{ b.label }}
            </option>
          </select>
        </div>
        <button type="submit" class="search-btn">搜尋行程</button>
      </form>

      <div class="quick">
        <span>熱門搜尋</span>
        <button v-for="q in hotSearches" :key="q" type="button" @click="keyword = q">
          {{ q }}
        </button>
      </div>
    </div>
  </div>

  <section class="step wrap">
    <div class="step-head">
      <div class="step-num">01</div>
      <div class="step-title">
        <div class="eyebrow">TRAVEL STYLE</div>
        <h2>你想要什麼樣的旅行?</h2>
        <p>先從感覺開始挑。選一個最貼近你這趟想要的氛圍,再點一次可以取消選取。</p>
      </div>
    </div>

    <div class="styles">
      <button
        v-for="s in travelStyles"
        :key="s.id"
        class="style"
        :class="{ active: selectedStyle === s.id }"
        :aria-pressed="selectedStyle === s.id"
        @click="pickStyle(s.id)"
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
        @click="pickMonth(mo.m)"
      >
        <span class="month-num">{{ String(mo.m).padStart(2, '0') }}<em>月</em></span>
        <span class="month-season">{{ mo.season }}</span>
        <span class="month-where">{{ mo.where }}</span>
      </button>
    </div>
    <p class="months-note">※ 花期與雪況每年略有差異,實際出發日期以行程頁面公告為準。</p>
  </section>

  <section id="results" class="step wrap tight">
    <div class="step-head">
      <div class="step-num">03</div>
      <div class="step-title">
        <div class="eyebrow">YOUR MATCHES</div>
        <h2>剛剛好的行程</h2>
        <p>
          目前條件是「{{ styleName }} × {{ monthName }}」。上面任何一個欄位改動,這裡都會即時跟著變。
        </p>
      </div>
    </div>

    <div class="result-bar">
      <span
        >符合條件的行程 <b>{{ sortedResults.length }}</b> 筆</span
      >
      <div v-if="activeFilters.length" class="filter-tags">
        <button
          v-for="f in activeFilters"
          :key="f.key"
          class="filter-tag"
          @click="removeFilter(f.key)"
        >
          {{ f.text }} <span aria-hidden="true">×</span>
          <span class="sr-only">移除此條件</span>
        </button>
        <button class="clear-all" @click="clearAll">清除全部</button>
      </div>
      <span v-else class="sort">排序:出發日期由近至遠</span>
    </div>

    <div v-if="sortedResults.length" class="trips">
      <article v-for="trip in sortedResults" :key="trip.id" class="trip">
        <div class="trip-media">
          <img v-if="trip.img" :src="trip.img" :alt="trip.title" />
          <div v-else class="trip-placeholder">圖片待補</div>
          <span class="trip-tag">{{ trip.tag }}</span>
        </div>
        <div class="trip-body">
          <h3>{{ trip.title }}</h3>
          <div class="trip-meta">
            <span><AppIcon name="calendar" :size="14" /> {{ trip.date }} 出發</span>
            <span><AppIcon name="sun" :size="14" /> {{ trip.duration }}</span>
          </div>
          <div class="trip-chips">
            <span v-for="f in trip.features" :key="f">{{ f }}</span>
          </div>
          <div class="trip-foot">
            <span class="price">NT${{ trip.price.toLocaleString() }}<small>/人</small></span>
            <RouterLink v-if="trip.detailSlug" :to="`/trips/${trip.detailSlug}`">
              查看行程
            </RouterLink>
            <RouterLink v-else :to="{ path: '/consult', query: { topic: trip.region } }">
              諮詢這條路線
            </RouterLink>
          </div>
        </div>
      </article>
    </div>

    <div v-else class="no-result">
      <p class="no-result-lead">目前沒有行程同時符合這些條件。</p>
      <p class="no-result-hint">可以移除其中一兩個條件再看看,或直接讓顧問幫你找。</p>
      <div class="no-result-actions">
        <button class="reset-btn" @click="clearAll">清除全部條件</button>
        <RouterLink to="/consult" class="ask-link">請顧問幫我找 →</RouterLink>
      </div>
    </div>
  </section>

  <section class="paths">
    <div class="wrap">
      <div class="eyebrow">OTHER WAYS IN</div>
      <h2 class="paths-heading">還是沒想法?</h2>
      <RouterLink :to="consultPath.to" class="path">
        <span class="path-icon"><AppIcon :name="consultPath.icon" :size="26" /></span>
        <div class="path-body">
          <h3>{{ consultPath.title }}</h3>
          <p>{{ consultPath.text }}</p>
        </div>
        <span class="path-go">
          {{ consultPath.action }}
          <span class="go-arrow" aria-hidden="true">➤</span>
        </span>
      </RouterLink>
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
.field input,
.field select {
  width: 100%;
  border: none;
  background: none;
  font: inherit;
  font-size: 14.5px;
  color: #2b2420;
  padding: 0;
  cursor: pointer;
}
.field input {
  cursor: text;
}
.field input:focus,
.field select:focus {
  outline: none;
}
.field:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}
.field input::placeholder {
  color: #a89c8e;
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
.quick button {
  color: var(--color-primary);
  font: inherit;
  font-size: 13px;
  border: 1px solid #e7e0d6;
  border-radius: 999px;
  padding: 4px 13px;
  background: var(--color-bg);
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.quick button:hover {
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

.filter-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}
.filter-tag {
  border: 1px solid #e3cdae;
  background: #ffffff;
  color: var(--color-primary);
  border-radius: 999px;
  padding: 4px 12px;
  font: inherit;
  font-size: 13px;
  cursor: pointer;
  transition:
    border-color 0.15s ease,
    color 0.15s ease;
}
.filter-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
.clear-all {
  border: none;
  background: none;
  font: inherit;
  font-size: 13px;
  color: #6b6259;
  text-decoration: underline;
  cursor: pointer;
}
.clear-all:hover {
  color: var(--color-accent);
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.trip-placeholder {
  width: 100%;
  height: clamp(150px, 17vw, 194px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 1px;
  color: #a89c8e;
  background: repeating-linear-gradient(45deg, #f3ece1, #f3ece1 14px, #efe6d8 14px, #efe6d8 28px);
}

.no-result {
  border: 1px dashed #ddd0bd;
  border-radius: 14px;
  padding: clamp(32px, 5vw, 56px) 24px;
  text-align: center;
  background: #fffdfa;
}
.no-result-lead {
  font-size: 16.5px;
  color: var(--color-primary);
  font-weight: 700;
}
.no-result-hint {
  font-size: 14px;
  color: #6b6259;
  margin-top: 8px;
}
.no-result-actions {
  margin-top: 20px;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.reset-btn {
  border: 1px solid #e7e0d6;
  background: #fff;
  border-radius: 8px;
  padding: 11px 22px;
  font: inherit;
  font-size: 14px;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.reset-btn:hover {
  border-color: var(--color-primary);
}
.ask-link {
  font-size: 14px;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
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
  font-size: 14px;
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
.trip-meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.trip-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.trip-chips span {
  background: #fdf1e0;
  color: var(--color-primary);
  font-size: 14px;
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
/* 只剩一張卡,改成橫向長條填滿版面寬度 */
.path {
  margin-top: 26px;
  border: 1px solid #e7e0d6;
  border-radius: 14px;
  padding: clamp(20px, 2.4vw, 28px) clamp(22px, 2.6vw, 32px);
  background: var(--color-bg);
  display: flex;
  align-items: center;
  gap: clamp(16px, 2vw, 26px);
  text-decoration: none;
  transition:
    border-color 0.18s ease,
    box-shadow 0.18s ease;
}
.path:hover {
  border-color: var(--color-primary);
  box-shadow: 0 10px 24px rgba(43, 36, 32, 0.09);
}
.path-body {
  flex: 1;
  min-width: 0;
}
.path-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fdf1e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  flex-shrink: 0;
}
.path h3 {
  font-size: 17.5px;
  color: var(--color-primary);
  margin-bottom: 6px;
}
.path p {
  font-size: 14px;
  color: #6b6259;
  line-height: 1.8;
}
/* 右側行動點,做成按鈕外型讓它在長條裡站得住 */
.path-go {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--color-accent);
  color: #fff;
  font-size: 14.5px;
  font-weight: 700;
  padding: 12px 26px;
  border-radius: 8px;
  white-space: nowrap;
  transition: background 0.15s ease;
}
.path:hover .path-go {
  background: #d4551f;
}
.go-arrow {
  font-size: 15px;
  line-height: 1;
  transition: transform 0.18s ease;
}
.path:hover .go-arrow {
  transform: translateX(3px);
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
  .path {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }
  .path-go {
    width: 100%;
    text-align: center;
  }
  .trips {
    grid-template-columns: 1fr;
  }
  .step-head {
    gap: 12px;
  }
}
</style>
