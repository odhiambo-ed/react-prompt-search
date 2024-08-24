import { CiSearch } from "react-icons/ci";
import "./Search.css";
import { useEffect, useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");

  async function fetchUser() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setSearch(data);
    } catch (e) {
      setError(e.message);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  // Filter users based on the search term if it's not empty
  const filteredUsers = searchTerm
    ? search.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="search__container pt-5">
      <div className="search">
        <span className="searchType">Search in Names</span>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <CiSearch size={24} />
      </div>
      <div className="card suggest">
        {error && <p>{error}</p>}
        <ul className="list-group">
          {filteredUsers.length > 0
            ? filteredUsers.map((user) => (
                <li key={user.id} className="list-group-item">
                  {user.name}
                </li>
              ))
            : searchTerm && (
                <li className="list-group-item text-danger">No results found.</li>
              )}
        </ul>
      </div>
    </div>
  );
}

export default Search;