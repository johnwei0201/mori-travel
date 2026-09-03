<script setup>
import tripTokyo from '../assets/images/trip-tokyo-autumn.png'
import tripHokkaido from '../assets/images/trip-hokkaido-winter.png'
import tripItaly from '../assets/images/trip-italy-classic.png'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from '../components/ui/AppIcon.vue'
import {
  countries,
  hotelTiers,
  currencies,
  WHOLE_UNIT_CODES,
  RATE_UPDATED,
} from '../data/countryInfo.js'

/* ---------- 各國實用資訊速查表 ---------- */
const infoKeyword = ref('')

const filteredCountries = computed(() => {
  const kw = infoKeyword.value.trim().toLowerCase()
  if (!kw) return countries
  return countries.filter((c) =>
    [c.name, c.region, c.currency, c.visa].join(' ').toLowerCase().includes(kw),
  )
})

/* ---------- 時差換算 ---------- */
const pad = (n) => String(n).padStart(2, '0')
const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']

const tzCountry = ref('japan')
const tzTarget = computed(() => countries.find((c) => c.id === tzCountry.value))

// 每秒更新一次的「此刻」,讓當地時間會自己跳
const now = ref(new Date())
let ticker
onMounted(() => {
  ticker = setInterval(() => (now.value = new Date()), 1000)
})
onUnmounted(() => clearInterval(ticker))

/**
 * 把某個時區的牆上時間取出來。
 * 作法:真實 UTC 毫秒 + 該時區與 UTC 的時差,再用 getUTC* 讀出來 ——
 * 這樣不論訪客的電腦在哪個時區,算出來都正確。
 */
function wallClock(utcMs, offsetFromUtc) {
  const d = new Date(utcMs + offsetFromUtc * 3600000)
  return {
    h: d.getUTCHours(),
    m: d.getUTCMinutes(),
    s: d.getUTCSeconds(),
    month: d.getUTCMonth() + 1,
    date: d.getUTCDate(),
    weekday: WEEKDAYS[d.getUTCDay()],
    key: `${d.getUTCFullYear()}-${d.getUTCMonth()}-${d.getUTCDate()}`,
  }
}

const diffLabel = computed(() =>
  tzTarget.value.offset === 0
    ? '與台灣同步'
    : `${tzTarget.value.offset > 0 ? '快' : '慢'}台灣 ${Math.abs(tzTarget.value.offset)} 小時`,
)

// 台灣 = UTC+8,目的地 = UTC+8+offset
const liveClock = computed(() => {
  const utcMs = now.value.getTime()
  const tw = wallClock(utcMs, 8)
  const local = wallClock(utcMs, 8 + tzTarget.value.offset)

  return {
    time: `${pad(local.h)}:${pad(local.m)}`,
    seconds: pad(local.s),
    dateLabel: `${local.month}/${local.date}(週${local.weekday})`,
    dayLabel: local.key === tw.key ? '' : local.key > tw.key ? '已是隔天' : '還是前一天',
    taiwan: `${pad(tw.h)}:${pad(tw.m)}`,
  }
})

/* 進階:換算指定的台灣時間 */
const manualTime = ref('')

const manualResult = computed(() => {
  if (!manualTime.value) return null
  const [h, m] = manualTime.value.split(':').map(Number)
  if (Number.isNaN(h) || Number.isNaN(m)) return null

  const minutes = h * 60 + m + tzTarget.value.offset * 60
  // 除以一天的分鐘數,商數判斷跨日、餘數換回時分
  const dayShift = Math.floor(minutes / 1440)
  const inDay = ((minutes % 1440) + 1440) % 1440

  return {
    time: `${pad(Math.floor(inDay / 60))}:${pad(inDay % 60)}`,
    dayLabel: dayShift > 0 ? '(隔天)' : dayShift < 0 ? '(前一天)' : '(同一天)',
  }
})

/* ---------- 貨幣換算 ---------- */
const curCode = ref('JPY')
const curAmount = ref(1000)
const curToTwd = ref(true) // true = 外幣換台幣

