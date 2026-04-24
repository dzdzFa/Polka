<template>
<div class="home fade-in">
  <h1 class="page-title">ВЫБЕРИ СВОЙ ВАЙБ</h1>

  <div class="vibe-grid">
    <button
    v-for="vibe in vibes"
    :key="vibe.id"
    class="vibe-btn"
    :class="{'vibe-btn-active': currentVibe === vibe.id}"
    @click="selectVibe(vibe.id)">
    <span class="vibe-emoji">{{ getVibeEmoji(vibe.id) }}</span>
    <span>{{ vibe.label }}</span>
  </button>
  </div>

  <div class="tracks-setion">
    <div class="section-header">
      <h2>{{ getCurrentVibeTitle() }}</h2>
      <span class="track-count">{{ filtredTracks.length }} треков</span>
    </div>

    <div class="grid">
      <MoodCard
      v-for="track in filtredTracks"
      :key="track.id"
      :track="track"
      :is-saved="isInTape(track.id)"
      @save="handleSave"
      @click="goToDetail(track.id)"
      />
    </div>

    <div v-if="filteredTracks.length === 0" class="empty-state">
      <div class="empty-state-icon">🎧</div>
      <h3 class="empty-state-title">Нет треков</h3>
      <p class="empty-state-text">В этом настроении пока нет терков</p>
    </div>
  </div>
</div>
</template>

<script setup>
import { useMusicData } from '../composables/useMusicData.js';
import { useMyTape } from '../composables/useMyTape.js';
import { useRouter } from 'vue-router';
import MoodCard from "./MoodCard.vue";

const {vibes, currentVibe, filteredTracks, setVibe} = useMusicData();
const {addToTape, removeeFromTape, isInTape} = useMyTape();
const router = useRouter();

const selectVibe = (vibeId) => {
  setVibe(vibeId);
};

const handleSave = (trackId, isSaved) => {
  if (isSaved) {
    removeeFromTape(trackId);
  } else {
    addToTape(trackId);
  }
};

const goToDetail = (id) => {
  router.push({name: 'detail', params: {id}});
};

const getVibeEmoji = (vibeId) => {
  const emojis = {
    all: '🎧',
    cheerful: '🔥',
    funny : '😂',
    calm : '😌',
    sad : '😢',
  };
  return emojis[vibeId] || '🎵';
};
const getCurrentVibeTitle = () => {
  const vibe = vibes.value.find((v) => v.id === currentVibe.value);
  return vibe ? vibe.label : 'Все треки';
};
</script>

<style scoped>
.page-title {
  text-align: center;
  margin-bottom: 40px;
  letter-spacing: 4px;
}

.vibe-grid {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 50px;
}

.vibe-btn {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 50px;
  padding: 12px 28px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s;
  color: #e0e0e0;
  font-weight: 500;
  font-size: 1rem;
}

.vibe-btn:hover {
  transform: translateY(-2px);
  border-color: #00ff88;
}

.vibe-btn-active {
  background: #00ff88;
  color: #0a0a0a;
  border-color: #00ff88;
}

.vibe-emoji {
  font-size: 1.2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 10px;
}

.track-count {
  color: #00ff88;
  font-size: 0.9rem;
  font-weight: 500;
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

.fade-in {
  animation: fadeIn 0.4s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
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