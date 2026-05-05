import { ref, computed } from "vue";

const tracks = ref([
  {
    id: 1,
    title: "Danza Kuduro",
    artist: "Lucenzo, Don Omar",
    vibe: "cheerful",
    cover: "/Denza.jpg",
    duration: "3:19",
    desc: "Бодрая песня для олдов",
    yandexUrl:
      "https://music.yandex.ru/album/11345535/track/1706563?utm_source=desktop&utm_medium=copy_link",
  },
  {
    id: 2,
    title: "Все для тебя",
    artist: "Стас Михайлов",
    vibe: "funny",
    cover: "/VseDljTebj.jpg",
    duration: "3:54",
    desc: "Веселая и топовая песня Стаса",
    yandexUrl:
      "https://music.yandex.ru/album/3879428/track/31920859?utm_source=desktop&utm_medium=copy_link",
  },
  {
    id: 3,
    title: "The Town",
    artist: "The Weeknd",
    vibe: "calm",
    cover: "/Thetown.jpg",
    duration: "5:07",
    desc: "Для настоящик ценителей поп культуры",
    yandexUrl:
      "https://music.yandex.ru/album/4418453/track/14478943?utm_source=desktop&utm_medium=copy_link",
  },
  {
    id: 4,
    title: "Глаза не врут",
    artist: "Кореш",
    vibe: "sad",
    cover: "/eysenotlaying.jpg",
    duration: "1:50",
    desc: "Просто легенда",
    yandexUrl:
      "https://music.yandex.ru/album/22581464/track/104735373?utm_source=desktop&utm_medium=copy_link",
  },
]);

const vibes = ref([
  { id: "all", label: "Все" },
  { id: "cheerful", label: "Бодрое" },
  { id: "funny", label: "Веселое" },
  { id: "calm", label: "Спокойное" },
  { id: "sad", label: "Грустное" },
]);

const currentVibe = ref("all");

const filteredTracks = computed(() => {
  if (currentVibe.value === "all") return tracks.value;
  return tracks.value.filter((track) => track.vibe === currentVibe.value);
});

const setVibe = (vibeId) => {
  currentVibe.value = vibeId;
};

const getTrackById = (id) => {
  return tracks.value.find((track) => track.id === Number(id));
};

export function useMusicData() {
  return { tracks, vibes, currentVibe, filteredTracks, setVibe, getTrackById };
}
