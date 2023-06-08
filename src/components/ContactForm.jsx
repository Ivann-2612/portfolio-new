"use client";
import React, { useRef, useState } from "react";
import { useTheme } from "@nextui-org/react";
import emailjs from "@emailjs/browser";

const SERVICE = process.env.NEXT_PUBLIC_EMAILJS_SERVICE;
const TEMPLATE = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE;
const KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY;

export const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const form = useRef();
  const nameInput = useRef();
  const emailInput = useRef();
  const messageInput = useRef();
  const { isDark } = useTheme();
  const sendEmail = (e) => {
    e.preventDefault();

    // Check if form inputs are empty
    if (
      !nameInput.current.value ||
      !emailInput.current.value ||
      !messageInput.current.value
    ) {
      setError("Please fill out all fields.");
      return;
    }

    emailjs.sendForm(SERVICE, TEMPLATE, form.current, KEY).then(
      (result) => {
        nameInput.current.value = "";
        emailInput.current.value = "";
        messageInput.current.value = "";
        setMessage("Message sent");
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div
      className={`container w-full mx-auto flex items-center flex-col justify-center p-6 ${
        isDark ? "contact-form-div" : "contact-form-div-light"
      }`}
    >
      <div className="main">
        <h1 className="heading_2">Get In Touch</h1>
        <h6
          className="desc"
          style={{ color: "black !important", fontSize: "16px" }}
        >
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </h6>

        <form
          className="form flex w-full items-center flex-col justify-center"
          ref={form}
          onSubmit={sendEmail}
        >
          <label className="label">Name</label>
          <input
            className="input"
            type="text"
            name="user_name"
            ref={nameInput}
          />
          <label>Email</label>
          <input
            className="input text-left"
            type="email"
            name="user_email"
            ref={emailInput}
          />
          <label>Message</label>
          <textarea className="textarea" name="message" ref={messageInput} />
          <button className="my_button" type="submit">
            SEND
          </button>

          {message ? (
            <h4 className="message">{message}</h4>
          ) : (
            <h4 className="error">{error}</h4>
          )}
        </form>
      </div>
    </div>
  );
};
