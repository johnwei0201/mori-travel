<script setup></script>

<template>
  <header class="header">
    <div class="logo">MORI <span>TRAVEL</span></div>

    <nav class="nav">
      <a href="#">國外跟團</a>
      <a href="#">自由行</a>
      <a href="#">機票訂房</a>
      <a href="#">旅遊指南</a>
    </nav>

    <div class="actions">
      <button class="icon-btn">👤</button>
      <button class="cta-btn">開始找旅行</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: #ffffff;
}

.logo {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
}
.logo span {
  font-weight: 400;
}

.nav {
  display: flex;
  gap: 32px;
}
.nav a {
  text-decoration: none;
  color: #333;
  font-size: 15px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
.icon-btn {
  border: 1px solid #ccc;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  background: none;
  cursor: pointer;
}
.cta-btn {
  background: var(--color-accent);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}
</style>
