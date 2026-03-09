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
  } = formText;

  const [userInput, setUserInput] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [hiddenValue] = useState("");

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
      className="container mt-[3rem] md:mt-[5rem] mx-auto flex justify-center flex-col scroll-mt-20"
      id="form"
    >
      <div className="text-center pb-4">
        <h2 className="font-bold text-3xl mb-4">{title}</h2>
        <p className="font-medium text-xl my-2 text-balance mx-2">
          {description}
        </p>
      </div>
      <div className="mx-4 flex align-start">
        <form
          onSubmit={handleSubmit}
          className="md:min-w-[28rem] mx-auto relative"
        >
          <label className="h-0 absolute -z-10" htmlFor="phone">
            <input
              name="phone"
              className="h-0 absolute -z-10"
              tabIndex={-1}
              value={hiddenValue}
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="name"
            className="block mb-1 font-semibold text-base text-heading"
          >
            {nameInput}
          </label>
          <input
            name="name"
            className="w-full text-[var(--text-secondary)] border border-default-medium border-neutral-400 bg-white text-heading text-base rounded focus:ring-brand focus:border-brand block w-full py-2 px-3 placeholder:text-body"
            placeholder={namePlaceholder}
            maxLength={30}
            required
            value={userInput.name}
            onChange={handleChange}
          />
          <label
            htmlFor="contact"
            className="block mt-3 mb-1 font-semibold text-base text-heading"
          >
            {emailInput}
          </label>
          <input
            name="contact"
            className="border text-[var(--text-secondary)] border-default-medium border-neutral-400 bg-white text-heading text-base rounded focus:ring-brand focus:border-brand block w-full py-2 px-3 placeholder:text-body"
            placeholder={emailPlaceholder}
            maxLength={40}
            required
            value={userInput.contact}
            onChange={handleChange}
          />
          <label
            htmlFor="message"
            className="block mt-3 mb-1 font-semibold text-base text-heading"
          >
            {messageInput}
          </label>
          <textarea
            name="message"
            className="border text-[var(--text-secondary)] border-default-medium border-neutral-400 bg-white text-heading text-base rounded focus:ring-brand focus:border-brand block w-full py-2 px-3 placeholder:text-body"
            placeholder={messagePlaceholder}
            maxLength={200}
            value={userInput.message}
            onChange={handleChange}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="mt-5 cursor-pointer relative rounded group overflow-hidden border-2 px-8 py-2 border-orange-600"
            >
              <span className="font-bold text-white text-xl relative z-10 group-hover:text-orange-500 duration-500">
                {submitButton}
              </span>
              <span className="absolute top-0 left-0 w-full bg-orange-600 duration-500 group-hover:-translate-x-full h-full"></span>
              <span className="absolute top-0 left-0 w-full bg-orange-600 duration-500 group-hover:translate-x-full h-full"></span>

              <span className="absolute top-0 left-0 w-full bg-orange-600 duration-500 delay-300 group-hover:-translate-y-full h-full"></span>
              <span className="absolute delay-300 top-0 left-0 w-full bg-orange-600 duration-500 group-hover:translate-y-full h-full"></span>
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
