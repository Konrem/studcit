"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import formText from "@/app/content/formText";

export default function ContactForm() {
  const {
    title,
    description,
    nameInput,
    namePlaceholder,
    emailInput,
    emailPlaceholder,
    messageInput,
    messagePlaceholder,
    submitButton,
    submit,
    introLabel,
    benefits,
  } = formText;

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
      if (new FormData(e.currentTarget).get("phone") !== "") {
        throw new Error(submit.error);
      }
      await emailjs.send(serviceID, templateID, userInput, userID);
      toast.success(submit.success, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setUserInput({ name: "", contact: "", message: "" });
    } catch (err) {
      toast.error(submit.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      console.error(err);
    }
  };

  return (
    <div
      className="container mx-auto mt-12 scroll-mt-24 px-4 md:mt-20"
      id="contact"
    >
      <section className="grid overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="bg-[var(--accent-soft)] p-6 sm:p-9 lg:p-10">
          <p className="mb-2 text-sm font-bold text-[var(--accent-text)]">{introLabel}</p>
          <h2 className="text-2xl font-bold leading-tight text-[var(--text-primary)] sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
            {description}
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[var(--text-secondary)]">
            {benefits.map((item) => (
              <li className="flex items-start gap-2" key={item}>
                <span
                  className="font-bold text-[var(--accent-text)]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 sm:p-9 lg:p-10">
        <form
          id="form"
          onSubmit={handleSubmit}
          className="relative mx-auto max-w-2xl scroll-mt-24"
        >
          <label className="absolute -z-10 h-0" htmlFor="phone" aria-hidden="true">
            <input
              id="phone"
              name="phone"
              className="absolute -z-10 h-0"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-sm font-semibold text-[var(--text-primary)]"
              >
                {nameInput}
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                className="block w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2.5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                placeholder={namePlaceholder}
                maxLength={30}
                required
                value={userInput.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="contact"
                className="mb-1 block text-sm font-semibold text-[var(--text-primary)]"
              >
                {emailInput}
              </label>
              <input
                id="contact"
                name="contact"
                autoComplete="email"
                className="block w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2.5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                placeholder={emailPlaceholder}
                maxLength={40}
                required
                value={userInput.contact}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor="message"
              className="mb-1 block text-sm font-semibold text-[var(--text-primary)]"
            >
              {messageInput}
            </label>
            <textarea
              id="message"
              name="message"
              className="block min-h-28 w-full rounded-lg border border-[var(--border-strong)] bg-[var(--surface)] px-3 py-2.5 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
              placeholder={messagePlaceholder}
              maxLength={200}
              value={userInput.message}
              onChange={handleChange}
            />
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-[var(--text-on-accent)] transition-colors hover:bg-[var(--accent-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              {submitButton}
            </button>
          </div>
        </form>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
}
