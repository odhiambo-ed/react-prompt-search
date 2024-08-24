import { CiSearch } from "react-icons/ci";
import './Search.css'
import { useEffect, useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [search, setSearch] = useState([])
    const [error, setError] = useState("")

    async function fetchUser() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        
        setSearch(data);
      } catch (e) {
        setError(e.message)
      }
      
    }

    useEffect(() => {
        fetchUser()
    }, [])
    
    const searchFilter = () => {
        search.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    }
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
        <ul className="list-group">
          {searchFilter.map((user) => (
              <li key={user.id} className="list-group-item">{ user.name }</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
