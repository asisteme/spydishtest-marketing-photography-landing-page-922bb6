import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brandAccent py-8 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} SpyDishTest. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandBg"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandBg"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brandBg"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
