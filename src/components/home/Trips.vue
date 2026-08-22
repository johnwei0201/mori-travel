<script setup>
import TripCard from './TripCard.vue'
import tokyoImg from '../../assets/images/trip-tokyo-autumn.png'
import hokkaidoImg from '../../assets/images/trip-hokkaido-winter.png'
import italyImg from '../../assets/images/trip-italy-classic.png'

const trips = [
  {
    id: 1,
    tag: '人氣推薦',
    img: tokyoImg,
    title: '東京賞楓 5 日',
    date: '2025/11/12 出發',
    duration: '5 天 4 夜',
    features: ['含來回機票', '市區飯店', '賞楓名所'],
    price: 26900,
  },
  {
    id: 2,
    tag: '熱銷中',
    img: hokkaidoImg,
    title: '北海道雪祭 6 日',
    date: '2026/02/03 出發',
    duration: '6 天 5 夜',
    features: ['含來回機票', '溫泉飯店', '雪祭體驗'],
    price: 31900,
  },
  {
    id: 3,
    tag: '經典首選',
    img: italyImg,
    title: '義大利經典 10 日',
    date: '2025/10/28 出發',
    duration: '10 天 9 夜',
    features: ['含來回機票', '四星飯店', '中文導遊'],
    price: 52900,
  },
]
</script>

<template>
  <section class="trips">
    <h2 class="title">精選國外行程</h2>
    <div class="list">
      <TripCard
        v-for="trip in trips"
        :key="trip.id"
        :tag="trip.tag"
        :img="trip.img"
        :title="trip.title"
        :date="trip.date"
        :duration="trip.duration"
        :features="trip.features"
        :price="trip.price"
      />
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
</style>
