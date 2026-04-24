import { computed } from "vue";
import { useLocalStorage } from "@vueuse/core";
import { useMusicData } from "./useMusicData.js";

export function useMyTape() {
  const savedIds = useLocalStorage("mood-tape-saved", []);
  const { tracks } = useMusicData();
  const savedTracks = computed(() => {
    return tracks.value.filter((track) => savedIds.value.includes(track.id));
  });

  const addToTape = (id) => {
    if (!savedIds.value.includes(id)) {
      savedIds.value.push(id);
    }
  };

  const removeFromTape = (id) => {
    savedIds.value = savedIds.value.filter((savedId) => savedId !== id);
  };

  const isInTape = (id) => {
    return savedIds.value.includes(id);
  };

  return { savedTracks, addToTape, removeFromTape, isInTape };
}
