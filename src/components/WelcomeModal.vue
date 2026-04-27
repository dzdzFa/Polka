<template>
    <div class="welcome-overlay">
        <div class="welcome-container">
            <div class="welcome-icon">📼</div>
            <h1 class="welcome-title">MOOD TAPE</h1>
            <p class="welcome-text">Узнай, какая музыка подходит твоему настроению прямо сейчас</p>
            <button class="start-btn" @click="$emit('start')">
                Узнай свой вайб
                <span class="arrow">→</span>
            </button>
        </div>
    </div>
</template>

<script setup>
defineEmits(['start'])
</script>

<style scoped>
.welcome-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.5s ease;
}

.welcome-container {
  text-align: center;
  padding: 40px;
  max-width: 500px;
}

.welcome-icon {
  font-size: 5rem;
  margin-bottom: 20px;
  animation: bounce 1s ease infinite;
}

.welcome-title {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #fff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 16px;
  letter-spacing: 4px;
}

.welcome-text {
  color: #888;
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.6;
}

.start-btn {
  background: #00ff88;
  border: none;
  padding: 16px 32px;
  border-radius: 60px;
  font-size: 1.2rem;
  font-weight: bold;
  color: #0a0a0a;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
}

.start-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(0, 255, 136, 0.5);
}

.arrow {
  transition: transform 0.3s ease;
}

.start-btn:hover .arrow {
  transform: translateX(5px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>