import { useState } from 'react';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import { searchUsers } from './services/githubService';

const SearchPage = () => {
  const [users, setUsers] = useState([]);
  const [queryParams, setQueryParams] = useState({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (params) => {
    setQueryParams(params);
    setPage(1);
    const data = await searchUsers({ ...params, page: 1 });
    setUsers(data.items);
    setHasMore(data.total_count > data.items.length);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    const data = await searchUsers({ ...queryParams, page: nextPage });
    setUsers((prev) => [...prev, ...data.items]);
    setPage(nextPage);
    setHasMore(data.total_count > users.length + data.items.length);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <SearchForm onSearch={handleSearch} />
      <SearchResults users={users} onLoadMore={loadMore} hasMore={hasMore} />
    </div>
  );
};

export default SearchPage;