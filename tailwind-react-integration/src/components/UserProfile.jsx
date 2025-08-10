import React from "react";

const UserProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center p-6">
        <img
  src="profile.jpg"
  alt="Profile"
  className="w-32 h-32 rounded-full sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out"
/>
        <h2 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 transition-colors duration-300 hover:text-blue-500">
          John Doe
        </h2>
        <p className="mt-2 text-base text-gray-600 text-center">
          Frontend Developer passionate about creating interactive UIs with modern tools like React and Tailwind CSS.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;