<template>
  <div class="quiz-overlay">
    <div class="quiz-container">
      <div class="quiz-header">
        <h2 class="quiz-title">🎯 Узнай свой вайб</h2>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
        <span class="question-counter"
          >{{ currentQuestionIndex + 1 }} / {{ questions.length }}</span
        >
      </div>

      <div class="quiz-content">
        <h3 class="question-text">{{ currentQuestion.text }}</h3>

        <div class="options-grid">
          <button
            v-for="(option, idx) in currentQuestion.options"
            :key="idx"
            class="option-btn"
            @click="handleAnswer(option.vibe)"
          >
            <span class="option-marker">{{
              String.fromCharCode(65 + idx)
            }}</span>
            {{ option.text }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useQuiz } from "../composables/useQuiz.js";
import { useMusicData } from "../composables/useMusicData.js";
import { useQuizState } from "../store/quizState.js";

const emit = defineEmits(["complete"]);

const {
  currentQuestion,
  currentQuestionIndex,
  questions,
  progress,
  saveAnswer,
  getResultVibe,
} = useQuiz();

const { tracks } = useMusicData();
const { setSelectedTrack, completeQuiz } = useQuizState();

const handleAnswer = (vibe) => {
  saveAnswer(vibe);

  if (currentQuestionIndex.value + 1 === questions.length) {
    const resultVibe = getResultVibe();

    const matchingTracks = tracks.value.filter(
      (track) => track.vibe === resultVibe,
    );

    let selectedTrack = null;
    if (matchingTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingTracks.length);
      selectedTrack = matchingTracks[randomIndex];
    } else {
      selectedTrack = tracks.value[0];
    }

    setSelectedTrack(selectedTrack);
    completeQuiz();
    emit("complete", selectedTrack);
  }
};
</script>

<style scoped>
.quiz-overlay {
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
  animation: fadeIn 0.3s ease;
}

.quiz-container {
  background: #111;
  border-radius: 32px;
  padding: 40px;
  max-width: 600px;
  width: 90%;
  border: 1px solid #00ff88;
  box-shadow: 0 0 40px rgba(0, 255, 136, 0.2);
}

.quiz-header {
  text-align: center;
  margin-bottom: 30px;
}

.quiz-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #fff;
}

.progress-bar {
  height: 4px;
  background: #222;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 8px;
}

.progress-fill {
  height: 100%;
  background: #00ff88;
  transition: width 0.3s ease;
  border-radius: 4px;
}

.question-counter {
  font-size: 0.8rem;
  color: #888;
}

.question-text {
  font-size: 1.3rem;
  text-align: center;
  margin-bottom: 30px;
  color: #fff;
}

.options-grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 60px;
  padding: 14px 20px;
  font-size: 0.95rem;
  color: #e0e0e0;
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 12px;
}

.option-marker {
  width: 28px;
  height: 28px;
  background: #00ff88;
  color: #0a0a0a;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.8rem;
  flex-shrink: 0;
}

.option-btn:hover {
  border-color: #00ff88;
  transform: translateX(8px);
  background: rgba(0, 255, 136, 0.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@media (max-width: 600px) {
  .quiz-container {
    padding: 24px;
  }

  .question-text {
    font-size: 1.1rem;
  }

  .option-btn {
    padding: 12px 16px;
    font-size: 0.85rem;
  }
}
</style>
