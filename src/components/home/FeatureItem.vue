<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  icon: String,
  title: String,
  desc: String,
})
</script>

<template>
  <RouterLink to="/consult" class="feature-item">
    <span class="icon">{{ icon }}</span>
    <div class="text">
      <h3 class="title">{{ title }}</h3>
      <p class="desc">{{ desc }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
  padding: 10px 12px;
  border-radius: 12px;
  color: inherit;
  text-decoration: none;
  transition:
    background 0.18s ease,
    transform 0.18s ease;
}
.feature-item:hover {
  background: rgba(255, 255, 255, 0.7);
  transform: translateY(-2px);
}
.icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
}
.title {
  font-size: 15px;
  color: var(--color-primary);
  margin-bottom: 4px;
}
.desc {
  font-size: 13px;
  color: #777;
}
</style>
