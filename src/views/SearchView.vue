<script setup>
import { computed, watch, ref } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { months } from '../data/planTrip.js'
import {
  searchTrips,
  sortTrips,
  keywordFacts,
  alternativeRegions,
  FILTER_LABELS,
  durationOptions,
  budgetOptions,
  sortOptions,
  regions,
} from '../data/tripCatalog.js'

const route = useRoute()
const router = useRouter()

/* 條件全部來自網址,重新整理或把連結傳給別人都會得到同一組結果 */
const keyword = ref('')
const month = ref('')
const duration = ref('')
const budget = ref('')
const sortBy = ref('date')

function readQuery() {
  keyword.value = route.query.q ?? ''
  month.value = route.query.month ? Number(route.query.month) : ''
  duration.value = route.query.days ?? ''
  budget.value = route.query.budget ?? ''
  sortBy.value = route.query.sort ?? 'date'
}
readQuery()
watch(() => route.query, readQuery)

/** 改動任何欄位就把條件寫回網址,由 watch 再流回上面的 ref */
function applyFilters() {
  const query = {}
  if (keyword.value.trim()) query.q = keyword.value.trim()
  if (month.value) query.month = month.value
  if (duration.value) query.days = duration.value
  if (budget.value) query.budget = budget.value
  if (sortBy.value !== 'date') query.sort = sortBy.value
  router.replace({ path: '/search', query })
}

function clearAll() {
  keyword.value = ''
  month.value = ''
  duration.value = ''
  budget.value = ''
  applyFilters()
}

/**
 * 選單只列站上有的地區。若使用者是從首頁打字或帶著舊連結進來,
 * 那個字串不在清單裡也不能丟掉,補到最前面當一個選項。
 */
const destOptions = computed(() => {
  const list = [...regions]
  const q = keyword.value.trim()
  if (q && !list.includes(q)) list.unshift(q)
  return list
})

const currentFilters = computed(() => ({
  keyword: keyword.value,
  month: month.value || null,
  duration: duration.value,
  budget: budget.value,
}))

/** 全中就給全中的;沒有的話自動放寬,並回報放寬了哪些條件 */
const search = computed(() => searchTrips(currentFilters.value))
const results = computed(() => sortTrips(search.value.trips, sortBy.value))
const relaxedKeys = computed(() => search.value.relaxed)

/** 已套用的條件,做成可單獨移除的標籤;被放寬的另外標示 */
const activeFilters = computed(() => {
  const list = []
  if (keyword.value.trim()) list.push({ key: 'keyword', text: `「${keyword.value.trim()}」` })
  if (month.value) list.push({ key: 'month', text: `${month.value} 月出發` })
  if (duration.value) list.push({ key: 'duration', text: duration.value })
  if (budget.value) list.push({ key: 'budget', text: budget.value })
  return list.map((f) => ({ ...f, relaxed: relaxedKeys.value.includes(f.key) }))
})

/**
 * 提示條的說明文字。「歐洲最短 10 天」這種話是從資料算出來的,
 * 不是寫死的 —— 之後行程增加了,說明會自己跟著變。
 */
const relaxNotice = computed(() => {
  const keys = relaxedKeys.value
  if (!keys.length || search.value.exhausted) return null

  const names = keys.map((k) => FILTER_LABELS[k])
  const kw = keyword.value.trim()
  const facts = keywordFacts(kw)

  // 連目的地都放寬了,而且那個字在站上根本查不到 —— 要講清楚,
  // 否則使用者只會看到一堆不相干的行程,不知道發生什麼事
  if (keys.includes('keyword') && !facts) {
    return {
      reason: kw ? `站上目前沒有「${kw}」的行程。` : '',
      relaxedText: names.join('」與「'),
    }
  }

  const reasons = []
  if (facts) {
    if (keys.includes('duration')) reasons.push(`最短 ${facts.minDays} 天`)
    if (keys.includes('month')) reasons.push(`出發月份集中在 ${facts.months.join('、')} 月`)
    if (keys.includes('budget')) reasons.push(`最低每人 NT$${facts.minPrice.toLocaleString()}`)
  }

  return {
    reason: reasons.length ? `${kw}的行程${reasons.join(',')}。` : '',
    relaxedText: names.join('」與「'),
  }
})

/** 「堅持某個條件的話,哪些地區有?」 */
const alternatives = computed(() =>
  relaxedKeys.value.length && !search.value.exhausted
    ? alternativeRegions(currentFilters.value, relaxedKeys.value, keyword.value.trim())
    : null,
)

/** 一次把被放寬的條件從網址移除,讓畫面上的標籤與實際結果一致 */
function dropRelaxed() {
  for (const k of relaxedKeys.value) {
    if (k === 'keyword') keyword.value = ''
    if (k === 'month') month.value = ''
    if (k === 'duration') duration.value = ''
    if (k === 'budget') budget.value = ''
  }
  applyFilters()
}

