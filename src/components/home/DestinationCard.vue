<script setup>
defineProps({
  name: String,
  img: String,
})
</script>

<template>
  <div class="card">
    <img :src="img" :alt="name" class="photo" />
    <p class="name">{{ name }}</p>
  </div>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.photo {
  width: 154px;
  height: 154px;
  border-radius: 50%;
  object-fit: cover;
}
.name {
  font-size: 16px;
  color: #333;
  transition: color 0.2s ease;
}
.card:hover .name {
  color: #c2410c;
}

@media (max-width: 1024px) {
  .photo {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 640px) {
  .photo {
    width: 88px;
    height: 88px;
  }
  .name {
    font-size: 14px;
  }
}
</style>
