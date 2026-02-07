"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setUserInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(serviceID, templateID, userInput, userID);
      toast.success("Заявка залишена успішно!");
      setUserInput({ name: "", contact: "", message: "" });
    } catch (err) {
      toast.error("Виникла помилка під час відправлення!");
      console.error(err);
    }
  };

  return (
    <div className="container mt-[5rem] mx-auto flex justify-center flex-col" id="form">
      <div className="text-center pb-4">
        <h2 className="font-bold text-2xl md:text-3xl">
          Не знаєте з чого почати?
        </h2>
        <p className="font-medium text-xl py-4">
          Залиште заявку, і ми напишемо або зателефонуємо?
        </p>
      </div>
      <div className="mx-4 flex align-start">
        <form onSubmit={handleSubmit} className="md:min-w-[24rem] mx-auto">
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-sm text-heading"
          >
            Ваше Ім&apos;я
          </label>
          <input
            name="name"
            className="bg-neutral-secondary-medium w-full border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full py-2 px-3 shadow-xs placeholder:text-body"
            placeholder="Ім'я"
            required
            value={userInput.name}
            onChange={handleChange}
          />

          <label
            htmlFor="contact"
            className="block mt-3 mb-1 font-semibold text-sm text-heading"
          >
            Як з Вами зв&apos;язатися?
          </label>
          <input
            name="contact"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full py-2 px-3 shadow-xs placeholder:text-body"
            placeholder="Електронна пошта чи телефон"
            required
            value={userInput.contact}
            onChange={handleChange}
          />
          <label
            htmlFor="message"
            className="block mt-3 mb-1 font-semibold text-sm text-heading"
          >
            Ваше побажання, як і коли з вами краще зв&apos;язатися
          </label>
          <textarea
            name="message"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full py-2 px-3 shadow-xs placeholder:text-body"
            placeholder="Ваше повідомлення"
            value={userInput.message}
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 text-white bg-neutral-700 hover:bg-neutral-900 px-4 py-2 rounded"
            >
              Подати заявку
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
