import React, { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-brandPrimary/5 py-16">
      <div className="mx-auto max-w-lg px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-brandPrimary">
          Get in Touch
        </h2>
        {submitted ? (
          <p className="rounded-lg bg-white p-6 text-center shadow-lg">
            Thanks for reaching out. We will contact you soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-lg bg-white p-6 shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-md border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-2 w-full rounded-md border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-brandAccent px-4 py-2 font-semibold text-white transition hover:bg-brandPrimary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brandAccent/50"
            >
              Send Message
            </button>
            <p className="text-center text-sm text-gray-500">
              Or email us directly at{" "}
              <a
                href="mailto:dasdas@gmail.com"
                className="font-medium text-brandPrimary underline"
              >
                dasdas@gmail.com
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