/** 從建議列直接換一個地區,其餘條件保留 */
function useRegion(region) {
  keyword.value = region
  applyFilters()
}

function removeFilter(key) {
  if (key === 'keyword') keyword.value = ''
  if (key === 'month') month.value = ''
  if (key === 'duration') duration.value = ''
  if (key === 'budget') budget.value = ''
  applyFilters()
}

const money = (n) => `NT$${n.toLocaleString()}`
</script>

<template>
  <div class="breadcrumb">
    <RouterLink to="/">首頁</RouterLink>
    <span class="sep">›</span>
    <span>搜尋結果</span>
  </div>

  <section class="page-head">
    <div class="head-inner">
      <div class="eyebrow">SEARCH RESULTS</div>
      <h1>搜尋結果</h1>
      <!-- 有條件被放寬時,不能再說這些結果「符合」原本的條件 -->
      <p v-if="activeFilters.length && relaxedKeys.length">
        沒有完全符合 {{ activeFilters.map((f) => f.text).join('、') }} 的行程,
        以下是 <b>{{ results.length }}</b> 筆最接近的。
      </p>
      <p v-else-if="activeFilters.length">
        找到 <b>{{ results.length }}</b> 筆符合 {{ activeFilters.map((f) => f.text).join('、') }}
        的行程。
      </p>
      <p v-else>目前顯示全部 <b>{{ results.length }}</b> 筆行程,用下方欄位縮小範圍。</p>
    </div>
  </section>

  <!-- 條件列:可直接在結果頁調整,不用回首頁重搜 -->
  <section class="filter-bar">
    <div class="filter-inner">
      <div class="filter-field wide">
        <label for="s-q">目的地</label>
        <select id="s-q" v-model="keyword" @change="applyFilters">
          <option value="">不限</option>
          <option v-for="d in destOptions" :key="d" :value="d">{{ d }}</option>
        </select>
      </div>
      <div class="filter-field">
        <label for="s-month">出發月份</label>
        <select id="s-month" v-model="month" @change="applyFilters">
          <option value="">不限</option>
          <option v-for="mo in months" :key="mo.m" :value="mo.m">{{ mo.m }} 月</option>
        </select>
      </div>
      <div class="filter-field">
        <label for="s-days">旅遊天數</label>
        <select id="s-days" v-model="duration" @change="applyFilters">
          <option value="">不限</option>
          <option v-for="d in durationOptions" :key="d.label" :value="d.label">
            {{ d.label }}
          </option>
        </select>
      </div>
      <div class="filter-field">
        <label for="s-budget">每人預算</label>
        <select id="s-budget" v-model="budget" @change="applyFilters">
          <option value="">不限</option>
          <option v-for="b in budgetOptions" :key="b.label" :value="b.label">{{ b.label }}</option>
        </select>
      </div>
    </div>
  </section>

  <section class="results wrap">
    <div class="result-bar">
      <div class="result-left">
        <span class="result-count">共 <b>{{ results.length }}</b> 筆</span>
        <div v-if="activeFilters.length" class="chips">
          <button
            v-for="f in activeFilters"
            :key="f.key"
            class="chip"
            :class="{ relaxed: f.relaxed }"
            @click="removeFilter(f.key)"
          >
            <span class="chip-text">{{ f.text }}</span>
            <span v-if="f.relaxed" class="chip-flag">已放寬</span>
            <span v-else aria-hidden="true">×</span>
            <span class="sr-only">{{ f.relaxed ? '這個條件已被放寬,點擊移除' : '移除此條件' }}</span>
          </button>
          <button class="clear-all" @click="clearAll">清除全部</button>
        </div>
      </div>
      <div class="sort-field">
        <label for="s-sort">排序</label>
        <select id="s-sort" v-model="sortBy" @change="applyFilters">
          <option v-for="s in sortOptions" :key="s.value" :value="s.value">{{ s.label }}</option>
        </select>
      </div>
    </div>

    <!-- 沒有完全符合時,說明放寬了什麼、為什麼 -->
    <div v-if="relaxNotice" class="relax-notice">
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6" />
        <path d="M12 10.5v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        <circle cx="12" cy="7.4" r="1.15" fill="currentColor" />
      </svg>
      <div class="relax-body">
        <h2>沒有完全符合的行程,已經幫你放寬條件</h2>
        <p>
          {{ relaxNotice.reason }}以下是放寬「{{ relaxNotice.relaxedText }}」之後的結果。
        </p>
        <button class="relax-btn" @click="dropRelaxed">移除這些條件</button>
      </div>
    </div>

    <div v-if="results.length" class="trip-grid">
      <article v-for="trip in results" :key="trip.id" class="trip">
        <div class="trip-media">
          <img v-if="trip.img" :src="trip.img" :alt="trip.title" />
          <div v-else class="trip-placeholder">圖片待補</div>
          <span class="trip-tag">{{ trip.tag }}</span>
        </div>
        <div class="trip-body">
          <span class="trip-region">{{ trip.region }}</span>
          <h2>{{ trip.title }}</h2>
          <div class="trip-meta">
            <span>📅 {{ trip.date }} 出發</span>
            <span>☀️ {{ trip.duration }}</span>
          </div>
          <div class="trip-chips">
            <span v-for="f in trip.features" :key="f">{{ f }}</span>
          </div>
          <div class="trip-foot">
            <span class="price">{{ money(trip.price) }}<small>/人</small></span>
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

    <!-- 放寬之後仍然有結果時,給一條「堅持原條件」也能走的路 -->
    <div v-if="alternatives" class="alt-row">
      <span class="alt-lead">堅持「{{ alternatives.text }}」的話,這些地區有:</span>
      <button
        v-for="a in alternatives.regions"
        :key="a.region"
        class="alt-pill"
        @click="useRegion(a.region)"
      >
        {{ a.region }} <b>{{ a.count }}</b>
      </button>
    </div>

    <!-- 放寬到底仍然沒有,才是真正的空結果 -->
    <div v-if="!results.length" class="no-result">
      <p class="no-result-lead">
        站上目前沒有{{ keyword.trim() ? `${keyword.trim()}的` : '符合的' }}行程。
      </p>
      <p class="no-result-hint">
        我們有 {{ regions.length }} 個地區的路線。要不要讓顧問依你的假期與預算,直接幫你排一趟?
      </p>
      <div class="no-result-actions">
        <RouterLink to="/consult" class="ask-link">
          請顧問幫我找
          <span class="go-arrow" aria-hidden="true">➤</span>
        </RouterLink>
        <button class="reset-btn" @click="clearAll">看所有行程</button>
      </div>
    </div>
  </section>

  <div class="cta-banner">
    <h2>還是想不到要去哪?</h2>
    <p>用三個步驟慢慢挑,或直接把想法交給專屬顧問。</p>
    <div class="cta-actions">
      <RouterLink to="/plan" class="cta-primary">開始找旅行</RouterLink>
      <RouterLink to="/consult" class="cta-ghost">聯絡旅遊顧問</RouterLink>
    </div>
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

