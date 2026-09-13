import { trips } from './trips.js'

import japanImg from '../assets/images_縮小/destination-japan.jpg'
import koreaImg from '../assets/images_縮小/destination-korea.jpg'
import seaImg from '../assets/images_縮小/destination-southeast-asia.jpg'
import europeImg from '../assets/images_縮小/destination-europe.jpg'
import americaImg from '../assets/images_縮小/destination-america.jpg'
import oceaniaImg from '../assets/images_縮小/destination-oceania.jpg'
import tarokoImg from '../assets/images_縮小/Taroko-Gorge.jpg'
import doubleHeartImg from '../assets/images_縮小/Double-Heart-Stone-Weir.jpg'

/**
 * 行程總目錄 —— 這是一份「假資料」,用來讓搜尋 / 篩選真的跑得動。
 *
 * 每筆多帶了四個給篩選用的欄位:
 *   month   出發月份(1–12)      → 對應「出發月份」與 STEP 02
 *   days    天數(數字)          → 對應「旅遊天數」
 *   price   每人價格(數字)      → 對應「每人預算」
 *   styles  旅行風格 id 陣列     → 對應 STEP 01
 * keywords 則是給關鍵字搜尋比對用的(國家、城市、別名都可以放)。
 *
 * 前三筆直接沿用 data/trips.js 既有的資料(用 ... 展開),
 * 所以標題、價格只維護一份;detailSlug 有值的才有內頁可以點進去。
 */
