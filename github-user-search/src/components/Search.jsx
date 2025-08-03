import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded-lg">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded-md flex-1"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 rounded-md flex-1"
      />
      <input
        type="number"
        placeholder="Min Repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 rounded-md w-40"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default SearchForm;