<script setup></script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">MORI <span>TRAVEL</span></RouterLink>

    <nav class="nav">
      <RouterLink to="/domestic">國內旅遊</RouterLink>
      <RouterLink to="/international">國外旅遊</RouterLink>
      <RouterLink to="/booking">機票訂房</RouterLink>
      <RouterLink to="/guide">旅遊指南</RouterLink>
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
  text-decoration: none;
}
.logo span {
  font-weight: 400;
}

.nav {
  display: flex;
  gap: 32px;
}
.nav a {
  display: inline-block;
  text-decoration: none;
  color: #333;
  font-size: 17px;
  transition: color 0.15s ease;
}
.nav a:hover {
  color: #c2410c;
  text-shadow: 0 0 0.6px currentColor, 0 0 0.6px currentColor;
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

@media (max-width: 1024px) {
  .header {
    padding: 14px 24px;
  }
  .nav {
    gap: 20px;
  }
}

@media (max-width: 640px) {
  .header {
    padding: 12px 16px;
  }
  .nav {
    display: none;
  }
  .logo {
    font-size: 19px;
  }
  .cta-btn {
    padding: 8px 14px;
    font-size: 13px;
  }
}
</style>
