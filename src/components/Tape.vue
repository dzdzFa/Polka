<script setup lang="ts">
import MoodCard from "./MoodCard.vue";
</script>

<template>
  <div class="tape-page fade-in">
    <h1 class="page-title">MY TAPE</h1>
    <div v-if="savedTracks.lenght > 0" class="grid">
      <MoodCard
        v-for="track in savedTracks"
        :key="track.id"
        :track="track"
        :is-saved="true"
        @save="handleRemove"
        @click="goToDetail(track.id)"
      />
    </div>

    <div v-else class="empty-state">
      <div class="empty-state-icon">📼</div>
      <h3 class="empty-state-title">Твоя лента пуста</h3>
      <p class="empty-state-text">Добавь треки с главной страницы</p>
      <button class="btn btn-primary" @click="goToHome">На главную</button>
    </div>
  </div>
</template>

<script setup>
import { useMyTape } from "../composables/useMyTape.js";
import { useRouter } from "vue-router";
import MoodCard from "./MoodCard.vue";

const { savedTracks, removeFromTape } = useMyTape();
const router = useRouter();

const handleRemove = (trackId, isSaved) => {
  removeFromTape(trackId);
};

const goToDetail = (id) => {
  router.push({ name: "detail", params: { id } });
};

const goToHome = () => {
  router.push({ name: "home" });
};
</script>

<style scoped>
.tape-page {
  animation: fadeIn 0.3s ease;
}

.page-title {
  text-align: center;
  margin-bottom: 40px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.empty-state {
  text-align: center;
  padding: 80px 20px;
}

.empty-state-icon {
  font-size: 4rem;
  margin-bottom: 20px;
  opacity: 0.5;
}

.empty-state-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 10px;
}

.empty-state-text {
  color: #666;
  margin-bottom: 30px;
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

@media (max-width: 768px) {
  .grid {
    gap: 16px;
  }
}
</style>
