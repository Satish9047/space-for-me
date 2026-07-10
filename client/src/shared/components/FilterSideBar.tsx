import { useState } from "react";
import { Button } from "@/components/ui/button";

const FilterSidebar = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const locations = [
    { id: 1, locationName: "Kathmandu" },
    { id: 2, locationName: "Bhaktapur" },
    { id: 3, locationName: "Lalitpur" },
    { id: 4, locationName: "Kirtipur" },
  ];

  const spaceCategories = [
    { id: 1, category: "Futsal" },
    { id: 2, category: "Basketball" },
    { id: 3, category: "Tennis" },
    { id: 4, category: "Badminton" },
    { id: 5, category: "Volleyball" },
    { id: 6, category: "Archery" },
    { id: 7, category: "Swimming Pool" },
    { id: 8, category: "Zip Line" },
    { id: 9, category: "Rock Climbing" },
    { id: 10, category: "Paintball" },
    { id: 15, category: "Mini Golf" },
    { id: 16, category: "Bowling" },
    { id: 21, category: "Boxing Ring" },
    { id: 22, category: "Martial Arts Dojo" },
    { id: 23, category: "Dance Studio" },
    { id: 24, category: "Yoga Studio" },
    { id: 25, category: "Studio" },
    { id: 26, category: "Seminar Hall" },
    { id: 27, category: "Conference Room" },
    { id: 28, category: "Auditorium" },
    { id: 29, category: "Theater" },
    { id: 30, category: "Music Studio" },
    { id: 31, category: "Art Studio" },
    { id: 32, category: "Photography Studio" },
    { id: 33, category: "Recording Studio" },
    { id: 34, category: "Podcast Studio" },
    { id: 35, category: "Dance Hall" },
    { id: 36, category: "Banquet Hall" },
    { id: 37, category: "Exhibition Hall" },
    { id: 38, category: "Event Space" },
    { id: 39, category: "Coworking Space" },
  ];

  return (
    <div className="w-72 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 space-y-6 sticky top-4">
      {/* Header with icon */}
      <div className="flex items-center gap-2 pb-3 border-b border-gray-200">
        {/* <FaFilter className="text-blue-600 text-lg" /> */}
        <h3 className="text-lg font-semibold text-gray-800">Filters</h3>
        <span className="ml-auto text-xs text-gray-400">Clear all</span>
      </div>

      {/* Location */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
          {/* <FaMapMarkerAlt className="text-blue-500" /> */}
          Location
        </label>
        <div className="relative">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">All Locations</option>
            {locations.map((loc) => (
              <option key={loc.id} value={loc.locationName}>
                {loc.locationName}
              </option>
            ))}
          </select>
          {/* <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" /> */}
        </div>
      </div>

      {/* Space Categories */}
      <div>
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-1.5">
          {/* <FaTag className="text-blue-500" />  */}
          Categories
        </label>
        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-800 text-sm rounded-xl py-2.5 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          >
            <option value="">All Categories</option>
            {spaceCategories.map((cat) => (
              <option key={cat.id} value={cat.category}>
                {cat.category}
              </option>
            ))}
          </select>
          {/* <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs" /> */}
        </div>
      </div>

      {/* Apply Button */}
      <Button>Apply Filters</Button>
    </div>
  );
};

export default FilterSidebar;
