import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  function handleChange(event) {
    dispatch(changeFilter(event.target.value));
  }
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        <span className={style.span}>Find contact by name</span>
        <input
          className={style.search}
          type="search"
          value={filter}
          onChange={handleChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default SearchBox;
