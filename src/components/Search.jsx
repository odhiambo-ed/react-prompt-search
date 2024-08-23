import { CiSearch } from "react-icons/ci";
import './Search.css'

function Search() {
  return (
    <div className="search__container pt-5">
      <div className="search">
        <span className="searchType">Search in Names</span>
        <input type="text" />
        <CiSearch size={24} />
      </div>
    </div>
  );
}

export default Search;
