import { Link } from "react-router";

const AppsCard = ({ app }) => {
  const { id, image, title, downloads, ratingAvg } = app || {};

  return (
    <Link to={`/appdetails/${id}`} className="block">
      <div
        className="card bg-base-100 shadow-sm cursor-pointer
                   transition-all duration-300
                   hover:shadow-xl hover:-translate-y-1"
      >
        <figure className="h-40 overflow-hidden">
          <img
            src={image}
            alt={title || "App image"}
            className="w-full h-full object-cover
                       transition-transform duration-300
                       hover:scale-105"
          />
        </figure>

        <div className="card-body p-4">
          <h2 className="font-semibold text-lg">
            {title || "Unknown App"}
          </h2>

          <div className="mt-2 flex justify-between items-center text-sm">
            <span className="text-gray-500">
              📥 {Number(downloads || 0).toLocaleString()}
            </span>

            <span className="text-yellow-500 font-semibold">
              ⭐ {ratingAvg ?? "N/A"}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppsCard;
