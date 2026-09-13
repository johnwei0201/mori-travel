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
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.name {
  font-size: 16px;
  color: #333;
}
/* hover 與全站圖片卡片一致:圖片上浮並加深陰影 */
.card:hover .photo {
  transform: translateY(-4px);
  box-shadow: 0 14px 26px rgba(43, 36, 32, 0.16);
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
