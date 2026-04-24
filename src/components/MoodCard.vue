<template>
  <div class="mood-card" @click="$emit('click')">
    <div class="card-cover">
      <img :src="coverSrc" :alt="track.title" @error="handleImageError" />
      <button
        class="save-btn"
        :class="{ 'save-btn-saved': isSaved }"
        @click.stop="$emit('save', track.id, isSaved)"
      >
        {{ isSaved ? "💾" : "📼" }}
      </button>
      <span class="duration-badge">{{ track.duration }}</span>
    </div>

    <div class="card-info">
      <h3 class="track-title">{{ track.title }}</h3>
      <p class="track-artist">{{ track.artist }}</p>
      <p class="track-description">{{ track.desc }}</p>
      <span class="tag" :class="`tag-${track.vibe}`">
        {{ getVibeLabel(track.vibe) }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  track: {
    type: Object,
    required: true,
  },
  isSaved: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["click", "save"]);

const coverSrc = computed(() => {
  if (props.track.cover && props.track.cover !== "") {
    return props.track.cover;
  }
  return "@/assets/img/no-cover.jpg";
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
  e.target.src = "@/assets/img/no-cover.jpg";
};
</script>

<style scoped>
.mood-card {
  background: #111;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #222;
}

.mood-card:hover {
  transform: translateY(-5px);
  border-color: #00ff88;
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.1);
}

.card-cover {
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
}

.card-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.mood-card:hover .card-cover img {
  transform: scale(1.05);
}

.save-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.2s;
}

.save-btn:hover {
  transform: scale(1.1);
}

.save-btn-saved {
  background: #00ff88;
  color: #0a0a0a;
}

.duration-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 500;
}

.card-info {
  padding: 16px;
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
  margin-bottom: 8px;
}

.track-description {
  font-size: 0.75rem;
  color: #666;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 1.4;
}
</style>