const curTarget = computed(() => currencies.find((c) => c.code === curCode.value))

/** 依幣別決定要不要留小數:日圓、韓元這類不看小數,金額大時也直接取整 */
function formatAmount(n, code) {
  if (!Number.isFinite(n)) return '0'
  if (WHOLE_UNIT_CODES.includes(code) || Math.abs(n) >= 1000) {
    return Math.round(n).toLocaleString()
  }
  // 先四捨五入到兩位,順便吃掉浮點誤差(0.21×100 會算出 21.000000000000004)
  const rounded = Math.round(n * 100) / 100
  return Number.isInteger(rounded) ? rounded.toLocaleString() : rounded.toFixed(2)
}

const TWD = { name: '台幣', code: 'TWD' }

/** 換算的來源與目標,方向切換時只有這裡對調,其他地方都讀這份 */
const sides = computed(() => {
  const c = { name: curTarget.value.name, code: curTarget.value.code }
  return curToTwd.value ? { from: c, to: TWD } : { from: TWD, to: c }
})

const conversion = computed(() => {
  const amount = Number(curAmount.value)
  if (!Number.isFinite(amount) || amount < 0) return null

  const c = curTarget.value
  const { from, to } = sides.value
  const result = curToTwd.value ? amount * c.twd : amount / c.twd

  return {
    fromText: formatAmount(amount, from.code),
    toText: formatAmount(result, to.code),
    // 參考匯率用該幣別的慣用單位表示,例如「100 日圓 ≈ NT$21」
    reference: `${c.unit.toLocaleString()} ${c.name} ≈ NT$${formatAmount(c.unit * c.twd, 'TWD')}`,
  }
})

function swapDirection() {
  curToTwd.value = !curToTwd.value
}

/* ---------- 費用試算 ---------- */
const costCountry = ref('japan')
const costDays = ref(5)
const costPeople = ref(2)
const costTier = ref(1)

const costTarget = computed(() => countries.find((c) => c.id === costCountry.value))

const estimate = computed(() => {
  const c = costTarget.value.cost
  const days = Math.max(1, Number(costDays.value) || 1)
  const people = Math.max(1, Number(costPeople.value) || 1)
  const nights = Math.max(1, days - 1)
  const rooms = Math.ceil(people / 2) // 以兩人一室計

  const flight = c.flight * people
  const hotel = c.hotel[costTier.value] * nights * rooms
  const daily = c.daily * days * people
  const total = flight + hotel + daily

  return {
    nights,
    rooms,
    rows: [
      { label: '來回機票', note: `${people} 人`, value: flight },
      { label: '住宿', note: `${nights} 晚 × ${rooms} 間`, value: hotel },
      { label: '餐食與雜支', note: `${days} 天 × ${people} 人`, value: daily },
    ],
    total,
    perPerson: Math.round(total / people),
  }
})

const money = (n) => `NT$${n.toLocaleString()}`

const articles = [
  {
    id: 1,
    img: tripTokyo,
    tag: '日本',
    title: '東京賞楓完整攻略:最佳時間與路線規劃',
    desc: '從賞楓地圖到交通安排,一篇看懂東京秋季旅遊重點。',
  },
  {
    id: 2,
    img: tripHokkaido,
    tag: '日本',
    title: '北海道雪季旅遊攻略:交通、穿搭、必去景點',
    desc: '第一次去北海道賞雪,行前必讀的實用建議整理。',
  },
  {
    id: 3,
    img: tripItaly,
    tag: '歐洲',
    title: '義大利自由行懶人包:城市串聯與交通攻略',
    desc: '羅馬、佛羅倫斯到威尼斯,城市之間該怎麼安排最順?',
  },
]

const categories = [
  { icon: 'backpack', text: '行前準備' },
  { icon: 'train', text: '交通指南' },
  { icon: 'food', text: '美食推薦' },
  { icon: 'bed', text: '住宿攻略' },
]

