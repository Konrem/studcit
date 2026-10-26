const landingContent = {
  header: {
    logoAlt: "Логотип StudCIT",
    menuToggleLabel: "Перемкнути меню навігації",
    themeToggleLabels: {
      light: "Увімкнути темну тему",
      dark: "Увімкнути світлу тему",
    },
    navButtons: [
      {
        title: "Основні аспекти",
        link: "/#main-aspects",
      },
      {
        title: "Про нас",
        link: "/#about",
      },
      {
        title: "Як ми працюємо",
        link: "/#how-we-work",
      },
      {
        title: "Напрями робіт",
        link: "/#projects",
      },
      {
        title: "FAQ",
        link: "/#faq",
      },
    ],
    contactForUs: {
      text: "Зв'язатися з нами",
      link: "#form",
    },
  },

  main: {
    upperTitle: "Веброзробка для бізнесу та освіти",
    title: "Розробляємо сайти, що працюють на ваш успіх",
    description: "Створюємо сучасні, адаптивні та зручні сайти — від лаконічних сторінок до багатофункціональних вебзастосунків. Допомагаємо перетворити вашу ідею на цифровий продукт.",
    contactAction: "Обговорити проєкт",
    projectsAction: "Напрями робіт",
    technologiesLabel: "Стек технологій",
    technologies: [
      {
        icon: "/technologies/js.svg",
        title: "JavaScript",
      },
      {
        icon: "/technologies/react.svg",
        title: "React",
      },
      {
        icon: "/technologies/php.svg",
        title: "PHP",
      },
      {
        icon: "/technologies/laravel.svg",
        title: "Laravel",
      },
      {
        icon: "/technologies/figma.svg",
        title: "Figma",
      },
    ],
    stats: [
      {
        value: "25+",
        label: "Завершених проєктів",
        icon: "/stats/projects.svg",
      },
      {
        value: "3+",
        label: "Роки досвіду",
        icon: "/stats/experience.svg",
      },
      {
        value: "100%",
        label: "Задоволених клієнтів",
        icon: "/stats/satisfaction.svg",
      },
      {
        value: "До 1 року",
        label: "Підтримка проєкту після релізу",
        icon: "/stats/post-release-support.svg",
      },
    ],
  },

  info: {
    title: "Основні аспекти",
    anchor: "main-aspects",
    infoCards: [
      {
        image: "/business-working.webp",
        title: "Індивідуальний підхід",
        description:
          "Спершу з'ясовуємо цілі проєкту й потреби аудиторії, а тоді підбираємо структуру та функціонал. Так сайт працює на конкретні завдання вашого бізнесу.",
      },
      {
        image: "/people-working.webp",
        title: "Роль програмного забезпечення",
        description:
          "Вебзастосунки допомагають автоматизувати процеси, об'єднати сервіси та спростити взаємодію з клієнтами. Обираємо інструменти відповідно до потреб майбутніх користувачів.",
      },
      {
        image: "/concentrated-office.webp",
        title: "Підхід до веброзробки",
        description:
          "Плануємо структуру, створюємо зручний інтерфейс і перевіряємо основні сценарії. Результат має бути зрозумілим, адаптивним і відповідати погодженим вимогам.",
      },
    ],
  },
  cards: {
    title: "СтудЦІТ — це",
    description:
      "Команда, у якій поєднуються навчання, професійний розвиток і практична робота:",
    anchor: "about",
    cardsWork: [
      {
        icon: "/cards/star.svg",
        title: "Талановиті фахівці",
        subtitle: "Досвідчена команда професіоналів",
      },
      {
        icon: "/cards/trending.svg",
        title: "Постійний розвиток",
        subtitle: "Постійно вдосконалюємо свої навички",
      },
      {
        icon: "/cards/mind.svg",
        title: "Індивідуальний підхід",
        subtitle: "Враховуємо особливості і потреби клієнта",
      },
      {
        icon: "/cards/lightbulb.svg",
        title: "Креативні рішення",
        subtitle: "Знаходимо нестандартні підходи",
      },
      {
        icon: "/cards/warranty.svg",
        title: "Гарантія якісної роботи",
        subtitle: "Ретельно тестуємо кожний проєкт",
      },
    ],
  },

  timeline: {
    title: "Як ми працюємо",
    subtitle: "Зрозумілі етапи від першої ідеї до запуску",
    anchor: "how-we-work",
    timelineBlocks: [
      {
        title: "Аналіз",
        description:
          "Визначаємо цілі проєкту, цільову аудиторію та ключові завдання. Аналізуємо вимоги, контент і технічні обмеження, щоб сформувати чітке бачення майбутнього сайту.",
      },
      {
        title: "Проєктування",
        description:
          "Створюємо структуру сайту, продумуємо логіку навігації та взаємодію користувача з інтерфейсом. Формуємо прототип, який відображає основні сценарії використання.",
      },
      {
        title: "Дизайн",
        description:
          "Розробляємо візуальний стиль, підбираємо кольори, шрифти та компоненти інтерфейсу. Дизайн узгоджується з цілями проєкту та підкреслює його характер.",
      },
      {
        title: "Веброзробка",
        description:
          "Реалізуємо дизайн у коді, налаштовуємо адаптивність, інтегруємо необхідний функціонал та сервіси. Забезпечуємо коректну роботу на різних пристроях.",
      },
      {
        title: "Запуск",
        description:
          "Перевіряємо сайт, оптимізуємо швидкість та публікуємо проєкт. Після запуску можливі доопрацювання та подальший розвиток ресурсу.",
      },
    ],
  },
  faq: {
    title: "FAQ: Часті запитання",
    faqItems: [
      {
        id: "faq-html",
        icon: "/faq/project-type.svg",
        title: "Який сайт підійде саме моєму проєкту?",
        content:
          "Залежить від цілей і завдань: це може бути лендінг, корпоративний сайт, магазин або вебзастосунок. На першій зустрічі обговоримо потреби й запропонуємо відповідний формат.",
      },
      {
        id: "faq-css",
        icon: "/faq/responsive.svg",
        title: "Чи буде сайт зручним на телефоні?",
        content:
          "Так, адаптивність враховуємо під час розробки: сторінки мають коректно відображатися на смартфонах, планшетах і комп'ютерах.",
      },
      {
        id: "faq-js",
        icon: "/faq/timeline.svg",
        title: "Скільки часу займає створення сайту?",
        content:
          "Терміни залежать від обсягу робіт і складності функціоналу. Після обговорення завдань узгодимо етапи та орієнтовний графік.",
      },
      {
        id: "faq-laravel",
        icon: "/faq/getting-started.svg",
        title: "Що потрібно підготувати для початку?",
        content:
          "Достатньо коротко описати ідею та мету сайту. Якщо вже є тексти, фірмовий стиль або приклади, які вам подобаються, вони допоможуть точніше визначити напрям.",
      },
      {
        id: "payment",
        icon: "/faq/pricing.svg",
        title: "Як формується вартість проєкту?",
        content:
          "Розрахунок залежить від структури, функціоналу та обсягу робіт. Після уточнення вимог підготуємо оцінку й погодимо її до початку розробки.",
      },
      {
        id: "time-work",
        icon: "/faq/support.svg",
        title: "Чи можна буде оновлювати сайт після запуску?",
        content:
          "Так. Можна передбачити самостійне оновлення контенту або звертатися до команди по допомогу з подальшими змінами та підтримкою.",
      },
    ],
  },

  footer: {
    homeLinkLabel: "StudCIT — на початок сторінки",
    logoAlt: "Логотип StudCIT",
    description: "Студентський центр інформаційних технологій",
    contactsTitle: "Контакти",
    mapTitle: "Ми на мапі",
    mapAttribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    copyright: "СтудЦІТ. Усі права захищено.",
    contactMain: [
      // {
      //   contact: "+38(0XX) XXX-XX-XX",
      //   icon: "/social/telephone.svg",
      //   link: "tel:",
      // },
      {
        contact: "studcit.test@gmail.com",
        icon: "/social/email.svg",
        link: "mailto:",
      },
    ],
    address: {
      street: "Україна, м. Суми, вул. Харківська, 116",
      place: "Сумський державний університет, Центральний корпус, каб. Ц-239",
      placeDetails: "2 поверх, каб. Ц-239",
      markerAlt: "Позначка на мапі",
      position: {
        y: 50.89242,
        x: 34.84127,
      },
    },
    socials: [
      {
        icon: "/social/telegram.svg",
        title: "Telegram",
        link: "https://t.me/artemC239",
        hover: "bg-blue-400",
      },
      {
        icon: "/social/github.svg",
        title: "GitHub",
        link: "https://github.com/stud-cit",
        hover: "bg-white",
      },
      // {
      //   icon: "/social/whatsapp.svg",
      //   title: "Whatsapp",
      //   link: "#",
      //   hover: "bg-green-400",
      // },

      // {
      //   icon: "/social/facebook.svg",
      //   title: "Facebook",
      //   link: "#",
      //   hover: "bg-blue-500",
      // },
      // {
      //   icon: "/social/viber.svg",
      //   title: "Viber",
      //   link: "#",
      //   hover: "bg-fuchsia-700",
      // },
      // {
      //   icon: "/social/linkedin.svg",
      //   title: "LinkedIn",
      //   link: "#",
      //   hover: "bg-[#006699]",
      // },
      // {
      //   icon: "/social/instagram.svg",
      //   title: "Instagram",
      //   link: "#",
      //   hover: "bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500",
      // },
      // {
      //   icon: "/social/youtube.svg",
      //   title: "Youtube",
      //   link: "#",
      //   hover: "bg-[#FF3000]",
      // },
    ],
  },
};

export default landingContent;
