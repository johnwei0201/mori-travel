<script setup>
import DestinationCard from './DestinationCard.vue'
import japanImg from '../../assets/images/destination-japan.png'
import koreaImg from '../../assets/images/destination-korea.png'
import seaImg from '../../assets/images/destination-southeast-asia.png'
import europeImg from '../../assets/images/destination-europe.png'
import americaImg from '../../assets/images/destination-america.png'
import oceaniaImg from '../../assets/images/destination-oceania.png'

const destinations = [
  { name: '日本', img: japanImg, slug: 'japan' },
  { name: '韓國', img: koreaImg, slug: 'korea' },
  { name: '東南亞', img: seaImg, slug: 'southeast-asia' },
  { name: '歐洲', img: europeImg, slug: 'europe' },
  { name: '美加', img: americaImg, slug: 'america' },
  { name: '紐澳', img: oceaniaImg, slug: 'oceania' },
]
</script>

<template>
  <section class="destinations">
    <h2 class="title">熱門目的地</h2>
    <div class="list">
      <RouterLink
        v-for="item in destinations"
        :key="item.name"
        :to="`/destinations/${item.slug}`"
        target="_blank"
        rel="noopener"
        class="link"
      >
        <DestinationCard :name="item.name" :img="item.img" />
      </RouterLink>
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
  flex-wrap: wrap;
  gap: 35px;
}
.link {
  text-decoration: none;
  color: inherit;
}

@media (max-width: 1024px) {
  .destinations {
    padding: 32px 24px;
  }
  .list {
    gap: 24px;
  }
}

@media (max-width: 640px) {
  .destinations {
    padding: 24px 16px;
  }
  .list {
    gap: 16px;
  }
}
</style>
