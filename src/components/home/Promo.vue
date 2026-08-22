<script setup>
import promoImg from '../../assets/images/promo-autumn-lake.png'
</script>

<template>
  <section class="promo">
    <div class="content">
      <span class="badge">限時優惠</span>
      <h2 class="title">秋冬早鳥・第二人最高折 NT$3,000</h2>
      <p class="desc">提早規劃最好玩,人氣行程快手預訂!</p>
      <button class="cta">立即搶購 ›</button>
    </div>
    <img :src="promoImg" alt="秋景湖畔" class="photo" />
  </section>
</template>

<style scoped>
.promo {
  margin: 0 40px 40px;
  border-radius: 16px;
  overflow: hidden;
  background: #fdf1e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content {
  padding: 40px;
  flex: 1;
}

.badge {
  display: inline-block;
  background: var(--color-accent);
  color: white;
  font-size: 13px;
  padding: 4px 12px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.title {
  font-size: 24px;
  color: var(--color-accent);
  margin-bottom: 12px;
}

.desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 20px;
}

.cta {
  background: white;
  border: 1px solid var(--color-accent);
  color: var(--color-accent);
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
}

.photo {
  width: 45%;
  height: 260px;
  object-fit: cover;
}
</style>
