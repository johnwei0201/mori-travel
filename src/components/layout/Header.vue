<script setup></script>

<template>
  <header class="header">
    <RouterLink to="/" class="logo">MORI <span>TRAVEL</span></RouterLink>

    <nav class="nav">
      <RouterLink to="/">回首頁</RouterLink>
      <RouterLink to="/domestic">國內旅遊</RouterLink>
      <RouterLink to="/international">國外旅遊</RouterLink>
      <RouterLink to="/booking">機票訂房</RouterLink>
      <RouterLink to="/guide">旅遊指南</RouterLink>
    </nav>

    <div class="actions">
      <button class="icon-btn">👤</button>
      <RouterLink to="/plan" class="cta-btn">開始找旅行</RouterLink>
    </div>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 40px;
  background: #f3ece1;
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid #e7e0d6;
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
  /* 連結左右各 16px 內距,兩兩相加剛好是原本的 32px 字間距 */
  gap: 0;
  /* 撐滿 Header 內容高度,再用負 margin 吃掉 Header 的上下內距,
     這樣 hover 的底色才會從 Header 頂端貫穿到底端 */
  align-self: stretch;
  margin-block: -16px;
}
.nav a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 19px;
  padding: 0 16px;
  transition:
    color 0.15s ease,
    background 0.15s ease;
}
.nav a:hover {
  background: #ffffff;
  color: #c2410c;
  text-shadow:
    0 0 0.6px currentColor,
    0 0 0.6px currentColor;
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
  background: #ffffff;
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
  text-decoration: none;
  display: inline-block;
  transition: background 0.15s ease;
}
.cta-btn:hover {
  background: #d4551f;
}

@media (max-width: 1024px) {
  .header {
    padding: 14px 24px;
  }
  .nav {
    margin-block: -14px;
  }
  .nav a {
    padding: 0 12px;
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
