<template>
  <div class="app-layout">
    <header class="header">
    <RouterLink :to="{name :'home'}" class="logo">MOOD TAPE</RouterLink>
    <nav class="nav">
      <RouterLink :to="{name :'home'}" class="nav-link">АФИША</RouterLink>
      <RouterLink :to="{name :'about'}" class="nav-link">МОЯ ЛЕНТА</RouterLink>
    </nav>
    </header>

    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

  <script setup>
  import {RouterLink, RouterView} from 'vue-router' 
  </script>

<style scoped>
.app-layout { min-height: 100vh; background: #0a0a0a; color: #e0e0e0; font-family: system-ui, sans-serif; }
.header { display: flex; justify-content: space-between; align-items: center; padding: 15px 20px; border-bottom: 1px solid #222; }
.logo { font-size: 1.2rem; font-weight: bold; color: #fff; text-decoration: none; }
.nav { display: flex; gap: 15px; }
.nav-link { color: #888; text-decoration: none; transition: color 0.2s; }
.router-link-active { color: #00ff88; }
.main-content { max-width: 1100px; margin: 0 auto; padding: 20px; }
</style>