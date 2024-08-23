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
        <div className="card suggest">
          <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
          </ul>
        </div>
      </div>
  );
}

export default Search;
