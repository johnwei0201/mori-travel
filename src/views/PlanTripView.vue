<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import heroKyoto from '../assets/images_縮小/Featured-Attractions---Kyoto.jpg'
import { travelStyles, months, hotSearches, consultPath } from '../data/planTrip.js'
import AppIcon from '../components/ui/AppIcon.vue'
import RelaxNotice from '../components/ui/RelaxNotice.vue'
import AltRegions from '../components/ui/AltRegions.vue'
import TripResultCard from '../components/ui/TripResultCard.vue'
import ConsultCard from '../components/ui/ConsultCard.vue'
import {
  durationOptions,
  budgetOptions,
  searchTrips,
  sortTrips,
  explainRelaxation,
  alternativeRegions,
  recommendTrips,
  regions,
} from '../data/tripCatalog.js'

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

const filters = computed(() => ({
  keyword: keyword.value,
  month: selectedMonth.value,
  duration: selectedDuration.value,
  budget: selectedBudget.value,
  style: selectedStyle.value,
}))

/**
 * 和搜尋結果頁同一套:全中就給全中的,沒有的話自動放寬。
 * 以前這頁用 filterTrips 要求全部符合,四個下拉全填時只有 1.3% 的組合有結果。
 */
const search = computed(() => searchTrips(filters.value))
const relaxedKeys = computed(() => search.value.relaxed)

// 依出發日期由近至遠
const sortedResults = computed(() => sortTrips(search.value.trips, 'date'))

// 已套用的條件,用來顯示標籤列與判斷要不要顯示「清除」;被放寬的另外標示
const activeFilters = computed(() => {
  const list = []
  if (keyword.value) list.push({ key: 'keyword', text: `目的地:${keyword.value}` })
  if (selectedStyle.value) list.push({ key: 'style', text: styleName.value })
  if (selectedMonth.value) list.push({ key: 'month', text: `${selectedMonth.value} 月出發` })
  if (selectedDuration.value) list.push({ key: 'duration', text: selectedDuration.value })
  if (selectedBudget.value) list.push({ key: 'budget', text: selectedBudget.value })
  return list.map((f) => ({ ...f, relaxed: relaxedKeys.value.includes(f.key) }))
})

const relaxNotice = computed(() => explainRelaxation(filters.value, search.value))

/** 「堅持某個條件的話,哪些地區有?」 */
const alternatives = computed(() =>
  relaxNotice.value ? alternativeRegions(filters.value, relaxedKeys.value, keyword.value) : null,
)

/* ── 版面補滿:與搜尋結果頁同一套 ──────────────────────────
   結果常常只有一兩筆,三欄網格會空掉一大半。補的是真東西:
   一張通往諮詢的卡片,以及站上其他真的存在的行程,不生成假行程。 */

/** 只在結果填不滿一整排時補顧問卡,剛好整排就不補 */
const showConsultCard = computed(() => sortedResults.value.length % 3 !== 0)

/** 網格欄數跟著實際張數走,只有一兩張時就不要撐成三欄留空格 */
const gridColumns = computed(() =>
  Math.min(sortedResults.value.length + (showConsultCard.value ? 1 : 0), 3),
)

/** 這頁條件多、結果常常只有一筆,推薦給兩排(6 筆),比搜尋結果頁多一排 */
const recommended = computed(() => recommendTrips(sortedResults.value, filters.value, 6))

/** 一次移除被放寬的條件,讓標籤與實際結果一致。先複製一份,移除過程中 relaxedKeys 會跟著變 */
function dropRelaxed() {
  for (const k of [...relaxedKeys.value]) removeFilter(k)
}

/** 從建議列直接換一個地區,其餘條件保留 */
function useRegion(region) {
  keyword.value = region
}

