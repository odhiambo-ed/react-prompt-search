import { CiSearch } from "react-icons/ci";
import './Search.css'
import { useEffect, useState } from "react";

function Search() {
    const [searchTerm, setSearchTerm] = useState("")
    const [search, setSearch] = useState([])

    async function fetchUser() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
    }

    useEffect(() => {
        fetchUser()
    },[])
  return (
    <div className="search__container pt-5">
      <div className="search">
        <span className="searchType">Search in Names</span>
        <input type="text" value={searchTerm} />
        <CiSearch size={24} />
      </div>
      <div className="card suggest">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
        </ul>
      </div>
    </div>
  );
}

export default Search;
