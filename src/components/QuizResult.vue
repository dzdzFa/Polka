<template>
  <div v-if="isVisible" class="result-overlay" @click.self="closeModal">
    <div class="result-container">
      <div class="result-icon">🎉</div>
      <h2 class="result-title">Твой вайб определен!</h2>
      <p class="result-subtitle">Мы подобрали для тебя трек</p>

      <div class="track-card" @click="goToDetail">
        <div class="track-cover">
          <img :src="trackCover" :alt="track.title" @error="handleImageError" />
          <div class="play-overlay">▶</div>
        </div>
        <div class="track-info">
          <h3 class="track-title">{{ track.title }}</h3>
          <p class="track-artist">{{ track.artist }}</p>
          <p class="track-desc">{{ track.desc }}</p>
          <span class="vibe-tag" :class="`tag-${track.vibe}`">
            {{ getVibeLabel(track.vibe) }}
          </span>
        </div>
      </div>

      <div class="result-buttons">
        <button class="btn-primary" @click="goToHome">
          Перейти в MOOD TAPE
        </button>
        <button class="btn-outline" @click="retakeQuiz">
          Пройти тест заново
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useQuizState } from "../store/quizState.js";
import { useQuiz } from "../composables/useQuiz.js";
import noCover from "/img/no-cover.jpg";

const router = useRouter();
const { getSelectedTrack } = useQuizState();
const { resetQuiz } = useQuiz();

const track = getSelectedTrack();
const isVisible = ref(true);

const trackCover = computed(() => {
  if (track?.cover && track.cover !== "") return track.cover;
  return noCover;
});

const getVibeLabel = (vibeId) => {
  const labels = {
    cheerful: "Бодрое",
    funny: "Веселое",
    calm: "Спокойное",
    sad: "Грустное",
  };
  return labels[vibeId] || vibeId;
};

const handleImageError = (e) => {
  e.target.src = noCover;
};

const closeModal = () => {
  isVisible.value = false;
};

const goToHome = () => {
  closeModal();
  setTimeout(() => {
    router.push({ name: "home" });
  }, 200);
};

const goToDetail = () => {
  if (track) {
    closeModal();
    setTimeout(() => {
      router.push({ name: "detail", params: { id: track.id } });
    }, 200);
  }
};

const retakeQuiz = () => {
  closeModal();
  setTimeout(() => {
    resetQuiz();
    localStorage.removeItem("quiz-completed");
    window.location.reload();
  }, 200);
};
</script>

<style scoped>
.result-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 10, 0.98);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1500;
  animation: slideUp 0.3s ease;
  transition: opacity 0.2s ease;
}

/* Анимация при закрытии */
.result-overlay[v-cloak] {
  display: none;
}

.result-container {
  background: #111;
  border-radius: 32px;
  padding: 40px;
  max-width: 480px;
  width: 90%;
  border: 1px solid #00ff88;
  text-align: center;
}

.result-icon {
  font-size: 3rem;
  margin-bottom: 12px;
}

.result-title {
  font-size: 1.6rem;
  margin-bottom: 8px;
  color: #fff;
}

.result-subtitle {
  color: #888;
  margin-bottom: 30px;
}

.track-card {
  background: #1a1a1a;
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: flex;
  gap: 16px;
  padding: 16px;
}

.track-card:hover {
  transform: translateY(-3px);
  border: 1px solid #00ff88;
}

.track-cover {
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
}

.track-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
}

.track-card:hover .play-overlay {
  opacity: 1;
}

.track-info {
  flex: 1;
}

.track-title {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 4px;
  color: #fff;
}

.track-artist {
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 6px;
}

.track-desc {
  font-size: 0.7rem;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.3;
}

.vibe-tag {
  display: inline-block;
  padding: 2px 10px;
  border-radius: 20px;
  font-size: 0.65rem;
  font-weight: 600;
}

.result-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary {
  background: #00ff88;
  color: #0a0a0a;
  padding: 12px 24px;
  border-radius: 40px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-primary:hover {
  transform: scale(1.02);
  box-shadow: 0 0 15px rgba(0, 255, 136, 0.4);
}

.btn-outline {
  background: transparent;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 12px 24px;
  border-radius: 40px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-outline:hover {
  background: rgba(0, 255, 136, 0.1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
