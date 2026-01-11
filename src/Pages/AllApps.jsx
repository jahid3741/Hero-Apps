import { useState } from "react";
import useApps from "../Hooks/useApps";
import AppsCard from "../Components/AppsCard";
import SkeletonLoader from "../Components/SkeletonLoader";

const AllApps = () => {
  const { apps = [], loading } = useApps();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter apps based on search term
  const filteredApps = apps.filter((app) => {
    if (!searchTerm.trim()) return true;

    return String(app.name || app.title || "")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  return (
    <section className="py-10">
      {/* HEADER */}
      <div className="flex flex-col items-center justify-center text-center font-bold mb-10">
        <h1 className="font-bold text-5xl">Our All Applications</h1>

        <p className="text-[#627382] mt-3 text-2xl sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl">
          Explore All Apps on the Market developed by us. We code for Millions.
        </p>
      </div>

      {/* SEARCH + COUNT */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            ({filteredApps.length}) Apps Found
          </h2>
        </div>

        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search apps"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* CONTENT */}
      {loading ? (
        // 🔹 Skeleton during page navigation & search
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : filteredApps.length === 0 ? (
        // 🔹 No app found
        <div className="flex items-center justify-center py-20">
          <p className="text-xl text-gray-500 font-semibold">No App Found</p>
        </div>
      ) : (
        // 🔹 Apps grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map((app, index) => (
            <AppsCard key={`${app.title || "app"}-${index}`} app={app} />
          ))}
        </div>
      )}
    </section>
  );
};

export default AllApps;
