import { RotatingLines } from "react-loader-spinner";
import style from "./loader.module.css";

function Loader() {
  return (
    <div className={style.loader}>
      <RotatingLines
        width="100px"
        height="100px"
        strokeWidth="3"
        strokeColor="#fe5d42"
      />
    </div>
  );
}

export default Loader;
