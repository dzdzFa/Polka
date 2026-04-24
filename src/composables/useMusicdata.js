import { ref, copmputed } from "vue";

const tracks = ref([
  {
    id: 1,
    title: "Danza Kuduro",
    artist: "Lucenzo, Don Omar",
    vibe: "cheerful",
    cover: "",
    duration: "3:19",
    desc: "Бодрая песня для олдов",
  },
  {
    id: 2,
    title: "Все для тебя",
    artist: "Стас Михайлов",
    vibe: "funny",
    cover: "",
    duration: "3:54",
    desc: "Веселая и топовая песня Стаса",
  },
  {
    id: 3,
    title: "The Town",
    artist: "The Weeknd",
    vibe: "calm",
    cover: "",
    duration: "5:07",
    desc: "Для настоящик ценителей поп культуры",
  },
  {
    id: 4,
    title: "Глаза не врут",
    artist: "Кореш",
    vibe: "sad",
    cover: "",
    duration: "1:50",
    desc: "Просто легенда",
  },
]);

const vibes = ref([
  { id: "all", lable: "Все" },
  { id: "cheerful", lable: "Бодрое" },
  { id: "funny", lable: "Веселое" },
  { id: "calm", lable: "Спокойное" },
  { id: "sad", lable: "Грустное" },
]);

const currentvibe = ref("all");

const filteredTracks = computed(() => {
  if (currentvibe.value === "all") return tracks.value;
  return tracks.value.filter((track) => track.vibe === currentvibe.value);
});

const setvibe = (vibeId) => {
  currentvibe.value = vibeId;
};

const gettrackbuid = (id) => {
  return tracks.value.find((track) => track.id === Number(id));
};

export function useMusicdata() {
  return { tracks, vibes, currentvibe, filteredTracks, setvibe, gettrackbuid };
}
