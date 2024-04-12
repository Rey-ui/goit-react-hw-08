import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setNameFilter } from "../redux/filtersSlice.js";
import { getFilter } from "../redux/selectors";
const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    dispatch(setNameFilter(filterValue));
  };

  return (
    <div className={css.searchContainer}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        className={css.searchInput}
        onChange={handleFilterChange}
      />
    </div>
  );
};

export default SearchBox;