export const tripCatalog = [
  {
    ...trips.tokyo,
    id: 'tokyo',
    detailSlug: 'tokyo',
    img: trips.tokyo.heroImg,
    region: '日本',
    month: 11,
    days: 5,
    styles: ['autumn'],
    keywords: ['日本', '東京', '河口湖', '賞楓', 'tokyo', 'japan'],
  },
  {
    ...trips.hokkaido,
    id: 'hokkaido',
    detailSlug: 'hokkaido',
    img: trips.hokkaido.heroImg,
    region: '日本',
    month: 2,
    days: 6,
    styles: ['snow'],
    keywords: ['日本', '北海道', '札幌', '小樽', '雪祭', 'hokkaido', 'japan'],
  },
  {
    ...trips.italy,
    id: 'italy',
    detailSlug: 'italy',
    img: trips.italy.heroImg,
    region: '歐洲',
    month: 10,
    days: 10,
    styles: ['city', 'honeymoon'],
    keywords: ['歐洲', '義大利', '羅馬', '威尼斯', '佛羅倫斯', 'italy', 'europe'],
  },

  {
    id: 'kyoto-sakura',
    detailSlug: null,
    tag: '季節限定',
    title: '京都大阪賞櫻 5 日',
    img: japanImg,
    region: '日本',
    date: '2027/04/02',
    month: 4,
    days: 5,
    duration: '5 天 4 夜',
    price: 32900,
    styles: ['city', 'food'],
    features: ['含來回機票', '市區飯店', '賞櫻名所'],
    keywords: ['日本', '京都', '大阪', '賞櫻', '櫻花', 'kyoto', 'osaka', 'japan'],
  },
  {
    id: 'okinawa-family',
    detailSlug: null,
    tag: '親子推薦',
    title: '沖繩親子 4 日',
    img: japanImg,
    region: '日本',
    date: '2027/07/08',
    month: 7,
    days: 4,
    duration: '4 天 3 夜',
    price: 22900,
    styles: ['island'],
    features: ['含來回機票', '海景飯店', '水族館門票'],
    keywords: ['日本', '沖繩', '那霸', '親子', 'okinawa', 'japan'],
  },
  {
    id: 'seoul-free',
    detailSlug: null,
    tag: '自由行',
    title: '首爾自由行 4 日',
    img: koreaImg,
    region: '韓國',
    date: '2027/03/12',
    month: 3,
    days: 4,
    duration: '4 天 3 夜',
    price: 18900,
    styles: ['food'],
    features: ['含來回機票', '明洞住宿', '機場接送'],
    keywords: ['韓國', '首爾', '明洞', '弘大', '自由行', 'seoul', 'korea'],
  },
  {
    id: 'busan-gyeongju',
    detailSlug: null,
    tag: '深度慢遊',
    title: '釜山慶州古都 5 日',
    img: koreaImg,
    region: '韓國',
    date: '2026/10/20',
    month: 10,
    days: 5,
    duration: '5 天 4 夜',
    price: 21900,
    styles: ['city', 'autumn'],
    features: ['含來回機票', '溫泉飯店', '中文領隊'],
    keywords: ['韓國', '釜山', '慶州', '甘川洞', 'busan', 'korea'],
  },
  {
    id: 'bali-resort',
    detailSlug: null,
    tag: '熱銷中',
    title: '峇里島渡假村 5 日',
    img: seaImg,
    region: '東南亞',
    date: '2027/07/16',
    month: 7,
    days: 5,
    duration: '5 天 4 夜',
    price: 28900,
    styles: ['island', 'honeymoon'],
    features: ['含來回機票', 'villa 泳池房', '每日早餐'],
    keywords: ['東南亞', '峇里島', '印尼', '海島', 'bali', 'indonesia'],
  },
  {
    id: 'thailand-phuket',
    detailSlug: null,
    tag: '高 CP 值',
    title: '曼谷普吉島 6 日',
    img: seaImg,
    region: '東南亞',
    date: '2026/12/05',
    month: 12,
    days: 6,
    duration: '6 天 5 夜',
    price: 25900,
    styles: ['island', 'food'],
    features: ['含來回機票', '海島跳島', '按摩體驗'],
    keywords: ['東南亞', '泰國', '曼谷', '普吉島', 'thailand', 'phuket'],
  },
  {
    id: 'vietnam-danang',
    detailSlug: null,
    tag: '小資首選',
    title: '越南峴港會安 5 日',
    img: seaImg,
    region: '東南亞',
    date: '2027/05/09',
    month: 5,
    days: 5,
    duration: '5 天 4 夜',
    price: 19900,
    styles: ['food', 'island'],
    features: ['含來回機票', '五星飯店', '會安古鎮'],
    keywords: ['東南亞', '越南', '峴港', '會安', 'vietnam', 'danang'],
  },
  {
    id: 'france-swiss-italy',
    detailSlug: null,
    tag: '經典路線',
    title: '法瑞義三國 12 日',
    img: europeImg,
    region: '歐洲',
    date: '2027/05/18',
    month: 5,
    days: 12,
    duration: '12 天 10 夜',
    price: 78900,
    styles: ['city', 'honeymoon'],
    features: ['含來回機票', '四星飯店', '中文導遊'],
    keywords: ['歐洲', '法國', '瑞士', '義大利', '巴黎', '少女峰', 'france', 'swiss'],
  },
  {
    id: 'prague-vienna',
    detailSlug: null,
    tag: '秋季推薦',
    title: '布拉格維也納 10 日',
    img: europeImg,
    region: '歐洲',
    date: '2026/09/22',
    month: 9,
    days: 10,
    duration: '10 天 8 夜',
    price: 62900,
    styles: ['city'],
    features: ['含來回機票', '四星飯店', '音樂會門票'],
    keywords: ['歐洲', '捷克', '奧地利', '布拉格', '維也納', 'prague', 'vienna'],
  },
  {
    id: 'us-west',
    detailSlug: null,
    tag: '國家公園',
    title: '美西大峽谷 9 日',
    img: americaImg,
    region: '美加',
    date: '2026/09/10',
    month: 9,
    days: 9,
    duration: '9 天 7 夜',
    price: 68900,
    styles: ['city'],
    features: ['含來回機票', '國家公園門票', '中文導遊'],
    keywords: ['美加', '美國', '美西', '大峽谷', '拉斯維加斯', 'usa', 'grand canyon'],
  },
  {
    id: 'canada-rockies',
    detailSlug: null,
    tag: '此生必訪',
    title: '加拿大洛磯山 10 日',
    img: americaImg,
    region: '美加',
    date: '2027/06/14',
    month: 6,
    days: 10,
    duration: '10 天 8 夜',
    price: 88900,
    styles: ['honeymoon'],
    features: ['含來回機票', '湖畔飯店', '冰原雪車'],
    keywords: ['美加', '加拿大', '洛磯山', '班夫', 'canada', 'banff'],
  },
  {
    id: 'nz-south',
    detailSlug: null,
    tag: '蜜月推薦',
    title: '紐西蘭南島 10 日',
    img: oceaniaImg,
    region: '紐澳',
    date: '2026/11/06',
    month: 11,
    days: 10,
    duration: '10 天 8 夜',
    price: 92900,
    styles: ['honeymoon'],
    features: ['含來回機票', '湖景飯店', '米佛峽灣遊船'],
    keywords: ['紐澳', '紐西蘭', '南島', '皇后鎮', 'new zealand', 'queenstown'],
  },
  {
    id: 'au-reef',
    detailSlug: null,
    tag: '潛水體驗',
    title: '澳洲大堡礁 8 日',
    img: oceaniaImg,
    region: '紐澳',
    date: '2027/08/12',
    month: 8,
    days: 8,
    duration: '8 天 6 夜',
    price: 72900,
    styles: ['island'],
    features: ['含來回機票', '出海浮潛', '雪梨市區觀光'],
    keywords: ['紐澳', '澳洲', '大堡礁', '雪梨', 'australia', 'sydney'],
  },
  {
    id: 'hualien-taroko',
    detailSlug: null,
    tag: '國內小旅行',
    title: '花蓮太魯閣 3 日',
    img: tarokoImg,
    region: '國內旅遊',
    date: '2027/04/18',
    month: 4,
    days: 3,
    duration: '3 天 2 夜',
    price: 8900,
    styles: ['city'],
    features: ['專車接送', '花蓮住宿', '峽谷步道'],
    keywords: ['國內', '台灣', '花蓮', '太魯閣', '清水斷崖', 'hualien'],
  },
  {
    id: 'penghu-island',
    detailSlug: null,
    tag: '夏日限定',
    title: '澎湖跳島 4 日',
    img: doubleHeartImg,
    region: '國內旅遊',
    date: '2027/07/03',
    month: 7,
    days: 4,
    duration: '4 天 3 夜',
    price: 12900,
    styles: ['island'],
    features: ['含來回機票', '海景民宿', '跳島船票'],
    keywords: ['國內', '台灣', '澎湖', '離島', '七美', 'penghu'],
  },
]

