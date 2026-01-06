import React from "react";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import image from "../assets/hero.png";

const Home = () => {
  return (
    <div className="overflow-x-hidden">

      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-3xl w-full">

          <h1 className="font-bold leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            We Build <br />
            <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>

          <p className="mt-4 text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            At HERO.IO, we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg border transition hover:scale-105 hover:shadow-lg"
            >
              <IoLogoGooglePlaystore className="text-xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-lg border transition hover:scale-105 hover:shadow-lg"
            >
              <FaAppStoreIos className="text-xl" />
              App Store
            </a>
          </div>

          <div className="mt-10 flex justify-center">
            <img
              src={image}
              alt="Hero App"
              className="w-56 sm:w-64 md:w-72 lg:w-80"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-12 px-4">
        <div className="max-w-5xl mx-auto text-white">

          <h2 className="text-center font-bold text-xl sm:text-2xl mb-10">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-sm opacity-80">Total Downloads</p>
              <p className="text-3xl sm:text-4xl font-bold">29.6M</p>
              <p className="text-xs opacity-70">21% more than last month</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm opacity-80">Total Reviews</p>
              <p className="text-3xl sm:text-4xl font-bold">906K</p>
              <p className="text-xs opacity-70">46% more than last month</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm opacity-80">Active Apps</p>
              <p className="text-3xl sm:text-4xl font-bold">132+</p>
              <p className="text-xs opacity-70">31 more will launch</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
