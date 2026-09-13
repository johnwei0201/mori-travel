<script setup>
/**
 * 沒有完全符合時的說明條:放寬了什麼、為什麼。
 * 搜尋結果頁與開始找旅行共用,notice 由 tripCatalog.js 的 explainRelaxation 產生。
 */
defineProps({
  notice: { type: Object, required: true },
})
defineEmits(['drop'])
</script>

<template>
  <div class="relax-notice">
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6" />
      <path d="M12 10.5v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
      <circle cx="12" cy="7.4" r="1.15" fill="currentColor" />
    </svg>
    <div class="relax-body">
      <h2>沒有完全符合的行程,已經幫您放寬條件</h2>
      <p>{{ notice.reason }}以下是放寬「{{ notice.relaxedText }}」之後的結果。</p>
      <button class="relax-btn" @click="$emit('drop')">移除這些條件</button>
    </div>
  </div>
</template>

<style scoped>
.relax-notice {
  display: flex;
  gap: 14px;
  background: #fdf1e0;
  border-left: 3px solid var(--color-accent);
  border-radius: 4px 12px 12px 4px;
  padding: 16px 18px;
  margin-bottom: 24px;
  color: var(--color-accent);
}
.relax-notice svg {
  flex-shrink: 0;
  margin-top: 3px;
}
.relax-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 0;
}
.relax-body h2 {
  margin: 0;
  font-size: 15px;
  color: var(--color-primary);
}
.relax-body p {
  margin: 0;
  font-size: 13.5px;
  line-height: 1.75;
  color: #7a5a41;
}
.relax-btn {
  margin-top: 7px;
  font: inherit;
  font-size: 13px;
  padding: 7px 14px;
  border-radius: 7px;
  border: 1px solid #e2c4ac;
  background: #fff;
  color: var(--color-primary);
  cursor: pointer;
  transition: border-color 0.15s ease;
}
.relax-btn:hover {
  border-color: var(--color-accent);
}
</style>
