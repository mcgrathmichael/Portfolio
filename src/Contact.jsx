import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        "service_iwfsjdr",
        "template_3dtyuac",
        templateParams,
        "JcI5fC1WpJuz1BV3O"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );

    // Handle form submission logic here, such as sending an email
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Reset form fields
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="md:p-7 flex justify-center text-grey">
      <div className="md:w-1/2">
        <h1 className="text-grey decoration-pink underline text-2xl md:text-6xl p-20 flex justify-center">
          CONTACT
        </h1>
        <form id="contact" ref={form} className="" onSubmit={sendEmail}>
          <div className="mb-4">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-purple border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Your Email"
              type="email"
              name="from_email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-purple border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4 flex">
            <textarea
              placeholder="Your Message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-grey h-32 md:h-64 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required></textarea>
          </div>
          <div className="flex  justify-center">
            <button className="lg:w-1/2 text-dark hover:ring-2 p-3 hover:ease-in-out hover:ring-green ring-offset-1 opacity-75 overflow-hidden px-8 rounded-2xl bg-gradient-to-t from-pink to-purple">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