const checklist = [
  {
    id: 1,
    icon: 'passport',
    title: '證件財務',
    items: [
      '護照(效期 6 個月以上)',
      '簽證 / 電子許可',
      '機票與訂房確認單',
      '信用卡・現金・當地貨幣',
    ],
  },
  {
    id: 2,
    icon: 'suitcase',
    title: '衣物穿搭',
    items: ['換洗衣物', '保暖外套 / 雨具', '舒適好走的鞋款', '睡衣'],
  },
  {
    id: 3,
    icon: 'drop',
    title: '個人清潔',
    items: ['牙刷、牙膏', '毛巾、盥洗用品', '防曬乳、個人保養品', '常備藥品'],
  },
  {
    id: 4,
    icon: 'plug',
    title: '3C 用品',
    items: ['手機、充電器', '轉接頭、行動電源', '相機、記憶卡', '耳機'],
  },
]
</script>

<template>
  <section class="guide-hero">
    <div class="eyebrow">TRAVEL GUIDE</div>
    <h1>旅遊指南</h1>
    <p>行前準備、交通攻略、在地美食,出發前先看這裡</p>
    <div class="guide-search">
      <input type="text" placeholder="搜尋文章,例如:東京、賞楓、簽證" />
      <button>搜尋</button>
    </div>
  </section>

  <section class="checklist-section">
    <div class="section-label">BEFORE YOU GO</div>
    <h2>行前必備清單</h2>
    <div class="checklist-grid">
      <div class="checklist-card" v-for="c in checklist" :key="c.id">
        <div class="checklist-icon"><AppIcon :name="c.icon" :size="22" /></div>
        <h3>{{ c.title }}</h3>
        <ul>
          <li v-for="item in c.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>

  <!-- 各國實用資訊速查表 -->
  <section class="info-section">
    <div class="info-inner">
      <div class="section-label">QUICK REFERENCE</div>
      <div class="info-head">
        <h2>各國實用資訊速查</h2>
        <div class="info-search">
          <AppIcon name="pin" :size="17" />
          <input
            v-model="infoKeyword"
            type="search"
            placeholder="搜尋國家、地區或貨幣"
            aria-label="搜尋各國資訊"
          />
        </div>
      </div>

      <div v-if="filteredCountries.length" class="table-scroll">
        <table class="info-table">
          <thead>
            <tr>
              <th>國家 / 地區</th>
              <th>簽證</th>
              <th>時差</th>
              <th>電壓・插頭</th>
              <th>貨幣</th>
              <th>小費</th>
              <th>緊急電話</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in filteredCountries" :key="c.id">
              <td class="col-name">
                {{ c.name }}
                <span class="col-region">{{ c.region }}</span>
              </td>
              <td>{{ c.visa }}</td>
              <td class="col-num">
                {{ c.offset === 0 ? '同台灣' : (c.offset > 0 ? '+' : '') + c.offset }}
                <span v-if="c.offsetNote" class="col-note">{{ c.offsetNote }}</span>
              </td>
              <td>{{ c.voltage }}・{{ c.plug }}</td>
              <td>{{ c.currency }}</td>
              <td>{{ c.tip }}</td>
              <td>{{ c.emergency }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="info-empty">找不到「{{ infoKeyword }}」,換個關鍵字試試。</p>

      <p class="disclaimer">
        ※ 簽證規定、電壓與緊急電話可能異動,出發前請以外交部領事事務局與當地官方公告為準。
      </p>
    </div>
  </section>

  <!-- 時差換算 -->
  <section class="tz-section">
    <div class="tool-inner">
      <div class="section-label">TIME DIFFERENCE</div>
      <h2>時差換算</h2>
      <p class="tool-lead">選一個目的地,直接看當地此刻幾點;要約定通話時間,也可以換算指定時刻。</p>

      <div class="tz-body">
        <div class="tz-form">
          <div class="tool-field">
            <label for="tz-country">目的地</label>
            <select id="tz-country" v-model="tzCountry">
              <option v-for="c in countries" :key="c.id" :value="c.id">{{ c.name }}</option>
            </select>
          </div>

          <div class="tz-manual">
            <div class="tool-field">
              <label for="tz-time">或換算指定的台灣時間</label>
              <input id="tz-time" v-model="manualTime" type="time" />
            </div>
            <p v-if="manualResult" class="tz-manual-out">
              <span class="tz-from">台灣 {{ manualTime }}</span>
              <span class="tz-arrow" aria-hidden="true">➤</span>
              <span class="tz-to">{{ tzTarget.name }} <b>{{ manualResult.time }}</b></span>
              <span class="tz-shift">{{ manualResult.dayLabel }}</span>
            </p>
            <p v-else class="tz-manual-hint">留空的話,右邊顯示的就是當地現在時間。</p>
          </div>
        </div>

        <div class="tz-result">
          <div class="tz-result-label">
            <AppIcon name="clock" :size="17" />
            {{ tzTarget.name }}現在時間
          </div>
          <div class="tz-clock">
            <span class="tz-value">{{ liveClock.time }}</span>
            <span class="tz-sec">:{{ liveClock.seconds }}</span>
          </div>
          <div class="tz-date">
            {{ liveClock.dateLabel }}
            <span v-if="liveClock.dayLabel" class="tz-day">{{ liveClock.dayLabel }}</span>
          </div>
          <div class="tz-diff">{{ diffLabel }}・台灣現在 {{ liveClock.taiwan }}</div>
          <p v-if="tzTarget.offsetNote" class="tz-note">※ {{ tzTarget.offsetNote }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 貨幣換算 -->
  <section class="cur-section">
    <div class="tool-inner">
      <div class="section-label">CURRENCY</div>
      <h2>貨幣換算</h2>
      <p class="tool-lead">概估用的參考匯率,先抓個大概;實際換匯以銀行當日牌告為準。</p>

      <div class="cur-body">
        <div class="cur-form">
          <div class="tool-field">
            <label for="cur-code">幣別</label>
            <select id="cur-code" v-model="curCode">
              <option v-for="c in currencies" :key="c.code" :value="c.code">
                {{ c.name }} {{ c.code }}({{ c.where }})
              </option>
            </select>
          </div>

          <div class="cur-amount-row">
            <div class="tool-field">
              <label for="cur-amount">
                金額(<b>{{ sides.from.name }}</b> {{ sides.from.code }})
              </label>
              <input id="cur-amount" v-model.number="curAmount" type="number" min="0" step="100" />
            </div>
            <button class="cur-swap" @click="swapDirection">
              <span class="cur-swap-icon" aria-hidden="true">⇄</span>
              對調
            </button>
          </div>

          <p class="cur-direction">
            目前是<b>{{ sides.from.name }}</b> 換 <b>{{ sides.to.name }}</b>
          </p>
        </div>

        <div v-if="conversion" class="cur-result">
          <div class="cur-pair">
            <b>{{ sides.from.name }}</b> {{ sides.from.code }}
            <span class="cur-pair-arrow" aria-hidden="true">➤</span>
            <b>{{ sides.to.name }}</b> {{ sides.to.code }}
          </div>
          <div class="cur-from">{{ sides.from.name }} {{ conversion.fromText }}</div>
          <div class="cur-to">
            <span class="cur-value">{{ conversion.toText }}</span>
            <span class="cur-code">{{ sides.to.name }} {{ sides.to.code }}</span>
          </div>
          <div class="cur-ref">參考匯率:{{ conversion.reference }}</div>
          <p class="cur-note">※ 概估值,更新於 {{ RATE_UPDATED }},未計入換匯手續費。</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 費用試算 -->
  <section class="cost-section">
    <div class="tool-inner">
      <div class="section-label">BUDGET ESTIMATE</div>
      <h2>旅費試算</h2>
      <p class="tool-lead">抓一個心裡有底的數字,再決定要往哪個方向找行程。</p>

      <div class="cost-body">
        <div class="cost-form">
          <div class="tool-field">
            <label for="cost-country">目的地</label>
            <select id="cost-country" v-model="costCountry">
              <option v-for="c in countries" :key="c.id" :value="c.id">{{ c.name }}</option>
            </select>
          </div>
          <div class="cost-row">
            <div class="tool-field">
              <label for="cost-days">天數</label>
              <input id="cost-days" v-model.number="costDays" type="number" min="1" max="30" />
            </div>
            <div class="tool-field">
              <label for="cost-people">人數</label>
              <input id="cost-people" v-model.number="costPeople" type="number" min="1" max="20" />
            </div>
          </div>
          <div class="tool-field">
            <span class="label-text">住宿等級</span>
            <div class="tier-row">
              <button
                v-for="(t, i) in hotelTiers"
                :key="t.label"
                class="tier"
                :class="{ active: costTier === i }"
                :aria-pressed="costTier === i"
                @click="costTier = i"
              >
                <span class="tier-label">{{ t.label }}</span>
                <span class="tier-note">{{ t.note }}</span>
              </button>
            </div>
          </div>
        </div>

        <div class="cost-result">
          <div class="cost-rows">
            <div v-for="r in estimate.rows" :key="r.label" class="cost-line">
              <span class="cost-line-label">{{ r.label }}<em>{{ r.note }}</em></span>
              <span class="cost-line-value">{{ money(r.value) }}</span>
            </div>
          </div>
          <div class="cost-total">
            <span>預估總計</span>
            <b>{{ money(estimate.total) }}</b>
          </div>
          <div class="cost-per">平均每人約 {{ money(estimate.perPerson) }}</div>
          <p class="disclaimer">
            ※ 為粗略估算,未含旅遊保險、購物與門票;實際費用以行程頁面報價為準。
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="articles-section">
    <div class="section-label">FEATURED</div>
    <h2>精選文章</h2>
    <div class="article-grid">
      <div class="article-card" v-for="a in articles" :key="a.id">
        <img :src="a.img" :alt="a.title" />
        <div class="article-body">
          <span class="article-tag">{{ a.tag }}</span>
          <h3>{{ a.title }}</h3>
          <p>{{ a.desc }}</p>
        </div>
      </div>
    </div>
  </section>

  <div class="category-row">
    <span class="category-pill" v-for="c in categories" :key="c.text">
      <AppIcon :name="c.icon" :size="17" />
      {{ c.text }}
    </span>
  </div>

  <div class="cta-banner">
    <h2>想收到更多旅遊靈感嗎?</h2>
    <p>訂閱電子報,每月精選旅遊攻略直送信箱。</p>
    <button>訂閱電子報</button>
  </div>
</template>

<style scoped>
.guide-hero {
  background: #fdf1e0;
  padding: 64px 40px;
  text-align: center;
}
.eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: 10px;
}
.guide-hero h1 {
  font-size: clamp(32px, 5vw, 44px);
  color: var(--color-primary);
  margin: 0 0 12px;
}
.guide-hero p {
  font-size: 15px;
  color: #6b6259;
  margin: 0 0 28px;
}
.guide-search {
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.guide-search input {
  flex: 1;
  border: none;
  padding: 14px 18px;
  font-size: 14px;
}
.guide-search input:focus {
  outline: none;
}
.guide-search button {
  background: var(--color-accent);
  color: #fff;
  border: none;
  padding: 0 24px;
  font-weight: 700;
  cursor: pointer;
}

.section-label {
  font-size: 12.5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-accent);
  font-weight: 700;
  margin-bottom: 8px;
}

.checklist-section {
  padding: 56px 40px clamp(48px, 5vw, 64px);
  max-width: 1120px;
  margin: 0 auto;
}
.checklist-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.checklist-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.checklist-card {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 16px;
  padding: 24px 20px;
}
.checklist-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fdf1e0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  margin-bottom: 14px;
}
.checklist-card h3 {
  font-size: 15px;
  margin: 0 0 12px;
  color: #2b2420;
}
.checklist-card ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.checklist-card li {
  font-size: 12.5px;
  color: #6b6259;
  padding: 4px 0 4px 20px;
  position: relative;
  line-height: 1.5;
}
.checklist-card li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: 700;
}

