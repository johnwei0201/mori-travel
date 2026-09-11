<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  trip: { type: Object, required: true },
})

const money = (n) => `NT$${n.toLocaleString()}`
</script>

<template>
  <article class="trip">
    <div class="trip-media">
      <img v-if="trip.img" :src="trip.img" :alt="trip.title" />
      <div v-else class="trip-placeholder">圖片待補</div>
      <span class="trip-tag">{{ trip.tag }}</span>
    </div>
    <div class="trip-body">
      <span class="trip-region">{{ trip.region }}</span>
      <h3>{{ trip.title }}</h3>
      <div class="trip-meta">
        <span>📅 {{ trip.date }} 出發</span>
        <span>☀️ {{ trip.duration }}</span>
      </div>
      <div class="trip-chips">
        <span v-for="f in trip.features" :key="f">{{ f }}</span>
      </div>
      <div class="trip-foot">
        <span class="price">{{ money(trip.price) }}<small>/人</small></span>
        <RouterLink v-if="trip.detailSlug" :to="`/trips/${trip.detailSlug}`">查看行程</RouterLink>
        <RouterLink v-else :to="{ path: '/consult', query: { topic: trip.region } }">
          諮詢這條路線
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<style scoped>
.trip {
  background: #fff;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(43, 36, 32, 0.08);
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.trip:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 30px rgba(43, 36, 32, 0.16);
}
.trip-media {
  position: relative;
}
.trip-media img {
  width: 100%;
  height: clamp(150px, 17vw, 194px);
  object-fit: cover;
  display: block;
}
.trip-placeholder {
  width: 100%;
  height: clamp(150px, 17vw, 194px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  letter-spacing: 1px;
  color: #a89c8e;
  background: repeating-linear-gradient(45deg, #f3ece1, #f3ece1 14px, #efe6d8 14px, #efe6d8 28px);
}
.trip-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: var(--color-accent);
  color: #fff;
  font-size: 14px;
  padding: 4px 11px;
  border-radius: 6px;
}
.trip-body {
  padding: 16px 18px 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}
.trip-region {
  font-size: 12.5px;
  color: #6b6259;
  letter-spacing: 1px;
}
.trip-body h3 {
  font-size: 17.5px;
  color: var(--color-primary);
  margin: 0;
}
.trip-meta {
  font-size: 12.5px;
  color: #6b6259;
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.trip-chips {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.trip-chips span {
  background: #fdf1e0;
  color: var(--color-primary);
  font-size: 14px;
  padding: 4px 10px;
  border-radius: 6px;
}
.trip-foot {
  margin-top: auto;
  padding-top: 12px;
  border-top: 1px solid #e7e0d6;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
}
.price {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-accent);
  font-variant-numeric: tabular-nums;
}
.price small {
  font-size: 12px;
  color: #6b6259;
  font-weight: 400;
  margin-left: 3px;
}
.trip-foot a {
  font-size: 13.5px;
  color: var(--color-primary);
  text-decoration: none;
  border-bottom: 1px solid currentColor;
  padding-bottom: 1px;
  white-space: nowrap;
  transition: color 0.15s ease;
}
.trip-foot a:hover {
  color: var(--color-accent);
}
</style>
