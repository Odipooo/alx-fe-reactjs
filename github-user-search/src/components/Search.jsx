import { useState } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://api.github.com/users/${query}`);
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
    } catch (err) {
      setError(true);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub user"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>Looks like we can't find the user</p>}

      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={100} />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}

export default Search;