.wrap {
  max-width: 1120px;
  margin: 0 auto;
  padding-inline: 40px;
}

.eyebrow {
  font-size: 12.5px;
  letter-spacing: 2.2px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffc4a3;
  line-height: 1;
}

/* 頁首 */
.page-head {
  background: var(--color-primary);
  color: #fff;
  margin-top: 10px;
  padding: clamp(36px, 4.5vw, 56px) 40px;
}
.head-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.page-head h1 {
  font-size: clamp(27px, 3.6vw, 40px);
  font-weight: 700;
  margin: 12px 0 10px;
}
.page-head p {
  font-size: 15.5px;
  line-height: 1.9;
  color: #cfe0dd;
  max-width: 62ch;
  margin: 0;
}
.page-head b {
  color: #ffc4a3;
  font-size: 18px;
}

/* 條件列 */
.filter-bar {
  background: #ffffff;
  border-bottom: 1px solid #e7e0d6;
  padding: 20px 40px;
  position: sticky;
  top: var(--header-h);
  z-index: 10;
}
.filter-inner {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 14px;
}
/* 標籤絕對定位疊在上緣,select 撐滿整個欄位 —— 這樣點欄位的任何位置
   (含箭頭)都能展開下拉,而不是只有下半部那一條才點得到。 */
.filter-field {
  position: relative;
  border: 1px solid #e7e0d6;
  border-radius: 10px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.filter-field:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}
.filter-field label {
  position: absolute;
  top: 9px;
  left: 14px;
  font-size: 11.5px;
  letter-spacing: 0.5px;
  color: #6b6259;
  /* 讓點擊穿透到底下的 select */
  pointer-events: none;
}
.filter-field input,
.filter-field select {
  border: none;
  background: none;
  font: inherit;
  font-size: 14.5px;
  color: #2b2420;
  outline: none;
  width: 100%;
  /* 上方留給標籤,右方留給箭頭 */
  padding: 30px 42px 10px 14px;
}
.filter-field select {
  cursor: pointer;
  /* 關掉瀏覽器原生的箭頭,改用自己畫的 —— 原生的又小又不能調大小,
     而且它是對齊 select 而非整個欄位,看起來會偏下 */
  appearance: none;
  -webkit-appearance: none;
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a5f61' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")
    no-repeat right 14px center / 16px;
}
.filter-field input::placeholder {
  color: #a89c8e;
}

