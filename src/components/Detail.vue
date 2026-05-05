<template>
  <div v-if="track" class="detail-page fade-in">
    <button class="back-btn" @click="goBack">← Назад</button>

    <div class="detail-card">
      <div class="detail-cover">
        <img :src="coverSrc" :alt="track.title" @error="handleImageError" />
      </div>

      <div class="detail-info">
        <h1 class="detail-title">{{ track.title }}</h1>
        <p class="detail-artist">{{ track.artist }}</p>
        <p class="detail-desc">{{ track.desc }}</p>

        <div class="detail-meta">
          <span class="detail-duration">⏱ {{ track.duration }}</span>
          <span class="tag" :class="`tag-${track.vibe}`">
            {{ getVibeLabel(track.vibe) }}
          </span>
        </div>

        <div class="detail-buttons">
          <button
            class="tape-btn"
            :class="{ saved: isSaved }"
            @click="toggleSave"
          >
            {{ isSaved ? "Удалить из My Tape" : "Добавить в My Tape" }}
          </button>

          <button
            v-if="track.yandexUrl"
            class="yandex-btn"
            @click="openYandexMusic"
          >
            Слушать
            <span class="external-icon">↗</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading">
    <div class="loading-spinner"></div>
    <p>Загрузка...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useMusicData } from "../composables/useMusicData.js";
import { useMyTape } from "../composables/useMyTape.js";
import noCover from "/img/no-cover.jpg";

const route = useRoute();
const router = useRouter();
const { getTrackById } = useMusicData();
const { addToTape, removeFromTape, isInTape } = useMyTape();

const track = ref(null);
const isSaved = ref(false);

const coverSrc = computed(() => {
  if (!track.value) return "";
  if (track.value.cover && track.value.cover !== "") {
    return track.value.cover;
  }
  return noCover;
});

onMounted(() => {
  const id = route.params.id;
  track.value = getTrackById(id);
  if (track.value) {
    isSaved.value = isInTape(track.value.id);
  }
});

const toggleSave = () => {
  if (!track.value) return;
  if (isSaved.value) {
    removeFromTape(track.value.id);
    isSaved.value = false;
  } else {
    addToTape(track.value.id);
    isSaved.value = true;
  }
};

const goBack = () => {
  router.back();
};

const openYandexMusic = () => {
  if (track.value?.yandexUrl) {
    window.open(track.value.yandexUrl, "_blank");
  }
};

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
</script>

<style scoped>
.detail-page {
  max-width: 900px;
  margin: 0 auto;
}

.back-btn {
  background: none;
  border: none;
  color: #00ff88;
  font-size: 1rem;
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 20px;
}

.back-btn:hover {
  color: #fff;
}

.detail-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  background: #111;
  border-radius: 24px;
  padding: 30px;
  border: 1px solid #222;
}

.detail-cover img {
  width: 100%;
  border-radius: 16px;
}

.detail-title {
  font-size: 2rem;
  margin-bottom: 8px;
  color: #fff;
}

.detail-artist {
  font-size: 1.2rem;
  color: #888;
  margin-bottom: 16px;
}

.detail-desc {
  font-size: 1rem;
  color: #ccc;
  margin-bottom: 24px;
  line-height: 1.5;
}

.detail-meta {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.detail-duration {
  color: #666;
}

.detail-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.yandex-btn {
  background: #ffcc00;
  border: none;
  color: #1a1a1a;
  padding: 12px 24px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.yandex-btn:hover {
  transform: scale(1.02);
  background: #ffdd33;
  box-shadow: 0 0 15px rgba(255, 204, 0, 0.4);
}

.external-icon {
  font-size: 1.1rem;
}

.tape-btn {
  background: transparent;
  border: 2px solid #00ff88;
  color: #00ff88;
  padding: 12px 24px;
  border-radius: 40px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s;
}

.tape-btn:hover {
  transform: scale(1.02);
}

.tape-btn.saved {
  background: #00ff88;
  color: #0a0a0a;
}

.loading {
  text-align: center;
  padding: 60px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid #222;
  border-top-color: #00ff88;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 20px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
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

.fade-in {
  animation: fadeIn 0.3s ease;
}

@media (max-width: 700px) {
  .detail-card {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px;
  }
  .detail-title {
    font-size: 1.5rem;
  }
}
</style>
