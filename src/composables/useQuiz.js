import { ref, computed } from "vue";

const questions = [
  {
    id: 1,
    text: "Как бы вы описали свое текущее эмоциональное состояние?",
    options: [
      { text: "Бодрое и активное", vibe: "cheerful" },
      { text: "Веселое и игривое", vibe: "funny" },
      { text: "Спокойное и ровное", vibe: "calm" },
      { text: "Усталое или сонное", vibe: "sad" },
      { text: "Подавленное", vibe: "sad" },
    ],
  },
  {
    id: 2,
    text: "Что вам сейчас больше всего хочется сделать?",
    options: [
      { text: "Заняться чем-то активным или творческим", vibe: "cheerful" },
      { text: "Посмотреть видео или послушать музыку", vibe: "calm" },
      { text: "Просто полежать и отдохнуть", vibe: "sad" },
      { text: "Остаться в тишине и побыть одному(ой)", vibe: "calm" },
      { text: "Повеселиться с друзьями", vibe: "funny" },
    ],
  },
  {
    id: 3,
    text: "Если бы нужно было оценить настроение по шкале от 1 до 5, где 5 — отлично, а 1 — очень плохо, что бы вы выбрали?",
    options: [
      { text: "5 — всё прекрасно", vibe: "cheerful" },
      { text: "4 — скорее хорошо, чем плохо", vibe: "cheerful" },
      { text: "3 — средне, ничего особенного", vibe: "calm" },
      { text: "2 или 1 — сегодня тяжелый день", vibe: "sad" },
    ],
  },
  {
    id: 3,
    text: "Какая погода больше всего похожа на ваше настроение прямо сейчас?",
    options: [
      { text: "Солнечная и ясная", vibe: "cheerful" },
      { text: "Переменная облачность, без осадков", vibe: "calm" },
      { text: "Пасмурно, но тихо", vibe: "sad" },
      { text: "Дождь или сильный ветер", vibe: "sad" },
      { text: "Радуга после дождя", vibe: "funny" },
    ],
  },
];

export function useQuzi() {
  const currentQuestionIndex = ref(0);
  const answers = ref([]);
  const isCompleted = ref(false);
  const currentQuestion = computed(() => {
    return questions[currentQuestionIndex.value];
  });
  const progress = computed(() => {
    return ((currentQuestionIndex.value + 1) / questions.length) * 100;
  });

  const saveAnswer = (vibe) => {
    answers.value.push(vibe);

    if (currentQuestionIndex.value + 1 < questions.length) {
      currentQuestionIndex.value++;
    } else {
      isCompleted.value = true;
    }
  };

  const resetQuzi = () => {
    currentQuestionIndex.value = 0;
    answers.value = [];
    isCompleted.value = false;
  };

  const getResultVibe = () => {
    const counts = {
      cheerful: 0,
      calm: 0,
      sad: 0,
      funny: 0,
    };

    answers.value.forEach((vibe) => {
      counts[vibe]++;
    });

    let maxVibe = "cheerful";
    let maxCount = 0;

    for (const [vibe, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        maxVibe = vibe;
      }
    }
    return maxVibe;
  };

  return {
    questions,
    currentQuestion,
    currentQuestionIndex,
    answers,
    isCompleted,
    progress,
    saveAnswer,
    resetQuzi,
    getResultVibe,
  };
}
