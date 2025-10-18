import { FaRegEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    published_date,
    thumbnail_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card hover:scale-105 duration-1000 w-full bg-base-100 shadow-md border hover:shadow-lg transition-all  mb-7">
      {/* Author Section */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold text-gray-700">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary text-lg flex items-center gap-x-8">
            <FaRegBookmark />
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <h3 className="px-4 mt-3 font-bold text-lg leading-snug hover:text-primary cursor-pointer">
        {title}
      </h3>

      {/* Thumbnail */}
      <figure className="px-4 pt-3">
        <img
          src={thumbnail_url}
          alt="news thumbnail"
          className="rounded-xl w-full h-56 object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pt-3">
        <p className="text-gray-600 text-sm">
          {details.length > 180 ? (
            <>
              {details.slice(0, 180)}...{" "}
              <span className="text-primary font-medium cursor-pointer">
                Read More
              </span>
            </>
          ) : (
            details
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 py-3 border-t mt-3 text-sm text-gray-500">
        <div className="flex items-center gap-1 text-warning">
          <FaStar className="text-orange-400" /> 
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />
          <FaStar className="text-orange-400" />{rating.number}

        </div>
        <div className="flex items-center gap-2">
          <FaRegEye /> {total_view}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
