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

.banner-link {
  width: 80%;
  display: block;
  border-radius: 16px;
  transition:
    box-shadow 0.2s ease,
    outline-color 0.2s ease;
  outline: 2.5px solid transparent;
  outline-offset: -2.5px;
}

/* 與國內/國外旅遊的區域卡片同一套 hover:外框變橘色 + 陰影。
   用 outline 不用 border,才不會佔版面把圖推位。 */
.banner-link:hover {
  box-shadow: 0 12px 26px rgba(43, 36, 32, 0.2);
  outline-color: var(--color-accent);
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
