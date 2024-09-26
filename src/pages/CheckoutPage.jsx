import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";

import { MdRemoveShoppingCart } from "react-icons/md";

import style from "../pages/CheckOutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();

  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  if (!!state.itemsCounter) {
    return (
      <div>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