/* ---------- 各國實用資訊速查表 ---------- */
.info-section {
  background: #ffffff;
  border-top: 1px solid #e7e0d6;
  border-bottom: 1px solid #e7e0d6;
  padding: clamp(44px, 5.5vw, 68px) 40px;
}
.info-inner,
.tool-inner {
  max-width: 1120px;
  margin: 0 auto;
}
.info-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 24px;
}
.info-head h2 {
  font-size: clamp(21px, 2.5vw, 27px);
  color: var(--color-primary);
  margin: 8px 0 0;
}
.info-search {
  display: flex;
  align-items: center;
  gap: 9px;
  border: 1px solid #e7e0d6;
  border-radius: 999px;
  padding: 9px 18px;
  background: var(--color-bg);
  color: var(--color-primary);
  min-width: 260px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.info-search:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}
.info-search input {
  border: none;
  background: none;
  font: inherit;
  font-size: 14px;
  color: #2b2420;
  width: 100%;
  outline: none;
}
.info-search input::placeholder {
  color: #a89c8e;
}

.table-scroll {
  overflow-x: auto;
  border: 1px solid #e7e0d6;
  border-radius: 14px;
}
.info-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13.5px;
  min-width: 900px;
}
.info-table th {
  text-align: left;
  background: #fdf1e0;
  color: var(--color-primary);
  font-size: 13px;
  font-weight: 700;
  padding: 13px 16px;
  white-space: nowrap;
}
.info-table td {
  padding: 14px 16px;
  border-top: 1px solid #f0e9df;
  color: #2b2420;
  vertical-align: top;
  line-height: 1.6;
}
.info-table tbody tr:hover {
  background: #fffdfa;
}
.col-name {
  font-weight: 700;
  color: var(--color-primary);
  white-space: nowrap;
}
.col-region {
  display: block;
  font-size: 11.5px;
  font-weight: 400;
  color: #6b6259;
  margin-top: 2px;
}
.col-num {
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.col-note {
  display: block;
  font-size: 11.5px;
  color: #6b6259;
  white-space: normal;
  max-width: 190px;
  margin-top: 3px;
}
.info-empty {
  padding: 40px 0;
  text-align: center;
  color: #6b6259;
  font-size: 14.5px;
}
.disclaimer {
  margin-top: 14px;
  font-size: 12.5px;
  color: #6b6259;
  line-height: 1.7;
}

/* ---------- 共用的工具表單樣式 ---------- */
.tool-lead {
  font-size: 14.5px;
  color: #6b6259;
  line-height: 1.8;
  margin: 8px 0 26px;
  max-width: 60ch;
}
.tool-inner h2 {
  font-size: clamp(21px, 2.5vw, 27px);
  color: var(--color-primary);
  margin: 8px 0 0;
}
.tool-field label,
.tool-field .label-text {
  display: block;
  font-size: 13px;
  color: #6b6259;
  margin-bottom: 7px;
}
.tool-field input,
.tool-field select {
  width: 100%;
  border: 1px solid #e7e0d6;
  border-radius: 8px;
  background: #ffffff;
  color: #2b2420;
  font: inherit;
  font-size: 15px;
  padding: 11px 14px;
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;
}
.tool-field input:focus,
.tool-field select:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}

