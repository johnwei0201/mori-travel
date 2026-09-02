<script setup>
import AppIcon from '../ui/AppIcon.vue'

defineProps({
  tag: String,
  img: String,
  title: String,
  date: String,
  duration: String,
  features: Array,
  price: Number,
})
</script>

<template>
  <div class="trip-card">
    <div class="image-wrap">
      <img :src="img" :alt="title" class="photo" />
      <span class="tag">{{ tag }}</span>
    </div>

    <div class="info">
      <h3 class="title">{{ title }}</h3>

      <div class="meta">
        <span><AppIcon name="calendar" :size="15" /> {{ date }}</span>
        <span><AppIcon name="sun" :size="15" /> {{ duration }}</span>
      </div>

      <div class="features">
        <span v-for="f in features" :key="f" class="feature">{{ f }}</span>
      </div>

      <div class="price-row">
        <span class="price-label">每人起</span>
        <span class="price">NT${{ price.toLocaleString() }}</span>
        <span class="arrow">›</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.trip-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
.image-wrap {
  position: relative;
}
.photo {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}
.tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-accent);
  color: white;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 6px;
}
.info {
  padding: 16px;
}
.title {
  font-size: 17px;
  color: var(--color-primary);
  margin-bottom: 10px;
}
.meta {
  display: flex;
  gap: 16px;
  font-size: 13px;
  color: #666;
  margin-bottom: 12px;
}
.meta span {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}
.features {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}
.feature {
  background: #f3f0ea;
  color: #666;
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 6px;
}
.price-row {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.price-label {
  font-size: 13px;
  color: #999;
}
.price {
  font-size: 20px;
  font-weight: 700;
  color: var(--color-accent);
}
.arrow {
  margin-left: auto;
  color: #999;
  font-size: 18px;
}
</style>
