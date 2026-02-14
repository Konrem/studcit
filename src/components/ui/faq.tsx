"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  BoltIcon,
  LightBulbIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  const items = [
    {
      id: "faq-html",
      icon: "/technologies/html5.svg",
      title: "HTML — основа логіки та структури сайту",
      content:
        "HTML відповідає за структуру сайту: тексти, заголовки, кнопки, зображення та форми. Це фундамент, на якому будується весь веб-проєкт.\n\nМи працюємо з сучасними стандартами HTML, дотримуємося семантики та правил доступності. Такий підхід робить сайт зрозумілим для користувачів, пошукових систем і допоміжних технологій.\n\nЦе дозволяє підвищити SEO, пришвидшити завантаження сторінок і без проблем масштабувати проєкт у майбутньому.",
    },
    {
      id: "faq-css",
      icon: "/technologies/css3.svg",
      title: "CSS — сучасний дизайн та адаптивність",
      content:
        "CSS відповідає за зовнішній вигляд сайту: кольори, шрифти, анімації та адаптацію під різні екрани.\n\nМи використовуємо сучасні CSS-підходи, utility-first фреймворки та дизайн-системи. Це дозволяє створювати чистий, акуратний і масштабований інтерфейс.\n\nУ результаті сайт коректно працює на всіх пристроях, виглядає актуально та легко підтримується без хаотичних правок.",
    },
    {
      id: "faq-js",
      icon: "/technologies/js.svg",
      title: "JavaScript — інтерактивність і динаміка",
      content:
        "JavaScript відповідає за поведінку сайту: меню, форми, анімації, фільтрацію контенту та швидку реакцію на дії користувача.\n\nМи працюємо з сучасним JavaScript та популярними бібліотеками, що дозволяє створювати швидкі та зручні інтерфейси без зайвих перезавантажень.\n\nЗавдяки цьому сайт виглядає як повноцінний веб-додаток і готовий до розширення нового функціоналу.",
    },
    {
      id: "faq-laravel",
      icon: "/technologies/laravel.svg",
      title: "Laravel — надійна серверна частина",
      content:
        "Laravel відповідає за серверну логіку: обробку заявок, роботу з базою даних, авторизацію, безпеку та інтеграції.\n\nМи використовуємо Laravel як сучасний фреймворк, який відповідає актуальним стандартам веб-розробки та активно розвивається.\n\nЦе дозволяє створювати стабільні, захищені та масштабовані рішення, готові до реального навантаження.",
    },
  ];

  return (
    <div className="container mx-auto mt-[5rem] px-4">
      {items.map((item) => {
        return (
          <div
            key={item.id}
            id={item.id}
            className={`rounded-xl my-4 overflow-hidden border-2 transition-all duration-300 scroll-mt-20 ${
              open === item.id
                ? "scale-[1.01] border-[var(--bg-main)] bg-[var(--text-primary)]/[0.9]"
                : "bg-[var(--bg-main)] border-[var(--text-primary)]"
            }`}
          >
            <button
              onClick={() => setOpen(open === item.id ? null : item.id)}
              className="w-full px-2 py-4 sm:p-6 flex justify-between items-center"
            >
              <div className="flex items-center gap-2 md:gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--bg-main)] md:border-2 border-[var(--text-primary)] md:backdrop-blur-md mdshadow-inner flex items-center justify-center">
                  <Image src={item.icon} alt="" width={25} height={25} />
                </div>
                <h3
                  className={`text-base md:text-xl font-semibold ${
                    open === item.id
                      ? "text-[var(--bg-main)]"
                      : "text-[var(--text-primary)]"
                  }
                 `}
                >
                  {item.title}
                </h3>
              </div>
              <ChevronDownIcon
                className={`w-6 h-6 transition-transform duration-300 ${open === item.id ? "rotate-180 text-[var(--bg-main)]" : "text-[var(--text-primary)]"}`}
              />
            </button>
            {open === item.id && (
              <div className="p-6 border-t backdrop-blur-3xl animate-[slideDown_0.4s_ease-out] bg-[var(--text-primary)]">
                <p className="text-[var(--bg-main)] leading-relaxed">
                  {item.content}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
