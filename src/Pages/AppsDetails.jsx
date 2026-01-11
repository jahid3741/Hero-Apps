import { useParams } from "react-router";
import { useState } from "react";
import toast from "react-hot-toast";
import useApps from "../Hooks/useApps";
import ErrorApps from "./ErrorApps";

const AppsDetails = () => {
  const { id } = useParams();
  const { apps = [] } = useApps();
  const [installed, setInstalled] = useState(false);

  const app = apps.find((item) => String(item.id) === id);

  if (!app) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ErrorApps></ErrorApps>
      </div>
    );
  }

  const handleInstall = () => {
    if (installed) return;
    setInstalled(true);
    toast.success("App installed successfully!");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-14">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-center md:justify-start">
          <img
            src={app.image}
            alt={app.title}
            className="w-72 h-72 object-cover rounded-xl border bg-white"
          />
        </div>

        {/* RIGHT INFO */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{app.title}</h1>
          <p className="text-gray-500 mt-1">
            Developed by{" "}
            <span className="text-blue-600">{app.companyName}</span>
          </p>

          {/* STATS */}
          <div className="flex gap-10 mt-6">
            <div>
              <p className="text-sm text-gray-400">Downloads</p>
              <p className="text-xl font-semibold">
                {app.downloads.toLocaleString()}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Average Ratings</p>
              <p className="text-xl font-semibold text-yellow-500">
                ⭐ {app.ratingAvg}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Total Reviews</p>
              <p className="text-xl font-semibold">
                {app.reviews.toLocaleString()}
              </p>
            </div>
          </div>

          {/* INSTALL BUTTON */}
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

      {/* RATINGS SECTION */}
      <div className="mt-16 border-t pt-10">
        <h2 className="text-xl font-semibold mb-6">Ratings</h2>

        <div className="space-y-4 max-w-3xl">
          {[...app.ratings]
            .sort((a, b) => b.name[0] - a.name[0]) // 5 → 1
            .map((rate, index) => {
              const percentage = (rate.count / app.reviews) * 100;

              return (
                <div key={index} className="flex items-center gap-4">
                  {/* STAR LABEL */}
                  <span className="w-14 text-sm text-gray-500 whitespace-nowrap">
                    {rate.name}
                  </span>

                  {/* BAR */}
                  <div className="flex-1 h-3 bg-gray-200 rounded">
                    <div
                      className="h-3 bg-orange-500 rounded transition-all duration-500"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>

                  {/* COUNT (hide on small screens) */}
                  <span className="hidden sm:block text-sm text-gray-500 w-14 text-right">
                    {rate.count}
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-14 border-t pt-8 max-w-4xl">
        <h2 className="text-xl font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </section>
  );
};

export default AppsDetails;
