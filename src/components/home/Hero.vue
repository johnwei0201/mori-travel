<script setup>
import heroFuji from '../../assets/images/hero-japan-fuji.png'
</script>

<template>
  <section class="hero">
    <img :src="heroFuji" alt="富士山秋景" class="hero-image" />

    <div class="search-card">
      <h1 class="search-title">找一趟剛剛好的旅行</h1>

      <div class="search-form">
        <div class="search-field">
          <label>想去哪裡</label>
          <input type="text" placeholder="輸入國家、城市或景點" />
        </div>
        <div class="search-field">
          <label>出發月份</label>
          <input type="text" placeholder="選擇出發月份" />
        </div>
        <div class="search-field">
          <label>旅遊天數</label>
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
</style>
