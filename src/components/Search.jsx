import { CiSearch } from "react-icons/ci";

function Search() {
  return (
    <div className="container">
      <div className="search mt-5">
        <span className="searchType">
          <input type="text" />
        </span>
        <CiSearch />
      </div>
    </div>
  );
}

export default Search;