/* ---------- 時差換算 ---------- */
.tz-section {
  background: #fdf1e0;
  padding: clamp(44px, 5.5vw, 68px) 40px;
}
.tz-body {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
}
.tz-form {
  background: #ffffff;
  border: 1px solid #f0e2cc;
  border-radius: 14px;
  padding: 24px;
  display: grid;
  gap: 16px;
  align-content: start;
}
.tz-manual {
  border-top: 1px solid #f0e9df;
  padding-top: 16px;
}
.tz-manual-out {
  margin-top: 14px;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 4px 10px;
  line-height: 1.6;
}
.tz-from,
.tz-to {
  font-size: 17px;
  color: #2b2420;
  font-variant-numeric: tabular-nums;
}
.tz-to {
  color: var(--color-primary);
  font-weight: 500;
}
.tz-to b {
  font-size: 20px;
  font-variant-numeric: tabular-nums;
  margin-left: 2px;
}
.tz-arrow {
  font-size: 19px;
  color: var(--color-accent);
  line-height: 1;
}
.tz-shift {
  font-size: 13px;
  color: #6b6259;
}
.tz-manual-hint {
  margin-top: 12px;
  font-size: 12.5px;
  color: #a89c8e;
  line-height: 1.7;
}
.tz-result {
  background: var(--color-primary);
  color: #fff;
  border-radius: 14px;
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tz-result-label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #cfe0dd;
}
.tz-clock {
  display: flex;
  align-items: baseline;
  margin: 12px 0 8px;
}
.tz-value {
  font-size: clamp(46px, 6.5vw, 66px);
  font-weight: 700;
  color: #fff;
  line-height: 1;
  font-variant-numeric: tabular-nums;
  letter-spacing: 1px;
}
.tz-sec {
  font-size: clamp(20px, 2.6vw, 26px);
  font-weight: 500;
  color: #ffc4a3;
  font-variant-numeric: tabular-nums;
  margin-left: 2px;
}
.tz-date {
  font-size: 15px;
  color: #fff;
  margin-bottom: 4px;
}
.tz-day {
  display: inline-block;
  font-size: 12.5px;
  color: var(--color-primary);
  background: #ffc4a3;
  border-radius: 5px;
  padding: 2px 9px;
  margin-left: 8px;
  vertical-align: 1px;
}
.tz-diff {
  font-size: 14.5px;
  color: #cfe0dd;
}
.tz-note {
  font-size: 12.5px;
  color: #9dbab6;
  line-height: 1.7;
  margin-top: 12px;
}

