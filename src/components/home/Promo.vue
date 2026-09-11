<script setup>
import promoImg from '../../assets/images/promo-autumn-lake.png'
</script>

<template>
  <section class="promo">
    <!-- 「立即購買」的按鈕是畫在圖片裡的,沒辦法只讓那一塊可點,
         所以整張 banner 都是連結 —— 這也是一般 banner 的慣例。
         開新分頁與 target/rel 的寫法比照首頁其他卡片。 -->
    <RouterLink to="/trips/tokyo" target="_blank" rel="noopener" class="banner-link">
      <img
        :src="promoImg"
        alt="秋冬早鳥優惠,第二人最高折 NT$3,000,查看東京賞楓 5 日行程"
        class="banner"
      />
    </RouterLink>
  </section>
</template>

<style scoped>
.promo {
  margin: 0 40px 40px;
  display: flex;
  justify-content: center;
}

/* banner 本身已經有「立即購買」按鈕當作點擊提示,
   所以這裡不加 hover 的外框或陰影,維持畫面乾淨。 */
.banner-link {
  width: 80%;
  display: block;
}

.banner {
  width: 100%;
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
  .banner-link {
    width: 100%;
  }
}
</style>
