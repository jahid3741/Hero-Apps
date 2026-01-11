import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router";

import { loadInstalled, removeFromInstalled } from "../Utils/LocalStorage";
import SkeletonLoader from "../Components/SkeletonLoader";

const MyInstallation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [loading, setLoading] = useState(true); // 🔹 route loading only

  // 🔹 Load installed apps on route change
  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setInstalledApps(loadInstalled());
      setLoading(false);
    }, 500); // skeleton visible on navigation
  }, []);

  // 🔹 Sorting (NO skeleton here)
  const handleSort = (order) => {
    setSortOrder(order);

    const sortedApps = [...installedApps].sort((a, b) => {
      if (order === "high-low") return b.downloads - a.downloads;
      if (order === "low-high") return a.downloads - b.downloads;
      return 0;
    });

    setInstalledApps(sortedApps);
  };

  // 🔹 Uninstall
  const handleUninstall = (id) => {
    removeFromInstalled(id);
    setInstalledApps(loadInstalled());
    toast.success("App uninstalled successfully!");
  };

  // 🔹 Empty state (after loading)
  if (!loading && installedApps.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          No Apps Installed
        </h2>
        <p className="text-gray-500 mb-6">
          You haven’t installed any apps yet.
        </p>

        <Link
          to="/allapps"
          className="
            bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
            text-white px-6 py-2 rounded-lg
            font-semibold transition hover:opacity-90
          "
        >
          Browse Apps
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="font-bold text-5xl">Your Installed Apps</h1>
        <p className="text-[#627382] mt-3 text-lg max-w-xl mx-auto">
          Explore all installed applications and manage them easily.
        </p>
      </div>

      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
        <h2 className="text-2xl font-bold">
          {installedApps.length} Apps Found
        </h2>

        {/* SORT DROPDOWN */}
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="border rounded-md px-4 py-2 text-gray-700 focus:outline-none"
        >
          <option value="">Sort by size</option>
          <option value="high-low">High → Low</option>
          <option value="low-high">Low → High</option>
        </select>
      </div>

      {/* 🔹 ROUTE LOADING SKELETON */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))}
        </div>
      ) : (
        /* 🔹 APP LIST */
        <div className="space-y-4">
          {installedApps.map((app) => (
            <div
              key={app.id}
              className="
                flex flex-col sm:flex-row
                sm:items-center sm:justify-between
                gap-4
                bg-white rounded-xl p-5
                shadow-sm
              "
            >
              {/* LEFT INFO */}
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div>
                  <h3 className="font-semibold text-lg text-gray-900">
                    {app.title}
                  </h3>
                  <p className="text-sm text-gray-500">{app.companyName}</p>

                  <div className="flex gap-4 mt-2 text-sm text-gray-600">
                    <span>⬇ {app.downloads.toLocaleString()}</span>
                    <span>⭐ {app.ratingAvg}</span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>

              {/* UNINSTALL BUTTON */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="
                  bg-red-500 hover:bg-red-600
                  text-white px-4 py-2
                  rounded-md font-medium
                  transition
                "
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MyInstallation;
