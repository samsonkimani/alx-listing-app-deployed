import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="text-xl font-bold text-blue-600">alx-listing-app</div>

        <nav className="flex space-x-4 mt-2 sm:mt-0">
          <a href="#" className="hover:text-blue-500">Rooms</a>
          <a href="#" className="hover:text-blue-500">Mansions</a>
          <a href="#" className="hover:text-blue-500">Countryside</a>
          <a href="#" className="hover:text-blue-500">More</a>
        </nav>

        <div className="flex gap-2 mt-2 sm:mt-0">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 border rounded-md"
          />
          <button className="bg-blue-600 text-white px-4 py-1 rounded">Sign In</button>
          <button className="bg-gray-200 px-4 py-1 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
