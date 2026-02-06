"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
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
      toast.success("Message sent successfully!");
      setUserInput({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error("Failed to send message");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label
        htmlFor="first_name"
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        First name
      </label>
      <input
        name="first_name"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder="Name"
        required
        value={userInput.name}
        onChange={handleChange}
      />

      <label
        htmlFor="email"
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        Email address
      </label>
      <input
        name="email"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
        placeholder="email@company.com"
        required
        value={userInput.email}
        onChange={handleChange}
      />
      <label
        htmlFor="message"
        className="block mb-2.5 text-sm font-medium text-heading"
      >
        Your message
      </label>
      <textarea
        name="message"
        className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full p-3.5 shadow-xs placeholder:text-body"
        placeholder="Your text"
        value={userInput.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="text-white bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </form>
  );
}
