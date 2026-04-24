<template>
  <div class="app-layout">
    <header class="header">
      <RouterLink :to="{ name: 'home' }" class="logo">MOOD TAPE</RouterLink>
      <nav class="nav">
        <RouterLink :to="{ name: 'home' }" class="nav-link">АФИША</RouterLink>
        <RouterLink :to="{ name: 'tape' }" class="nav-link"
          >МОЯ ЛЕНТА</RouterLink
        >
      </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 255, 136, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 800;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
  transition: all 0.2s;
}

.logo-icon {
  font-size: 1.5rem;
}

.logo:hover {
  color: #00ff88;
}

.nav {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #888;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: all 0.2s;
  padding: 8px 0;
}

.nav-link:hover {
  color: #fff;
}

.nav-link-active {
  color: #00ff88;
  border-bottom: 2px solid #00ff88;
}

.main-content {
  flex: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  width: 100%;
}

.footer {
  text-align: center;
  padding: 30px;
  border-top: 1px solid #1a1a1a;
  color: #555;
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .header {
    padding: 15px 20px;
  }

  .logo {
    font-size: 1rem;
  }

  .nav {
    gap: 15px;
  }

  .main-content {
    padding: 20px 15px;
  }
}
</style>
