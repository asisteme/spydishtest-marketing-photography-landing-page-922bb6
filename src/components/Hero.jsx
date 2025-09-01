import React from "react";

export default function Hero() {
  return (
    <header className="relative overflow-hidden">
      <img
        src="https://images.pexels.com/photos/416471/pexels-photo-416471.jpeg"
        alt="Delicious food backdrop"
        className="absolute inset-0 h-full w-full object-cover brightness-75"
      />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-4 py-24 text-center text-white">
        <img
          src="https://storage.googleapis.com/tapthetable/assets/1406217/inbox/1000860753445699232/logo_spydish.png"
          alt="SpyDishTest logo"
          className="h-20 w-20 mb-6"
        />
        <h1 className="text-4xl font-extrabold sm:text-6xl">
          SpyDishTest
        </h1>
        <p className="mt-4 max-w-2xl text-lg sm:text-xl">
          An innovative WhatsApp bot that connects diners with restaurants
          while optimizing restaurant management.
        </p>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-lg bg-brandPrimary px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-brandAccent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brandPrimary/50"
        >
          Start Now
        </a>
      </div>
    </header>
  );
}
