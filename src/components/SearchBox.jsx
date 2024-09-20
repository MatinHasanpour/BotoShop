import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helper/helper";

import style from "./searchBox.module.css";

function SearchBox({ search, setQuery, setSearch }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };
  return (
    <div className={style.search}>
      <input
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
