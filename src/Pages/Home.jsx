import React from "react";
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import phone from "../assets/hero.png";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";

const Home = () => {
  const {apps} = useApps();
  // const {image,title, downloads, ratingAvg} = apps;
  const featuredApps = apps.slice(0, 8)
  return (
    <div className="overflow-x-hidden">

      <section className="pt-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">

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
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md border hover:scale-105 transition"
            >
              <IoLogoGooglePlaystore className="text-xl" />
              Google Play
            </a>

            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 rounded-md border hover:scale-105 transition"
            >
              <FaAppStoreIos className="text-xl" />
              App Store
            </a>
          </div>

          <div className="mt-14 flex justify-center">
            <img
              src={phone}
              alt="App Preview"
              className="w-56 sm:w-64 md:w-72 lg:w-80"
            />
          </div>

        </div>
      </section>

      <section className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-14">
        <div className="max-w-6xl mx-auto px-4 text-white text-center">

          <h2 className="text-lg sm:text-xl font-semibold mb-10">
            Trusted By Millions, Built For You
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            <div>
              <p className="text-sm opacity-80 mb-2">Total Downloads</p>
              <p className="text-3xl sm:text-4xl font-bold">29.6M</p>
              <p className="text-xs opacity-70 mt-1">
                21% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm opacity-80 mb-2">Total Reviews</p>
              <p className="text-3xl sm:text-4xl font-bold">906K</p>
              <p className="text-xs opacity-70 mt-1">
                46% More Than Last Month
              </p>
            </div>

            <div>
              <p className="text-sm opacity-80 mb-2">Active Apps</p>
              <p className="text-3xl sm:text-4xl font-bold">132+</p>
              <p className="text-xs opacity-70 mt-1">
                31 More Will Launch
              </p>
            </div>
          </div>

        </div>
      </section>
<div className="flex flex-col items-center justify-center text-center px-4 mt-10">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
    Trending Apps
  </h1>
  <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl">
    Explore all trending apps on the market developed by us
  </p>
</div>
<div>
  {
    featuredApps.map(app => (
      <AppsCard key={app.id} app={app}></AppsCard>
    )
  )
  }
</div>

    </div>
  );
};

export default Home;
