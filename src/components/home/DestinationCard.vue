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
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.name {
  font-size: 14px;
  color: #333;
}
</style>
