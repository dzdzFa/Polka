import { ref } from "vue";

const quizCompleted = ref(false);
const selectedTrack = ref(null);

export function useQuizState() {
    const isQuizCompleted = () => quizCompleted.value
    const completeQuiz = () => {quizCompleted.value = true}
    const resetQuizComplete = () => {quizCompleted.value = false}

    const getSelectedTrack = () => selectedTrack.value
    const setSelectedTrack = (track) => {selectedTrack.value = track}

    return {
        isQuizCompleted,
        completeQuiz,
        resetQuizComplete,
        getSelectedTrack,
        setSelectedTrack
    }
}