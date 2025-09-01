import React from "react";

const testimonials = [
  {
    name: "Laura G.",
    quote:
      "SpyDishTest helped me find amazing dishes around my area. The WhatsApp chat is so easy and fast!"
  },
  {
    name: "Chef Antonio",
    quote:
      "Our restaurant leveraged the competitor pricing tool to stay ahead. Revenue grew by fifteen percent."
  },
  {
    name: "Marketing Lead Sarah",
    quote:
      "The AI campaigns boosted our diner engagement. We love the weekly reports highlighting trends."
  }
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-brandAccent">
        What People Are Saying
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <blockquote
            key={t.name}
            className="rounded-lg bg-white p-6 shadow-md transition hover:shadow-lg"
          >
            <p className="mb-4 italic text-gray-700">“{t.quote}”</p>
            <footer className="text-right font-semibold">{t.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
