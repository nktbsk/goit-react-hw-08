import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/filters/selectors";
import style from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  function handleChange(event) {
    dispatch(changeFilter(event.target.value));
  }
  return (
    <div className={style.wrapper}>
      <label className={style.label}>
        Find contact by name
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
