import React from "react";

const features = [
  {
    title: "Explore Restaurants",
    description: "Discover places based on cuisine, budget and location.",
    icon: "🍽️"
  },
  {
    title: "Discover Dishes",
    description: "See featured menus and must-try plates nearby.",
    icon: "🍲"
  },
  {
    title: "Read Reviews",
    description:
      "Access ratings and popularity analysis to make informed choices.",
    icon: "⭐"
  }
];

export default function Diners() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="mb-12 text-center text-3xl font-bold text-brandAccent animate-fadeUp">
        For Diners
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-lg bg-white p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-4 text-4xl">{f.icon}</div>
            <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
            <p className="text-gray-600">{f.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col items-center justify-center">
        <img
          src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg"
          alt="Chat interface sample"
          className="w-full max-w-3xl rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}
