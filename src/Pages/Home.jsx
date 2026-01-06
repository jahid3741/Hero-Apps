import React from 'react';
import { Link } from 'react-router';
import { FaAppStoreIos } from "react-icons/fa6";
import { IoLogoGooglePlaystore } from "react-icons/io5";
const Home = () => {
    return (
        <div>
            <div className="min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">We Build <br /> <span className='color-gradient-to-r from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
      <p className="py-3 text-gray-400">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    <div className='gap-5'>
        <Link className="
    inline-flex items-center gap-2
    text-black px-5 py-2 rounded-lg
    bg-white border
    
    transition-transform duration-300
    hover:scale-105
  " to='https://play.google.com/store/games?device=phone&hl=en'> <IoLogoGooglePlaystore />Google Play</Link>
 <Link className="
    inline-flex items-center gap-2
    text-black px-5 py-2 rounded-lg
    bg-white border
    
    transition-transform duration-300
    hover:scale-105
  " to='https://play.google.com/store/games?device=phone&hl=en'> <FaAppStoreIos />App Store</Link>

    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Home;