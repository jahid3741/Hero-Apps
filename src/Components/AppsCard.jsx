const AppsCard = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app || {};

  return (
    <div className="card bg-base-100 shadow-sm hover:shadow-lg transition rounded-lg">
      <figure className="h-40 overflow-hidden">
        <img
          src={image}
          alt={title || "App image"}
          className="w-full h-full object-cover"
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
  );
};

export default AppsCard;
