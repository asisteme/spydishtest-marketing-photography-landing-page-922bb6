import React from "react";

const insights = [
  {
    title: "Competitor Pricing Intelligence",
    desc: "Compare menu prices with local competitors in real-time."
  },
  {
    title: "Dish Ranking &amp; Sentiment",
    desc: "Understand how dishes rank and what customers feel."
  },
  {
    title: "Diner Interest Heatmaps",
    desc: "Spot peak demand times and trending locations."
  },
  {
    title: "AI Powered Campaigns",
    desc: "Optimize promotions and personalized outreach."
  },
  {
    title: "Smart Pricing Adjustments",
    desc: "Dynamic suggestions based on demand and feedback."
  },
  {
    title: "Weekly Executive Reports",
    desc: "Email updates on key trends and competition."
  }
];

export default function Restaurants() {
  return (
    <section className="bg-brandPrimary/5 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-brandPrimary">
          For Restaurants
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {insights.map((i) => (
            <div
              key={i.title}
              className="rounded-lg bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-brandAccent">
                {i.title}
              </h3>
              <p className="text-gray-600">{i.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-lg bg-brandAccent px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-brandPrimary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brandAccent/50"
          >
            Subscribe to Pro Plan
          </a>
        </div>
      </div>
    </section>
  );
}
