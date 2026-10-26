const laptopContent = {
  title: "Прозорий процес",
  subtitle: "Зразок роботи над проєктом",
  stages: [
    { title: "Аналіз завдання", state: "done" },
    { title: "Дизайн і план", state: "current" },
    { title: "Розробка", state: "upcoming" },
    { title: "Тестування й запуск", state: "upcoming" },
  ],
  states: {
    done: "Готово",
    current: "Зараз",
    upcoming: "Далі",
  },
} as const;

export default laptopContent;
