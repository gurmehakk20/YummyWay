import RestaurantCard from "./RestaurantCard";
import { SWIGGY_API_URL } from "../utils/constants";  // Corrected import
import Shimmer from "./Shimmer";
import React, { useEffect, useState } from "react";
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [ResData, setResData] = useState([]);
  const [FilteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiFetch = await fetch(SWIGGY_API_URL);
    const json = await apiFetch.json();
    setResData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredData(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 className="text-center text-xl font-bold text-red-500">
        You are offline, check your internet connection!!
      </h1>
    );
  }

  return ResData.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container flex flex-col sm:flex-row justify-center items-center gap-4 p-4 max-w-5xl mx-auto border border-gray-300 rounded-lg bg-gray-50 shadow-lg mb-6">
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-600 transition-transform duration-200 w-full sm:w-auto"
          onClick={() => {
            const newResData = ResData.filter((res) => {
              return res?.info?.avgRating >= 4.4;
            });
            setFilteredData(newResData);
          }}
        >
          Top Rated Restaurants
        </button>
        <input
          type="text"
          value={searchText}
          placeholder="Search for restaurants..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          className="flex-1 py-2 px-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
        />
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-600 transition-transform duration-200 w-full sm:w-auto"
          onClick={() => {
            const newData = ResData.filter((Res) => {
              return Res?.info?.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredData(newData);
          }}
        >
          SEARCH
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 px-4 sm:px-8 pb-6">
        {FilteredData.map((Res) => (
          <RestaurantCard resData={Res} key={Res?.info?.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
