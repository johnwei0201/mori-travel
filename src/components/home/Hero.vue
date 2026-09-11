<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import heroFuji from '../../assets/images_縮小/hero-japan-fuji.jpg'
import { months } from '../../data/planTrip.js'
import { durationOptions, regions } from '../../data/tripCatalog.js'

const router = useRouter()

const keyword = ref('')
const month = ref('')
const duration = ref('')

/** 只把有填的條件放進網址,乾淨也方便分享 */
function search() {
  const query = {}
  if (keyword.value.trim()) query.q = keyword.value.trim()
  if (month.value) query.month = month.value
  if (duration.value) query.days = duration.value
  router.push({ path: '/search', query })
}
</script>

<template>
  <section class="hero">
    <img :src="heroFuji" alt="富士山秋景" class="hero-image" />

    <div class="hero-copy">
      <div class="eyebrow">TIME TO TRAVEL</div>
      <p class="hero-headline">你有多久沒旅行了。</p>
      <p class="hero-sub">森林、海島、老城與雪山,總有一段路適合現在的你。</p>
    </div>

    <div class="search-card">
      <h1 class="search-title">找一趟剛剛好的旅行</h1>

      <form class="search-form" @submit.prevent="search">
        <div class="search-field">
          <label for="hero-dest">DESTINATION</label>
          <select id="hero-dest" v-model="keyword">
            <option value="">選擇目的地</option>
            <option v-for="r in regions" :key="r" :value="r">{{ r }}</option>
          </select>
        </div>
        <div class="search-field">
          <label for="hero-month">DEPARTURE MONTH</label>
          <select id="hero-month" v-model="month">
            <option value="">選擇出發月份</option>
            <option v-for="mo in months" :key="mo.m" :value="mo.m">{{ mo.m }} 月</option>
          </select>
        </div>
        <div class="search-field">
          <label for="hero-days">DURATION</label>
          <select id="hero-days" v-model="duration">
            <option value="">選擇天數</option>
            <option v-for="d in durationOptions" :key="d.label" :value="d.label">
              {{ d.label }}
            </option>
          </select>
        </div>
        <button type="submit" class="search-btn">搜尋行程</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
}

.hero-image {
  width: 100%;
  height: 480px;
  object-fit: cover;
  display: block;
}

/* 壓在山腰那一帶的整組文案。位置要留夠空間,別撞到下方的搜尋卡片 */
.hero-copy {
  position: absolute;
  top: 24%;
  left: 50%;
  transform: translateX(-50%);
  width: min(1100px, 90%);
  text-align: center;
  color: #ffffff;
  /* 白字在亮處的天空與雪面上會糊掉,整組統一加深色陰影 */
  text-shadow:
    0 2px 14px rgba(6, 32, 31, 0.55),
    0 1px 3px rgba(6, 32, 31, 0.5);
}

/* 英文小標:與國內外旅遊頁的 .eyebrow 同一套規格 */
.hero-copy .eyebrow {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  opacity: 0.9;
  margin-bottom: 12px;
}

/* 黑體字族優先取系統內建的正黑 / 蘋方 */
.hero-headline {
  margin: 0;
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Heiti TC', 'Noto Sans TC', sans-serif;
  font-weight: 900;
  font-size: clamp(28px, 4.4vw, 52px);
  letter-spacing: 3px;
  line-height: 1.4;
}

.hero-sub {
  margin: 12px 0 0;
  font-size: 16px;
  letter-spacing: 0.5px;
  opacity: 0.92;
}

.search-card {
  position: absolute;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: min(1100px, 90%);
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  padding: 28px 32px;
}

.search-title {
  font-size: 22px;
  color: var(--color-primary);
  margin-bottom: 20px;
}

.search-form {
  display: flex;
  gap: 16px;
  align-items: flex-end;
}

/* 與搜尋結果頁的欄位同一套:標籤疊在上緣、select 撐滿整格,
   點欄位任何位置(含箭頭)都能展開 */
.search-field {
  flex: 1;
  position: relative;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
}

.search-field label {
  position: absolute;
  top: 9px;
  left: 14px;
  font-size: 13px;
  color: #666;
  pointer-events: none;
}

.search-field input,
.search-field select {
  border: none;
  background: none;
  font: inherit;
  font-size: 15px;
  color: #2b2420;
  outline: none;
  width: 100%;
  padding: 32px 42px 10px 14px;
}
.search-field select {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background:
    url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230a5f61' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")
    no-repeat right 14px center / 16px;
}
.search-field input::placeholder {
  color: #a89c8e;
}
/* 下拉未選時顯示的提示文字,顏色比照 placeholder */
.search-field select:has(option[value='']:checked) {
  color: #a89c8e;
}
.search-field:focus-within {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 95, 97, 0.12);
}

.search-btn {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 8px;
  font-size: 15px;
  cursor: pointer;
  white-space: nowrap;
}

@media (max-width: 1024px) {
  /* 這個寬度搜尋卡片會換行變高,原本的 400px 會讓卡片壓到上方文案,
     把圖加高留出空間 */
  .hero-image {
    height: 470px;
  }
  /* 這個寬度搜尋卡片會換行變高,上方只剩窄窄一條,整組文案貼近頂端並縮小 */
  .hero-copy {
    top: 12px;
  }
  .hero-copy .eyebrow {
    font-size: 11.5px;
    margin-bottom: 6px;
  }
  .hero-headline {
    font-size: clamp(22px, 3.2vw, 30px);
    letter-spacing: 2px;
  }
  .hero-sub {
    margin-top: 6px;
    font-size: 13px;
  }
  .search-card {
    width: min(600px, 92%);
    padding: 24px;
  }
  .search-form {
    flex-wrap: wrap;
  }
  .search-field {
    min-width: 45%;
  }
  .search-btn {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .hero-image {
    height: 620px;
  }
  .hero-copy {
    top: 11%;
  }
  .hero-copy .eyebrow {
    font-size: 11.5px;
    margin-bottom: 8px;
  }
  .hero-headline {
    letter-spacing: 2px;
  }
  .hero-sub {
    margin-top: 10px;
    font-size: 13.5px;
    line-height: 1.7;
  }
  .search-card {
    width: 92%;
    padding: 18px;
  }
  .search-title {
    font-size: 17px;
    margin-bottom: 14px;
  }
  .search-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    /* 桌機版是 flex-end,在網格裡會變成靠底而不等高,這裡改回拉伸 */
    align-items: stretch;
  }
  /* DEPARTURE MONTH 在這個寬度會折成兩行,把那一格撐高;縮字並禁止換行 */
  .search-field label {
    font-size: 11px;
    letter-spacing: 0.3px;
    white-space: nowrap;
  }
  .search-field {
    min-width: 0;
  }
  /* 三個欄位放在兩欄網格,第三個會落單只佔半排,讓它跨滿整列 */
  .search-field:nth-of-type(3) {
    grid-column: 1 / -1;
  }
  .search-btn {
    grid-column: 1 / -1;
  }
}
</style>
