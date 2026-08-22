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
  border-radius: 16px;
  overflow: hidden;
}

.banner {
  width: 100%;
  display: block;
}
</style>
