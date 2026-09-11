<script setup>
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import AuthModal from './components/auth/AuthModal.vue'
</script>

<template>
  <Header />
  <router-view />
  <Footer />
  <!-- 放在最外層掛一次就好,任何頁面都能透過 useAuth() 打開它 -->
  <AuthModal />
</template>
