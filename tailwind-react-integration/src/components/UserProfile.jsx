function UserProfile() {
  return (
    <div className="bg-gray-100 sm:p-4 md:p-8 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg text-center">
      <img
  src="https://via.placeholder.com/150"
  alt="User"
  className="rounded-full w-36 h-36 sm:w-24 sm:h-24 md:w-36 md:h-36 mx-auto"
/>
      <h1 className="text-lg md:text-xl text-blue-800 my-4 font-semibold">
        Nick Odipo
      </h1>
      <p className="text-gray-600 text-sm">
        Footballer at Barcelona Loves to play football and make fashion
      </p>
    </div>
  );
}

export default UserProfile;