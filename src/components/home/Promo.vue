<script setup>
import promoImg from '../../assets/images/promo-autumn-lake.png'
</script>

<template>
  <section class="promo">
    <img :src="promoImg" alt="秋冬早鳥優惠,第二人最高折 NT$3,000" class="banner" />
  </section>
</template>

<style scoped>
.promo {
  margin: 0 40px 40px;
  display: flex;
  justify-content: center;
}

.banner {
  width: 80%;
  height: auto;
  display: block;
  border-radius: 16px;
}

/* 手機上 40px 外距再乘 80% 寬度,banner 會縮得太小,
   改成貼齊其他區塊的 16px 內距、佔滿可用寬度 */
@media (max-width: 640px) {
  .promo {
    margin: 0 16px 24px;
  }
  .banner {
    width: 100%;
  }
}
</style>
