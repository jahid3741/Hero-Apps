import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* ✅ Global Toast */}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default MainLayout;