/* 結果列 */
.results {
  padding-block: clamp(28px, 3.5vw, 40px) clamp(48px, 6vw, 72px);
}
.result-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.result-left {
  display: flex;
  align-items: center;
  gap: 14px;
  flex-wrap: wrap;
}
.result-count {
  font-size: 14.5px;
  color: #6b6259;
}
.result-count b {
  color: var(--color-primary);
  font-size: 17px;
}
.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  align-items: center;
}
.chip {
  border: 1px solid #e3cdae;
  background: #fff;
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
.chip:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}
/* 被系統暫時放寬的條件:虛線、劃掉,並標一個橘色的「已放寬」。
   不直接讓標籤消失,使用者才知道系統動了什麼手腳。 */
.chip.relaxed {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border-style: dashed;
  border-color: #d8cfc2;
  background: transparent;
  color: #6b6259;
}
.chip.relaxed .chip-text {
  text-decoration: line-through;
  text-decoration-color: #bfb5a8;
}
.chip-flag {
  font-size: 11px;
  color: var(--color-accent);
  background: #fdf1e0;
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

/* 放寬說明條 */
.relax-notice {
  display: flex;
  gap: 14px;
  background: #fdf1e0;
  border-left: 3px solid var(--color-accent);
  border-radius: 4px 12px 12px 4px;
  padding: 16px 18px;
  margin-bottom: 24px;
  color: var(--color-accent);
}
.relax-notice svg {
  flex-shrink: 0;
  margin-top: 3px;
}
.relax-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 0;
}
.relax-body h2 {
  margin: 0;
  font-size: 15px;
  color: var(--color-primary);
}
.relax-body p {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.75;
  color: #7a5a41;
}
.relax-btn {
  margin-top: 7px;
  font: inherit;
  font-size: 13px;
  padding: 7px 14px;
  border-radius: 7px;
  border: 1px solid #e2c4ac;
  background: #fff;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.relax-btn:hover {
  border-color: var(--color-accent);
}

/* 「堅持原條件的話,哪些地區有」 */
.alt-row {
  margin-top: 26px;
  padding-top: 18px;
  border-top: 1px solid #e7e0d6;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.alt-lead {
  font-size: 13px;
  color: #6b6259;
}
.alt-pill {
  font: inherit;
  font-size: 13px;
  padding: 6px 13px;
  border-radius: 999px;
  border: 1px solid #e7e0d6;
  background: #fff;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.alt-pill:hover {
  border-color: var(--color-accent);
}
.alt-pill b {
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
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
.sort-field {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13.5px;
  color: #6b6259;
}
.sort-field select {
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  background: #fff;
  font: inherit;
  font-size: 13.5px;
  color: #2b2420;
  padding: 7px 12px;
  cursor: pointer;
}

/* 行程卡 */
.trip-grid {
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
.trip-placeholder {
  width: 100%;
  height: clamp(150px, 17vw, 194px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 1px;
  color: #a89c8e;
  background: repeating-linear-gradient(
    45deg,
    #f3ece1,
    #f3ece1 14px,
    #efe6d8 14px,
    #efe6d8 28px
  );
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
  gap: 8px;
  flex: 1;
}
.trip-region {
  font-size: 12.5px;
  color: #6b6259;
  letter-spacing: 1px;
}
.trip-body h2 {
  font-size: 17.5px;
  color: var(--color-primary);
  margin: 0;
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
  white-space: nowrap;
  transition: color 0.15s ease;
}
.trip-foot a:hover {
  color: var(--color-accent);
}

/* 查無結果 */
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
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--color-accent);
  text-decoration: none;
  font-weight: 500;
}
.go-arrow {
  font-size: 15px;
  line-height: 1;
  transition: transform 0.18s ease;
}
.ask-link:hover .go-arrow {
  transform: translateX(3px);
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

@media (max-width: 1024px) {
  .wrap,
  .page-head,
  .filter-bar {
    padding-inline: 24px;
  }
  .filter-inner {
    grid-template-columns: 1fr 1fr;
  }
  .trip-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .cta-banner {
    margin-inline: 24px;
  }
}

@media (max-width: 640px) {
  .breadcrumb {
    padding: 12px 16px 0;
  }
  .wrap,
  .page-head,
  .filter-bar {
    padding-inline: 16px;
  }
  .filter-bar {
    position: static;
  }
  .filter-inner {
    grid-template-columns: 1fr;
  }
  .trip-grid {
    grid-template-columns: 1fr;
  }
  .result-bar {
    align-items: flex-start;
  }
  .cta-banner {
    margin-inline: 16px;
    padding: 32px 20px;
  }
}
</style>
