<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  /** 帶去諮詢頁的主題,通常是使用者搜尋的地區 */
  topic: { type: String, default: '' },
})
</script>

<template>
  <!-- 刻意做成虛線、無照片,一眼看得出這不是行程,而是入口 -->
  <RouterLink class="consult-card" :to="{ path: '/consult', query: topic ? { topic } : {} }">
    <span class="mark" aria-hidden="true">
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path
          d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-2.8-.4L4 21l1.5-4.2A8.4 8.4 0 0 1 12 3.1a8.4 8.4 0 0 1 9 8.4Z"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <h3>沒有理想的路線?</h3>
    <p>告訴顧問您的假期與預算,我們幫您把行程排出來。</p>
    <span class="go">諮詢行程 <span aria-hidden="true">➤</span></span>
  </RouterLink>
</template>

<style scoped>
.consult-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 100%;
  padding: 32px 24px;
  text-align: center;
  text-decoration: none;
  border: 1.5px dashed #d8cfc2;
  border-radius: 14px;
  background: #fffdfa;
  transition:
    border-color 0.2s ease,
    background 0.2s ease;
}
.consult-card:hover {
  border-color: var(--color-accent);
  background: #fdf1e0;
}

.mark {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: #eef4f2;
  color: var(--color-primary);
  margin-bottom: 2px;
}
.consult-card h3 {
  margin: 0;
  font-size: 16.5px;
  color: var(--color-primary);
}
.consult-card p {
  margin: 0;
  max-width: 22ch;
  font-size: 13px;
  line-height: 1.75;
  color: #6b6259;
}
.go {
  margin-top: 4px;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--color-accent);
}
</style>
