import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-300 px-6 py-10">
  <div
    className="
      max-w-7xl mx-auto
      grid grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      gap-10
    "
  >
    {/* Services */}
    <nav className="space-y-3">
      <h6 className="text-white font-semibold text-lg">Services</h6>
      <a href="#" className="block hover:text-white transition">Branding</a>
      <a href="#" className="block hover:text-white transition">Design</a>
      <a href="#" className="block hover:text-white transition">Marketing</a>
      <a href="#" className="block hover:text-white transition">Advertisement</a>
    </nav>

    {/* Company */}
    <nav className="space-y-3">
      <h6 className="text-white font-semibold text-lg">Company</h6>
      <a href="/about" className="block hover:text-white transition">About us</a>
      <a href="/contact" className="block hover:text-white transition">Contact</a>
      <a href="/jobs" className="block hover:text-white transition">Jobs</a>
      <a href="/press" className="block hover:text-white transition">Press kit</a>
    </nav>

    {/* Social */}
    <nav className="space-y-4">
      <h6 className="text-white font-semibold text-lg">Social</h6>

      <div className="flex gap-5 sm:justify-start justify-center">
        {/* Twitter */}
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" className="fill-current">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
          </svg>
        </a>

        {/* YouTube */}
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" className="fill-current">
            <path d="M19.615 3.184c-3.604-.246..." />
          </svg>
        </a>

        {/* Facebook */}
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" className="fill-current">
            <path d="M9 8h-3v4h3v12h5v-12..." />
          </svg>
        </a>
      </div>
    </nav>
  </div>

  {/* Bottom bar */}
  <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} HERO.IO — All rights reserved
  </div>
</footer>

        </div>
    );
};

export default Footer;