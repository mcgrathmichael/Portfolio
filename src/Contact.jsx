import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

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
    <div id="contact" className="p-7 flex justify-center">
      <div className="w-1/2">
        <h1 className="text-grey underline text-2xl md:text-6xl p-20 flex justify-center">
          CONTACT
        </h1>
        <form className="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              placeholder="Your Name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              placeholder="Your Email"
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required></textarea>
          </div>
          <button className=" hover:ring-2 p-3 hover:ease-in-out hover:ring-green ring-offset-1 opacity-75 overflow-hidden px-8 rounded-2xl bg-gradient-to-t from-pink to-purple">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
