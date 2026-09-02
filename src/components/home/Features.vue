<script setup>
import FeatureItem from './FeatureItem.vue'

const features = [
  { id: 1, icon: 'shield', title: '安心出發', desc: '嚴選合作夥伴,完善旅遊保險,讓旅程更安心' },
  { id: 2, icon: 'headphone', title: '專人服務', desc: '旅遊顧問一對一諮詢,行前行程全程協助', to: '/service' },
  { id: 3, icon: 'clipboard', title: '行程透明', desc: '行程內容清楚標示,無隱藏費用' },
]
</script>

<template>
  <section class="features">
    <FeatureItem
      v-for="f in features"
      :key="f.id"
      :icon="f.icon"
      :title="f.title"
      :desc="f.desc"
      :to="f.to ?? '/consult'"
    />
  </section>
</template>

<style scoped>
.features {
  display: flex;
  gap: 40px;
  margin: 0 40px 40px;
  padding: 28px 40px;
  background: #faf5ec;
  border-radius: 16px;
}

@media (max-width: 1024px) {
  .features {
    margin: 0 24px 32px;
    padding: 24px;
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .features {
    flex-direction: column;
    margin: 0 16px 24px;
    padding: 20px;
    gap: 20px;
  }
}
</style>