/* ---------- 貨幣換算 ---------- */
.cur-section {
  background: #ffffff;
  border-top: 1px solid #e7e0d6;
  border-bottom: 1px solid #e7e0d6;
  padding: clamp(44px, 5.5vw, 68px) 40px;
}
.cur-body {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(20px, 3vw, 40px);
  align-items: stretch;
}
.cur-form {
  background: var(--color-bg);
  border: 1px solid #e7e0d6;
  border-radius: 14px;
  padding: 24px;
  display: grid;
  gap: 16px;
  align-content: start;
}
.cur-form .tool-field input,
.cur-form .tool-field select {
  background: #ffffff;
}
.cur-amount-row {
  display: flex;
  align-items: flex-end;
  gap: 12px;
}
.cur-amount-row .tool-field {
  flex: 1;
}
.cur-swap {
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  border: 1px solid #e7e0d6;
  background: #ffffff;
  border-radius: 8px;
  padding: 11px 16px;
  font: inherit;
  font-size: 13.5px;
  color: var(--color-primary);
  cursor: pointer;
  white-space: nowrap;
  transition: border-color 0.15s ease;
}
.cur-swap:hover {
  border-color: var(--color-primary);
}
.cur-swap-icon {
  font-size: 16px;
  line-height: 1;
  color: var(--color-accent);
}
.cur-direction {
  font-size: 13px;
  color: #6b6259;
}
.cur-direction b {
  color: var(--color-primary);
}
/* 標籤裡的幣別名稱要比括號內文字更顯眼 */
.cur-form .tool-field label b {
  color: var(--color-primary);
  font-weight: 700;
}

