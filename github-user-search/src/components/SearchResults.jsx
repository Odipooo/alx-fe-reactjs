const SearchResults = ({ users, onLoadMore, hasMore }) => {
  return (
    <div className="p-4">
      {users.map((user) => (
        <div key={user.id} className="flex items-center gap-4 border-b py-3">
          <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
          <div>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">
              {user.login}
            </a>
            {}
          </div>
        </div>
      ))}
      {hasMore && (
        <button
          onClick={onLoadMore}
          className="mt-4 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default SearchResults;