/** 天數區間選項:value 用來比對 days 落在哪個範圍 */
export const durationOptions = [
  { label: '3 天以內', min: 0, max: 3 },
  { label: '4—5 天', min: 4, max: 5 },
  { label: '6—8 天', min: 6, max: 8 },
  { label: '9 天以上', min: 9, max: Infinity },
]

/** 預算區間選項:比對 price */
export const budgetOptions = [
  { label: 'NT$2 萬以下', min: 0, max: 19999 },
  { label: 'NT$2—4 萬', min: 20000, max: 39999 },
  { label: 'NT$4—6 萬', min: 40000, max: 59999 },
  { label: 'NT$6 萬以上', min: 60000, max: Infinity },
]

/**
 * 目的地選項:直接從行程目錄推導,所以新增行程時只要 region 是新的,
 * 選單就會自動多一項,不用再回來手動維護。
 */
export const regions = [...new Set(tripCatalog.map((t) => t.region))]

/** 排序方式,searchView 的下拉選單與 sortTrips 共用 */
export const sortOptions = [
  { value: 'date', label: '出發日期由近至遠' },
  { value: 'priceAsc', label: '價格由低至高' },
  { value: 'priceDesc', label: '價格由高至低' },
  { value: 'daysAsc', label: '天數由短至長' },
]

/**
 * 依條件篩選行程。首頁搜尋、搜尋結果頁、開始找旅行三處共用這一份,
 * 條件留空(空字串 / null)就代表不限。
 */