.cur-result {
  background: var(--color-primary);
  color: #fff;
  border-radius: 14px;
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
/* 頂端一行清楚寫出「誰換誰」 */
.cur-pair {
  display: flex;
  align-items: center;
  gap: 7px;
  flex-wrap: wrap;
  font-size: 13.5px;
  color: #9dbab6;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.cur-pair b {
  color: #fff;
  font-weight: 500;
}
.cur-pair-arrow {
  color: var(--color-accent);
  font-size: 14px;
  line-height: 1;
}
.cur-from {
  font-size: 15px;
  color: #cfe0dd;
  font-variant-numeric: tabular-nums;
}
.cur-to {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 8px 0 14px;
  flex-wrap: wrap;
}
.cur-value {
  font-size: clamp(36px, 5vw, 50px);
  font-weight: 700;
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
  word-break: break-all;
}
.cur-code {
  font-size: 18px;
  color: #ffc4a3;
  font-weight: 500;
}
.cur-ref {
  font-size: 14px;
  color: #cfe0dd;
  font-variant-numeric: tabular-nums;
}
.cur-note {
  font-size: 12.5px;
  color: #9dbab6;
  line-height: 1.7;
  margin-top: 12px;
}

/* ---------- 費用試算 ---------- */
.cost-section {
  padding: clamp(44px, 5.5vw, 68px) 40px;
}
.cost-body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(20px, 3vw, 40px);
  align-items: start;
}
.cost-form {
  display: grid;
  gap: 18px;
}
.cost-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.tier-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.tier {
  border: 1px solid #e7e0d6;
  background: #ffffff;
  border-radius: 10px;
  padding: 12px 10px;
  text-align: left;
  cursor: pointer;
  font: inherit;
  transition:
    border-color 0.15s ease,
    background 0.15s ease;
}
.tier:hover {
  border-color: #cdbfae;
}
.tier.active {
  border-color: var(--color-accent);
  background: #fdf1e0;
}
.tier-label {
  display: block;
  font-size: 14.5px;
  font-weight: 700;
  color: var(--color-primary);
}
.tier-note {
  display: block;
  font-size: 11.5px;
  color: #6b6259;
  margin-top: 3px;
  line-height: 1.5;
}

