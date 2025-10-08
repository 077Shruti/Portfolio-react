import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_65ot9vs",
        "template_10ej6r6",
        form.current,
        "N84isuwQyFGUhEb6b"
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Error sending message. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <Parallax speed={-10}>
      <section id="contact" className="bg-gray-50">
        <div className="bg-gray-900 text-center py-10 text-white rounded-b-3xl">
          <h2 className="text-4xl font-bold mb-3">Contact Me</h2>
          <p className="max-w-2xl mx-auto text-gray-300">
            Feel free to contact me by phone or email. I’d love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white p-6 shadow-md rounded-lg">
            <input
              type="text"
              name="from_name"
              placeholder="First Name"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Type your message here..."
              required
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>

            <button
              type="submit"
              className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
            >
              SEND
            </button>
          </form>

          {/* Right side: Map */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">WHERE TO FIND ME</h3>
            <div className="w-full h-48 mb-4 overflow-hidden rounded-md shadow">
              <iframe
                title="Krishna Vaas Residential Society"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3548.275342599926!2d77.9307377!3d27.2105038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974778799e847fb%3A0xe728ebc78195df03!2sKrishna%20vaas%20residential%20society!5e0!3m2!1sen!2sin!4v1759856530159!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800">CONTACTS</h4>
              <p className="text-gray-600 text-sm mt-2">📍 Krishna Vaas Residential Society, Agra, UP</p>
              <p className="text-gray-600 text-sm">📧 shrutichauhan0706@gmail.com</p>
              <p className="text-gray-600 text-sm">📞 +91 95574 374**</p>
            </div>
          </div>
        </div>
      </section>
    </Parallax>
  );
};

export default Contact;
