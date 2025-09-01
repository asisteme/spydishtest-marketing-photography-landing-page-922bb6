import React from "react";
import Hero from "./components/Hero";
import Diners from "./components/Diners";
import Restaurants from "./components/Restaurants";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Diners />
        <Restaurants />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