/** 熱門搜尋:整組條件換掉,沒寫到的欄位回到不限,再捲到結果讓使用者看到變化 */
function applyHotSearch({ filters: f }) {
  keyword.value = f.keyword ?? ''
  selectedMonth.value = f.month ?? null
  selectedDuration.value = f.duration ?? ''
  selectedBudget.value = f.budget ?? ''
  selectedStyle.value = f.style ?? null
  scrollToResults()
}

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
    <img :src="heroKyoto" alt="京都八坂之塔與櫻花掩映的石板坡道" class="hero-photo" />
    <div class="hero-veil"></div>
    <div class="hero-copy">
      <div class="eyebrow light">PLAN YOUR TRIP</div>
      <h1>開始找旅行</h1>
      <p>還沒決定去哪裡也沒關係,三個步驟,幫您找到剛剛好的那一趟。</p>
    </div>
  </section>

  <div class="wrap">
    <div class="panel">
      <div class="panel-head">
        <h2>告訴我們您的旅行輪廓</h2>
        <!-- 原本寫「填越多找得越準」,但條件越多其實越難完全符合,改成不給錯誤期待的說法 -->
        <span class="hint">全部選填,不確定的留白就好</span>
      </div>

      <form class="fields" @submit.prevent="scrollToResults">
        <div class="field">
          <label for="f-keyword">DESTINATION</label>
          <select id="f-keyword" v-model="keyword">
            <option value="">不限目的地</option>
            <option v-for="d in regions" :key="d" :value="d">{{ d }}</option>
          </select>
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
        <button v-for="h in hotSearches" :key="h.label" type="button" @click="applyHotSearch(h)">
          {{ h.label }}
        </button>
      </div>
    </div>
  </div>

  <section class="step wrap">
    <div class="step-head">
      <div class="step-num">01</div>
      <div class="step-title">
        <div class="eyebrow">TRAVEL STYLE</div>
        <h2>您想要什麼樣的旅行?</h2>
        <p>先從感覺開始挑。選一個最貼近您這趟想要的氛圍,再點一次可以取消選取。</p>
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
        <p>每個月都有它最好看的地方。看過整年的當季景色,再決定哪一段時間最適合您。</p>
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
      <!-- 有條件被放寬時,不能再說這些結果「符合」條件 -->
      <span v-if="relaxedKeys.length">
        沒有完全符合的行程,以下是 <b>{{ sortedResults.length }}</b> 筆最接近的
      </span>
      <span v-else>符合條件的行程 <b>{{ sortedResults.length }}</b> 筆</span>
      <div v-if="activeFilters.length" class="filter-tags">
        <button
          v-for="f in activeFilters"
          :key="f.key"
          class="filter-tag"
          :class="{ relaxed: f.relaxed }"
          @click="removeFilter(f.key)"
        >
          <span class="tag-text">{{ f.text }}</span>
          <span v-if="f.relaxed" class="tag-flag">已放寬</span>
          <span v-else aria-hidden="true">×</span>
          <span class="sr-only">{{ f.relaxed ? '這個條件已被放寬,點擊移除' : '移除此條件' }}</span>
        </button>
        <button class="clear-all" @click="clearAll">清除全部</button>
      </div>
      <span v-else class="sort">排序:出發日期由近至遠</span>
    </div>

    <RelaxNotice v-if="relaxNotice" :notice="relaxNotice" @drop="dropRelaxed" />

    <!-- 欄數用 CSS 變數傳,不能直接 inline 設 grid-template-columns,會蓋掉手機版的單欄 -->
    <div
      v-if="sortedResults.length"
      class="trips"
      :style="{ '--cols': gridColumns, '--cols-md': Math.min(gridColumns, 2) }"
    >
      <TripResultCard v-for="trip in sortedResults" :key="trip.id" :trip="trip" />
      <ConsultCard v-if="showConsultCard" :topic="keyword" />
    </div>

    <div v-else class="no-result">
      <p class="no-result-lead">目前沒有行程同時符合這些條件。</p>
      <p class="no-result-hint">可以移除其中一兩個條件再看看,或直接讓顧問幫您找。</p>
      <div class="no-result-actions">
        <button class="reset-btn" @click="clearAll">清除全部條件</button>
        <RouterLink to="/consult" class="ask-link">
          請顧問幫我找
          <span class="go-arrow" aria-hidden="true">➤</span>
        </RouterLink>
      </div>
    </div>

    <!-- 放在 v-if / v-else 那組後面,插在中間會打斷 v-else -->
    <AltRegions v-if="alternatives" :alternatives="alternatives" @pick="useRegion" />
  </section>

  <!-- 站上其他真的存在的行程。標題與說明都寫清楚這不是搜尋結果 -->
  <section v-if="recommended.length" class="step wrap tight">
    <div class="eyebrow">YOU MAY ALSO LIKE</div>
    <h2 class="recommend-title">您可能也會喜歡</h2>
    <p class="recommend-note">這些不是上面的搜尋結果,是站上其他您可能有興趣的路線。</p>
    <div class="trips">
      <TripResultCard v-for="trip in recommended" :key="trip.id" :trip="trip" />
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
      <h2>還在猶豫哪一趟?我們陪您想</h2>
      <p>留下您的旅行想像,專屬顧問會在一個工作天內回覆,替您比對最適合的出發日期與行程安排。</p>
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
  /* 原圖是正方形,塞進寬扁的版位只看得到中間約三分之一。置中會從塔身
     中間切斷,往上取到 5% 才留得住完整的八坂之塔,標題也剛好壓在天空上。 */
  object-position: 50% 5%;
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
  /* button 預設會把內容垂直置中,說明只有一行的卡片就會在圖片上方留白;
     改成直向 flex,再讓文字區塊吃掉剩餘高度,圖片才會貼齊頂端 */
  display: flex;
  flex-direction: column;
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
  flex-shrink: 0;
}
.style:hover {
  transform: translateY(-4px);
  box-shadow: 0 14px 26px rgba(43, 36, 32, 0.16);
}
.style-body {
  display: block;
  background: #fff;
  padding: 13px 16px 15px;
  flex: 1;
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
/* 被系統暫時放寬的條件:虛線、劃掉,並標一個橘色的「已放寬」,與搜尋結果頁同一種標示。
   不直接讓標籤消失,使用者才知道系統動了什麼手腳。 */
.filter-tag.relaxed {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border-style: dashed;
  border-color: #d8cfc2;
  background: transparent;
  color: #6b6259;
}
.filter-tag.relaxed .tag-text {
  text-decoration: line-through;
  text-decoration-color: #bfb5a8;
}
/* 結果列本身是淺橘底,旗標改用白底才看得出來 */
.tag-flag {
  font-size: 11px;
  color: var(--color-accent);
  background: #fff;
  border-radius: 4px;
  padding: 1px 6px;
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
/* 與旁邊的「清除全部條件」成對:那顆是次要動作(白底外框),
   這顆是主要動作,依全站慣例做成橘色實心。內距與它相同,兩顆才等高。 */
.ask-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 22px;
  border: 1px solid var(--color-accent);
  border-radius: 8px;
  background: var(--color-accent);
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  transition:
    background 0.15s ease,
    border-color 0.15s ease;
}
.ask-link:hover {
  background: #d4551f;
  border-color: #d4551f;
}
.ask-link:hover .go-arrow {
  transform: translateX(3px);
}

/* 行程卡本身的樣式在 components/ui/TripResultCard.vue。
   欄數由 CSS 變數傳進來;推薦區沒傳變數,就用這裡的預設值。 */
.trips {
  --cols: 3;
  --cols-md: 2;
  display: grid;
  grid-template-columns: repeat(var(--cols), 1fr);
  gap: clamp(14px, 1.8vw, 24px);
}

/* 您可能也會喜歡 */
.recommend-title {
  font-size: clamp(22px, 2.7vw, 31px);
  color: var(--color-primary);
  margin-top: 8px;
}
.recommend-note {
  font-size: 14px;
  color: #6b6259;
  margin: 6px 0 clamp(20px, 2.4vw, 28px);
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
    grid-template-columns: repeat(var(--cols-md), 1fr);
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
  /* 手機上排成一欄,整組(圖示、標題、說明、按鈕)置中,
     與頁尾那個 CTA 區塊同一種處理 */
  .path {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .path-go {
    /* 不要撐滿整張卡片,縮到內容寬度就好 */
    width: auto;
    /* 這是 inline-flex,text-align 對裡面的項目沒有作用,
       要用 justify-content 才能把文字與箭頭置中 */
    justify-content: center;
  }
  .trips {
    grid-template-columns: 1fr;
  }
  .step-head {
    gap: 12px;
  }
}
</style>
