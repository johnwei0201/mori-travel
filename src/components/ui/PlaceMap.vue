<script setup>
import { computed } from 'vue'

const props = defineProps({
  /** 地點查詢字串(地名)。會在該地點放一個圖釘,適合明確的單一景點 */
  query: { type: String, default: '' },
  /** 「緯度,經度」。給洲級/區域級的範圍檢視用,不會放圖釘 */
  center: { type: String, default: '' },
  /** 搭配 center 使用的縮放層級,數字越小看得越廣 */
  zoom: { type: Number, default: 5 },
  /** iframe 的無障礙名稱,螢幕閱讀器會唸出來 */
  label: { type: String, required: true },
})

/**
 * output=embed 是免 API 金鑰的嵌入寫法,不用申請 Google Cloud 帳號。
 * hl=zh-TW 讓地圖介面與地名都顯示繁體中文。
 *
 * 兩種模式:
 *   q=地名     Google 自己決定視野,並在該地點放圖釘 —— 用在 48 個景點
 *   ll=座標&z= 指定中心與縮放,不放圖釘 —— 用在整個洲/區域,
 *              因為那種範圍沒有單一定點可標,硬放圖釘反而誤導
 */
const src = computed(() => {
  const base = 'https://www.google.com/maps?'
  const view = props.center
    ? `ll=${encodeURIComponent(props.center)}&z=${props.zoom}`
    : `q=${encodeURIComponent(props.query)}`
  return `${base}${view}&hl=zh-TW&output=embed`
})
</script>

<template>
  <div class="place-map">
    <!-- loading="lazy":使用者滑到這裡才載入地圖。
         每張地圖約 300–500KB,不延遲載入會拖慢整頁開啟速度。 -->
    <iframe
      :src="src"
      :title="label"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.place-map {
  /* 固定 4:3,左邊文案長短不一時,兩欄的高度才不會忽高忽低 */
  aspect-ratio: 4 / 3;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(43, 36, 32, 0.12);
  background: #eae4da;
}

.place-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}
</style>
