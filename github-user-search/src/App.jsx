import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import { fetchUserData } from './services/githubService';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    setLoading(true);
    setError(false);
    setUser(null);
    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      
      {loading && <p>Loading...</p>}
      {error && <p>Looks like we can't find the user.</p>}
      {user && !loading && !error && <UserCard user={user} />}
    </div>
  );
}

export default App;