<template>
  <div class="welcome-overlay">
    <div class="background-image"></div>
    <div class="background-overlay"></div>

    <div class="welcome-container">
      <div class="sound-bars">
        <div class="bar" style="animation-delay: 0s"></div>
        <div class="bar" style="animation-delay: 0.1s"></div>
        <div class="bar" style="animation-delay: 0.2s"></div>
        <div class="bar" style="animation-delay: 0.3s"></div>
        <div class="bar" style="animation-delay: 0.4s"></div>
        <div class="bar" style="animation-delay: 0.5s"></div>
        <div class="bar" style="animation-delay: 0.6s"></div>
        <div class="bar" style="animation-delay: 0.7s"></div>
        <div class="bar" style="animation-delay: 0.8s"></div>
        <div class="bar" style="animation-delay: 0.9s"></div>
      </div>

      <h1 class="welcome-title">MOOD TAPE</h1>
      <p class="welcome-text">
        Узнай, какая музыка подходит твоему настроению прямо сейчас
      </p>
      <button class="start-btn" @click="$emit('start')">
        Узнай свой вайб
        <span class="arrow">→</span>
      </button>
    </div>
  </div>
</template>

<script setup>
defineEmits(["start"]);
</script>

<style scoped>
.welcome-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.8s ease;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("./img/fon.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 1;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
}

.welcome-container {
  position: relative;
  text-align: center;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  z-index: 3;
}

.sound-bars {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  height: 60px;
  margin-bottom: 30px;
}

.bar {
  width: 4px;
  background: linear-gradient(180deg, #00ff88, #ff0066);
  border-radius: 2px;
  animation: soundWave 0.8s ease-in-out infinite alternate;
}

.bar:nth-child(1) {
  height: 30px;
}
.bar:nth-child(2) {
  height: 45px;
}
.bar:nth-child(3) {
  height: 25px;
}
.bar:nth-child(4) {
  height: 50px;
}
.bar:nth-child(5) {
  height: 35px;
}
.bar:nth-child(6) {
  height: 40px;
}
.bar:nth-child(7) {
  height: 28px;
}
.bar:nth-child(8) {
  height: 48px;
}
.bar:nth-child(9) {
  height: 32px;
}
.bar:nth-child(10) {
  height: 42px;
}

@keyframes soundWave {
  0% {
    height: 15px;
    opacity: 0.3;
  }
  100% {
    height: 55px;
    opacity: 1;
  }
}

.welcome-title {
  font-size: 2.5rem;
  background: linear-gradient(135deg, #fff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 16px;
  letter-spacing: 4px;
  animation: glow 2s ease-in-out infinite alternate;
}

.welcome-text {
  color: #e0e0e0;
  font-size: 1.1rem;
  margin-bottom: 40px;
  line-height: 1.6;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
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
  position: relative;
  overflow: hidden;
}

.start-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: left 0.5s;
}

.start-btn:hover::before {
  left: 100%;
}

.start-btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.5);
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

@keyframes glow {
  from {
    text-shadow: 0 0 10px rgba(0, 255, 136, 0.3);
  }
  to {
    text-shadow: 0 0 20px rgba(0, 255, 136, 0.6);
  }
}

@media (max-width: 600px) {
  .welcome-title {
    font-size: 1.8rem;
  }

  .welcome-text {
    font-size: 0.9rem;
  }

  .sound-bars {
    gap: 4px;
  }

  .bar {
    width: 3px;
  }
}
</style>
