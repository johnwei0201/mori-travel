<script setup>
import TripCard from './TripCard.vue'
import { trips as tripData } from '../../data/trips.js'

// 直接沿用 data/trips.js —— 首頁卡片與行程內頁共用同一份資料,
// 之後改日期或價格只要動 trips.js,不會兩邊對不上。
const trips = Object.entries(tripData).map(([slug, t]) => ({
  slug,
  tag: t.tag,
  img: t.heroImg,
  title: t.title,
  date: `${t.date} 出發`,
  duration: t.duration,
  features: t.features,
  price: t.price,
}))
</script>

<template>
  <section class="trips">
    <h2 class="title">精選國外行程</h2>
    <div class="list">
      <RouterLink
        v-for="trip in trips"
        :key="trip.slug"
        :to="`/trips/${trip.slug}`"
        target="_blank"
        rel="noopener"
        class="link"
      >
        <TripCard
          :tag="trip.tag"
          :img="trip.img"
          :title="trip.title"
          :date="trip.date"
          :duration="trip.duration"
          :features="trip.features"
          :price="trip.price"
        />
      </RouterLink>
    </div>
  </section>
</template>

<style scoped>
.trips {
  padding: 40px;
}
.title {
  font-size: 20px;
  color: var(--color-primary);
  margin-bottom: 20px;
}
.list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.link {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 1024px) {
  .trips {
    padding: 32px 24px;
  }
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .trips {
    padding: 24px 16px;
  }
  .list {
    grid-template-columns: 1fr;
  }
}
</style>
