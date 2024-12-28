import { Link } from 'react-router-dom';
import { CDN_LINK } from '../utils/constants';

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo, id, cloudinaryImageId } = resData?.info;
  const { slaString } = resData?.info?.sla;

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-xs w-full mx-auto">
      <img
        className="w-full h-48 object-cover rounded-t-lg mb-4"
        src={CDN_LINK + cloudinaryImageId}
        alt={`Image of ${name} restaurant`}
        loading="lazy"
      />
      <div className="text-gray-800">
        <h3 className="text-xl font-semibold truncate">{name}</h3>
        <p className="text-sm text-gray-600 mb-2">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-600">Rating: <span className="font-medium">{avgRating} ⭐</span></p>
        <p className="text-sm text-gray-600 mb-2">{slaString}</p>
        <p className="text-sm text-gray-600">Cost for two: <span className="font-medium">{costForTwo}</span></p>
        <div className="mt-4">
          <Link
            to={`/restaurants/${id}`}
            className="text-blue-600 font-semibold hover:underline transition duration-200"
            aria-label={`View the menu of ${name} restaurant`}
          >
            VIEW MENU ➡️
          </Link>
        </div>
      </div>
    </div>
  );
};


export default RestaurantCard;
