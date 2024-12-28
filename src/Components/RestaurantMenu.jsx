import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { SWIGGY_MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resid: resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  // Shimmer UI - Show loading until data is available
  if (resInfo === null) {
    return <Shimmer />;
  }

  console.log(resInfo?.data?.cards);

  // Destructuring with safe optional chaining
  const info = resInfo?.data?.cards?.[2]?.card?.card?.info || {};
  const { name, city, costForTwoMessage, cuisines, avgRating } = info;

  const groupedCards = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card;
  const itemCards = groupedCards?.itemCards || []; // Safe fallback

  return (
    <div className="restaurant-menu-container p-6 max-w-screen-lg mx-auto bg-white shadow-lg rounded-lg">
      {/* Restaurant Header */}
      <div className="restaurant-header mb-8 text-center">
        <h1 className="restaurant-name text-3xl font-bold text-gray-800 mb-2">{name || "WRONG API"}</h1>
        <p className="restaurant-location text-lg text-gray-600 mb-2">{city || ""}</p>
        <p className="restaurant-cost text-lg text-gray-600 mb-2">{costForTwoMessage || ""}</p>
        <p className="restaurant-cuisines text-md text-gray-600 mb-2">{cuisines?.join(", ") || ""}</p>
        <p className="restaurant-rating text-lg font-semibold text-gray-800">Average Rating: {avgRating || "N/A"}</p>
      </div>

      {/* Menu Items Section */}
      <div className="menu-items-section">
        {itemCards.length > 0 ? (
          <div className="menu-items-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {itemCards.map((item, index) => (
              <div key={index} className="menu-item-card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <p className="menu-item-name text-lg font-semibold text-gray-800">{item?.card?.info?.name || "Unknown Item"}</p>
                {/* Uncomment if price data becomes available */}
                {/* <p className="menu-item-price text-md text-gray-600">{item?.card?.info?.price || "Price not available"}</p> */}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-menu-items text-center text-xl text-gray-600">No menu items available</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
