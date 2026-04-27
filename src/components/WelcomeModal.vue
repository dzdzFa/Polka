<template>
  <div class="welcome-overlay">
    <div class="welcome-container">
      <div class="wave-container">
        <svg class="wave-svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#FF0066">
                <animate
                  attributeName="stop-color"
                  values="#FF0066;#00FF88;#FFD700;#FF0066"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="33%" stop-color="#00FF88">
                <animate
                  attributeName="stop-color"
                  values="#00FF88;#FFD700;#FF0066;#00FF88"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="66%" stop-color="#FFD700">
                <animate
                  attributeName="stop-color"
                  values="#FFD700;#FF0066;#00FF88;#FFD700"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stop-color="#7B2FBE">
                <animate
                  attributeName="stop-color"
                  values="#7B2FBE;#00FF88;#FF0066;#7B2FBE"
                  dur="6s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#00FF88">
                <animate
                  attributeName="stop-color"
                  values="#00FF88;#FF0066;#7B2FBE;#00FF88"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="50%" stop-color="#FFD700">
                <animate
                  attributeName="stop-color"
                  values="#FFD700;#7B2FBE;#FF0066;#FFD700"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stop-color="#FF0066">
                <animate
                  attributeName="stop-color"
                  values="#FF0066;#00FF88;#FFD700;#FF0066"
                  dur="5s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>

          <path
            class="wave wave1"
            d="M0,150 C150,100 250,200 400,150 C550,100 650,200 800,150 C950,100 1050,200 1200,150 L1200,300 L0,300 Z"
            fill="url(#gradient1)"
            opacity="0.8"
          >
            <animate
              attributeName="d"
              values="
                M0,150 C150,100 250,200 400,150 C550,100 650,200 800,150 C950,100 1050,200 1200,150 L1200,300 L0,300 Z;
                M0,170 C150,120 250,180 400,130 C550,80 650,220 800,170 C950,120 1050,200 1200,160 L1200,300 L0,300 Z;
                M0,130 C150,180 250,120 400,170 C550,220 650,100 800,130 C950,180 1050,140 1200,180 L1200,300 L0,300 Z;
                M0,150 C150,100 250,200 400,150 C550,100 650,200 800,150 C950,100 1050,200 1200,150 L1200,300 L0,300 Z"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          <path
            class="wave wave2"
            d="M0,200 C150,160 250,240 400,190 C550,140 650,260 800,200 C950,150 1050,250 1200,190 L1200,300 L0,300 Z"
            fill="url(#gradient2)"
            opacity="0.6"
          >
            <animate
              attributeName="d"
              values="
                M0,200 C150,160 250,240 400,190 C550,140 650,260 800,200 C950,150 1050,250 1200,190 L1200,300 L0,300 Z;
                M0,180 C150,220 250,200 400,230 C550,260 650,180 800,210 C950,240 1050,200 1200,220 L1200,300 L0,300 Z;
                M0,220 C150,180 250,260 400,210 C550,160 650,280 800,220 C950,180 1050,260 1200,200 L1200,300 L0,300 Z;
                M0,200 C150,160 250,240 400,190 C550,140 650,260 800,200 C950,150 1050,250 1200,190 L1200,300 L0,300 Z"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>

          <path
            class="wave wave3"
            d="M0,230 C100,210 200,260 300,240 C400,220 500,250 600,230 C700,210 800,260 900,240 C1000,220 1100,250 1200,230 L1200,300 L0,300 Z"
            fill="url(#gradient1)"
            opacity="0.4"
          >
            <animate
              attributeName="d"
              values="
                M0,230 C100,210 200,260 300,240 C400,220 500,250 600,230 C700,210 800,260 900,240 C1000,220 1100,250 1200,230 L1200,300 L0,300 Z;
                M0,250 C100,230 200,240 300,260 C400,280 500,230 600,250 C700,270 800,240 900,260 C1000,280 1100,240 1200,250 L1200,300 L0,300 Z;
                M0,210 C100,230 200,250 300,220 C400,200 500,270 600,230 C700,200 800,250 900,220 C1000,200 1100,230 1200,210 L1200,300 L0,300 Z;
                M0,230 C100,210 200,260 300,240 C400,220 500,250 600,230 C700,210 800,260 900,240 C1000,220 1100,250 1200,230 L1200,300 L0,300 Z"
              dur="3.5s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

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
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  animation: fadeIn 0.8s ease;
}

.welcome-container {
  text-align: center;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  position: relative;
}

.wave-container {
  width: 100%;
  max-width: 500px;
  height: 180px;
  margin: 0 auto 30px;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
}

.wave-svg {
  width: 100%;
  height: 100%;
  display: block;
}

.wave {
  animation: waveMove 3s ease-in-out infinite;
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
  height: 20px;
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

@keyframes waveMove {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
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
