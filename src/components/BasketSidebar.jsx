import { BsPatchCheck } from "react-icons/bs";
import { FaHashtag } from "react-icons/fa";
import { TbChecklist } from "react-icons/tb";

function BasketSidebar() {
  return (
    <>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.quantity}</span>
      </div>{" "}
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{state.checkout && "Pendeng..."}</span>
      </div>
    </>
  );
}

export default BasketSidebar;