.cost-result {
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.07);
}
.cost-line {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  padding: 11px 0;
  border-bottom: 1px solid #f0e9df;
  font-size: 14.5px;
}
.cost-line-label {
  color: #2b2420;
}
.cost-line-label em {
  font-style: normal;
  font-size: 12.5px;
  color: #6b6259;
  margin-left: 8px;
}
.cost-line-value {
  color: #2b2420;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
}
.cost-total {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 14px;
  padding-top: 16px;
  margin-top: 6px;
  font-size: 15px;
  color: #6b6259;
}
.cost-total b {
  font-size: 27px;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}
.cost-per {
  margin-top: 6px;
  text-align: right;
  font-size: 13.5px;
  color: #6b6259;
  font-variant-numeric: tabular-nums;
}

.articles-section {
  padding: 60px 40px;
  max-width: 1120px;
  margin: 0 auto;
}
.articles-section h2 {
  font-size: 26px;
  color: var(--color-primary);
  margin: 0 0 28px;
}
.article-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.article-card {
  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.08);
}
.article-card img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}
.article-body {
  padding: 18px 20px;
}
.article-tag {
  font-size: 14px;
  color: var(--color-accent);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.article-card h3 {
  font-size: 16px;
  margin: 8px 0 8px;
  color: #2b2420;
  line-height: 1.5;
}
.article-card p {
  font-size: 13px;
  color: #6b6259;
  margin: 0;
  line-height: 1.6;
}

.category-row {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 40px 60px;
}
.category-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1px solid #e7e0d6;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 14px;
}

.cta-banner {
  max-width: 1040px;
  margin: 0 auto 64px;
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
  .checklist-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .info-section,
  .tz-section,
  .cur-section,
  .cost-section {
    padding-inline: 24px;
  }
  .tz-body,
  .cur-body,
  .cost-body {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 860px) {
  .article-grid {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 640px) {
  .checklist-grid {
    grid-template-columns: 1fr;
  }
  .info-section,
  .tz-section,
  .cur-section,
  .cost-section {
    padding-inline: 16px;
  }
  .cur-amount-row {
    flex-direction: column;
    align-items: stretch;
  }
  .cur-swap {
    justify-content: center;
  }
  .cur-form,
  .cur-result {
    padding: 20px;
  }
  .info-search {
    min-width: 0;
    width: 100%;
  }
  .tier-row {
    grid-template-columns: 1fr;
  }
  .tz-form,
  .cost-result {
    padding: 20px;
  }
}
</style>
