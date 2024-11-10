import { ThreeDots } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loaderOverlay}>
      <ThreeDots
        visible={true}
        height="60"
        width="60"
        color="lightpink"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
