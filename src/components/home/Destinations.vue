<script setup>
import DestinationCard from './DestinationCard.vue'
import japanImg from '../../assets/images/destination-japan.png'
import koreaImg from '../../assets/images/destination-korea.png'
import seaImg from '../../assets/images/destination-southeast-asia.png'
import europeImg from '../../assets/images/destination-europe.png'
import americaImg from '../../assets/images/destination-america.png'
import oceaniaImg from '../../assets/images/destination-oceania.png'

const destinations = [
  { name: '日本', img: japanImg },
  { name: '韓國', img: koreaImg },
  { name: '東南亞', img: seaImg },
  { name: '歐洲', img: europeImg },
  { name: '美加', img: americaImg },
  { name: '紐澳', img: oceaniaImg },
]
</script>

<template>
  <section class="destinations">
    <h2 class="title">熱門目的地</h2>
    <div class="list">
      <DestinationCard
        v-for="item in destinations"
        :key="item.name"
        :name="item.name"
        :img="item.img"
      />
    </div>
  </section>
</template>

<style scoped>
.destinations {
  padding: 40px;
}
.title {
  font-size: 20px;
  color: var(--color-primary);
  margin-bottom: 20px;
}
.list {
  display: flex;
  justify-content: center;
  gap: 24px;
}
</style>