export function filterTrips({ keyword = '', month = null, duration = '', budget = '', style = null } = {}) {
  const kw = keyword.trim().toLowerCase()
  const d = duration ? durationOptions.find((o) => o.label === duration) : null
  const b = budget ? budgetOptions.find((o) => o.label === budget) : null

  return tripCatalog.filter((t) => {
    if (kw) {
      // 比對標題、地區與 keywords 陣列
      const haystack = [t.title, t.region, ...(t.keywords ?? [])].join(' ').toLowerCase()
      if (!haystack.includes(kw)) return false
    }
    if (month && t.month !== month) return false
    if (style && !t.styles.includes(style)) return false
    if (d && (t.days < d.min || t.days > d.max)) return false
    if (b && (t.price < b.min || t.price > b.max)) return false
    return true
  })
}

/** 排序,回傳新陣列不動到原本的 */
export function sortTrips(list, by = 'date') {
  const sorted = [...list]
  if (by === 'priceAsc') return sorted.sort((a, b) => a.price - b.price)
  if (by === 'priceDesc') return sorted.sort((a, b) => b.price - a.price)
  if (by === 'daysAsc') return sorted.sort((a, b) => a.days - b.days)
  return sorted.sort((a, b) => a.date.localeCompare(b.date))
}

/* ───────────────── 漸進放寬搜尋 ─────────────────
   條件全中才給結果的話,多數組合都會是 0 筆。改成找不到時依序拿掉條件,
   再把「拿掉了什麼」與「為什麼」一起交給畫面說明。 */

/**
 * 放寬順序:預算最不影響「想去哪」,目的地最在意,留到最後才放。
 * 風格只是一種感覺,比出發月份(通常綁著假期)容易妥協,排在月份前面。
 */
const RELAX_ORDER = ['budget', 'style', 'month', 'duration', 'keyword']

/** 各條件在畫面上的名稱 */
export const FILTER_LABELS = {
  keyword: '目的地',
  month: '出發月份',
  duration: '旅遊天數',
  budget: '每人預算',
  style: '旅行風格',
}

/** 空字串、0、null 都算沒有設定 */
const isSet = (v) => v !== '' && v !== null && v !== undefined

/** 把指定的條件清成「不限」 */
function without(filters, keys) {
  const next = { ...filters }
  for (const k of keys) next[k] = k === 'month' || k === 'style' ? null : ''
  return next
}

/**
 * 先試完全符合;沒有的話,先試「只拿掉一個條件」,都不行才依 RELAX_ORDER 累加放寬。
 *
 * 為什麼要先試單一條件:直接累加的話,「日本 × 1 月 × 雪季」會先把風格丟掉,
 * 但真正卡住的是 1 月(全站沒有 1 月出發)。先單獨試過每一個,
 * 才能只放掉真正擋路的那一個,保留使用者其他的選擇。
 *
 * @returns {{trips: Array, relaxed: string[], exhausted: boolean}}
 *   relaxed   被放寬的條件
 *   exhausted 全部放寬完仍然沒有結果
 */
export function searchTrips(filters = {}) {
  const exact = filterTrips(filters)
  if (exact.length) return { trips: exact, relaxed: [], exhausted: false }

  const setKeys = RELAX_ORDER.filter((k) => isSet(filters[k]))

  for (const key of setKeys) {
    const trips = filterTrips(without(filters, [key]))
    if (trips.length) return { trips, relaxed: [key], exhausted: false }
  }

  const relaxed = []
  for (const key of setKeys) {
    relaxed.push(key)
    const trips = filterTrips(without(filters, relaxed))
    if (trips.length) return { trips, relaxed: [...relaxed], exhausted: false }
  }
  return { trips: [], relaxed, exhausted: true }
}

/**
 * 放寬提示條的說明文字。「歐洲最短 10 天」這種話是從資料算出來的,
 * 不是寫死的 —— 之後行程增加了,說明會自己跟著變。
 * @param filters 使用者原本的條件
 * @param result  searchTrips 的回傳值
 * @returns {{reason: string, relaxedText: string} | null} 沒有放寬就回傳 null
 */
