<template>
  <div class="not-found fade-in">
    <div class="empty-state-icon">🎵</div>
    <h1 class="error-code">404</h1>
    <p class="error-text">Страница не найдена</p>
    <p class="error-desc">Такого трека или страницы не существует</p>
    <button class="btn btn-primary" @click="goToHome">
      Вернуться на главную
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToHome = () => {
  router.push({ name: "home" });
};
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 80px 20px;
}
.error-code {
  font-size: 6rem;
  color: #00ff88;
  margin-bottom: 16px;
}
.error-text {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 8px;
}
.error-desc {
  color: #666;
  margin-bottom: 40px;
}
.fade-in {
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
