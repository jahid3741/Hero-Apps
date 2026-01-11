import { useParams } from "react-router";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import useApps from "../Hooks/useApps";
import ErrorApps from "./ErrorApps";
import { loadInstalled, addToInstalled } from "../Utils/LocalStorage";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps = [] } = useApps();
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = loadInstalled();
    const exists = installedApps.some((item) => String(item.id) === String(id));
    setInstalled(exists);
  }, [id]);

  const app = apps.find((item) => String(item.id) === String(id));

  if (!app) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ErrorApps />
      </div>
    );
  }

  const handleInstall = () => {
    if (installed) {
      toast.error("App already installed. Check Installation page.");
      return;
    }

    addToInstalled(app);
    setInstalled(true);
    toast.success("App installed successfully!");
  };

  // find max rating count for bar scaling
  const maxRatingCount = Math.max(...(app.ratings || []).map((r) => r.count));

  return (
    <section className="max-w-7xl mx-auto px-6 py-14 space-y-16">
      {/* APP INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <img
          src={app.image}
          alt={app.title}
          className="w-72 h-72 object-cover rounded-xl border bg-white"
        />

        <div>
          <h1 className="text-3xl font-bold text-gray-900">{app.title}</h1>

          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-blue-600">{app.companyName}</span>
          </p>

          <div className="flex gap-10 mt-6">
            <div>
              <p className="text-sm text-gray-400">Downloads</p>
              <p className="text-xl font-semibold">
                {app.downloads.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Rating</p>
              <p className="text-xl font-semibold text-yellow-500">
                ⭐ {app.ratingAvg}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Reviews</p>
              <p className="text-xl font-semibold">
                {app.reviews.toLocaleString()}
              </p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={installed}
            className={`mt-6 px-6 py-3 rounded-md font-semibold transition-all
              ${
                installed
                  ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
          >
            {installed ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      {/* ⭐ RATINGS SECTION (MATCHES IMAGE) */}
      <div className="border-t pt-10">
        <h2 className="text-xl font-semibold mb-6">Ratings</h2>

        <div className="space-y-5 max-w-5xl">
          {[...(app.ratings || [])]
            .sort((a, b) => b.star - a.star) // 5 → 1
            .map((rate, index) => {
              const percentage = maxRatingCount
                ? (rate.count / maxRatingCount) * 100
                : 0;

              return (
                <div key={index} className="flex items-center gap-6">
                  {/* LABEL */}
                  <span className="w-20 text-sm text-gray-500 whitespace-nowrap">
                    {rate.star} star
                  </span>

                  {/* BAR */}
                  <div className="flex-1 h-4 bg-gray-200 rounded">
                    <div
                      className="h-4 bg-orange-500 rounded transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* COUNT */}
                  <span className="w-20 text-sm text-gray-500 text-right">
                    {rate.count.toLocaleString()}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      {/* 📝 DESCRIPTION */}
      <div className="border-t pt-8 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {app.description || "No description available for this app."}
        </p>
      </div>
    </section>
  );
};

export default AppsDetails;
