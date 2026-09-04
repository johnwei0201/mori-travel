<script setup>
import heroFuji from '../../assets/images/hero-japan-fuji.png'
</script>

<template>
  <section class="hero">
    <img :src="heroFuji" alt="富士山秋景" class="hero-image" />

    <p class="hero-headline">你有多久沒旅行了。</p>

    <div class="search-card">
      <h1 class="search-title">找一趟剛剛好的旅行</h1>

      <div class="search-form">
        <div class="search-field">
          <label>DESTINATION</label>
          <input type="text" placeholder="輸入國家、城市或景點" />
        </div>
        <div class="search-field">
          <label>DEPARTURE MONTH</label>
          <input type="text" placeholder="選擇出發月份" />
        </div>
        <div class="search-field">
          <label>DURATION</label>
          <input type="text" placeholder="選擇天數" />
        </div>
        <button class="search-btn">搜尋行程</button>
      </div>
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

/* 壓在山腰那一帶的主標。黑體字族優先取系統內建的正黑 / 蘋方,
   白字配深色陰影,才不會在亮處的天空與雪面上糊掉 */
.hero-headline {
  position: absolute;
  top: 34%;
  left: 50%;
  transform: translateX(-50%);
  width: min(1100px, 90%);
  margin: 0;
  text-align: center;
  color: #ffffff;
  font-family: 'Microsoft JhengHei', 'PingFang TC', 'Heiti TC', 'Noto Sans TC', sans-serif;
  font-weight: 900;
  font-size: clamp(28px, 4.4vw, 52px);
  letter-spacing: 3px;
  line-height: 1.4;
  text-shadow:
    0 2px 14px rgba(6, 32, 31, 0.55),
    0 1px 3px rgba(6, 32, 31, 0.5);
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

.search-field {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 8px 14px;
}

.search-field label {
  font-size: 13px;
  color: #666;
}

.search-field input {
  border: none;
  font-size: 15px;
  outline: none;
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
  .hero-image {
    height: 400px;
  }
  /* 這個寬度搜尋卡片會換行變高,上方只剩窄窄一條,標題改貼近頂端並縮小 */
  .hero-headline {
    top: 14px;
    font-size: clamp(22px, 3.2vw, 30px);
    letter-spacing: 2px;
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
  .hero-headline {
    top: 16%;
    letter-spacing: 2px;
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
