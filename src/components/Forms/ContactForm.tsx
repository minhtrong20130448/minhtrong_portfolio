"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
const handler = "@@handler@@";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    const res = await fetch("/../api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      toast.success("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row lg:max-w-[1400px] gap-4 text-[20px] m-4w-full justify-center m-4">
        <div className="flex flex-col gap-4">
          <div>Looking forward to connecting with you!</div>
          <div className="flex items-center mt-2 gap-2">
            <div className="bg-blue-700 w-7 h-7 rounded-lg mr-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faPhone} className="text-white" />
            </div>
            <span className="font-bold">Phone:</span> <span>0336961200</span>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <div className="bg-blue-700 w-7 h-7 rounded-lg mr-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faEnvelope} className="text-white" />
            </div>
            <span className="font-bold">E-mail: </span>
            <span>minhtrongvtctp@gmail.com</span>
          </div>
          <div className="flex items-center mt-2 gap-2">
            <div className="bg-blue-700 w-7 h-7 rounded-lg mr-2 flex items-center justify-center">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
            </div>
            <span className="font-bold">Address: </span>
            <span>Thu Duc, Ho Chi Minh City</span>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name"
              required
              className="border border-gray-400 p-2 rounded-lg w-full"
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              required
              className="border border-gray-400 p-2 rounded-lg w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <textarea
            value={message}
            name="message"
            placeholder="Message"
            required
            className="border border-gray-400 p-2 rounded-lg w-full mt-4  h-[130px]"
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className="bg-blue-700 w-[140px] p-2 text-white rounded-lg text-[16px] mt-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
