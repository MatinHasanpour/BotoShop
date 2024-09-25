import { MdDeleteOutline } from "react-icons/md";
import { shortenText } from "../helper/helper";
import style from "./BasketCard.module.css";

function BasketCard({ data, clickHandler }) {
  const { image, title, quantity } = data;
  return (
    <div className={style.card}>
      <img src={data.image} alt={data.title} />
      <p>{shortenText(data.title)}</p>
      <p className={style.price}>{data.price} $</p>
      <div className={style.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && (
          <button onClick={() => clickHandler("DECREASE", data)}> - </button>
        )}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}> + </button>
      </div>
    </div>
  );
}

export default BasketCard;