export function explainRelaxation(filters, { relaxed, exhausted }) {
  if (!relaxed.length || exhausted) return null

  const relaxedText = relaxed.map((k) => FILTER_LABELS[k]).join('」與「')
  const kw = (filters.keyword ?? '').trim()
  const facts = keywordFacts(kw)

  // 連目的地都放寬了,而且那個字在站上根本查不到 —— 要講清楚,
  // 否則使用者只會看到一堆不相干的行程,不知道發生什麼事
  if (relaxed.includes('keyword') && !facts) {
    return { reason: kw ? `站上目前沒有「${kw}」的行程。` : '', relaxedText }
  }

  const reasons = []
  if (facts) {
    if (relaxed.includes('duration')) reasons.push(`最短 ${facts.minDays} 天`)
    if (relaxed.includes('month')) reasons.push(`出發月份集中在 ${facts.months.join('、')} 月`)
  }
  return { reason: reasons.length ? `${kw}的行程${reasons.join(',')}。` : '', relaxedText }
}

/**
 * 某個關鍵字(通常是地區)在站上的實際範圍,用來回答「為什麼查不到」。
 * 例如歐洲最短 10 天、只有 5/9/10 月出發。
 */
export function keywordFacts(keyword = '') {
  const kw = keyword.trim().toLowerCase()
  if (!kw) return null
  const list = tripCatalog.filter((t) =>
    [t.title, t.region, ...(t.keywords ?? [])].join(' ').toLowerCase().includes(kw),
  )
  if (!list.length) return null
  return {
    count: list.length,
    months: [...new Set(list.map((t) => t.month))].sort((a, b) => a - b),
    minDays: Math.min(...list.map((t) => t.days)),
    maxDays: Math.max(...list.map((t) => t.days)),
    minPrice: Math.min(...list.map((t) => t.price)),
  }
}

/**
 * 您可能也會喜歡:從沒出現在結果裡的行程挑幾筆,搜尋結果頁與開始找旅行共用。
 * 同地區最相關,其次是月份相近、風格相同、天數接近的。
 * @param shown   已經顯示在結果裡的行程
 * @param filters 使用者的條件(用到 keyword / month / style)
 * @param count   要挑幾筆
 */
export function recommendTrips(shown, filters = {}, count = 3) {
  const shownIds = new Set(shown.map((t) => t.id))
  const kw = (filters.keyword ?? '').trim()
  const days = shown[0]?.days
  const score = (t) => {
    let s = 0
    if (kw && t.region === kw) s += 10
    if (filters.month && Math.abs(t.month - filters.month) <= 1) s += 4
    if (filters.style && t.styles.includes(filters.style)) s += 3
    if (days && Math.abs(t.days - days) <= 2) s += 2
    return s
  }
  // 分數相同時用出發日期排,結果才不會每次重繪都跳來跳去
  return tripCatalog
    .filter((t) => !shownIds.has(t.id))
    .sort((a, b) => score(b) - score(a) || a.date.localeCompare(b.date))
    .slice(0, count)
}

/**
 * 「堅持這個條件的話,哪些地區有?」
 * 從被放寬掉的條件裡挑一個最具體的,單獨拿它去找還有哪些地區符合。
 */
export function alternativeRegions(filters, relaxed = [], excludeRegion = '') {
  for (const key of ['duration', 'month', 'budget']) {
    if (!relaxed.includes(key) || !isSet(filters[key])) continue

    const counts = {}
    for (const t of filterTrips({ [key]: filters[key] })) {
      if (t.region === excludeRegion) continue
      counts[t.region] = (counts[t.region] ?? 0) + 1
    }
    const list = Object.entries(counts)
      .map(([region, count]) => ({ region, count }))
      .sort((a, b) => b.count - a.count)

    if (list.length) {
      const text = key === 'month' ? `${filters.month} 月出發` : filters[key]
      return { key, text, regions: list }
    }
  }
  return null
}
