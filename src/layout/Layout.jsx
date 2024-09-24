import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaHeartPulse } from "react-icons/fa6";

import style from "./layout.module.css";

import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";

function Layout({ children }) {
  const [state] = useCart();
  return (
    <>
      <header className={style.header}>
        <Link to="/products">BotoShop</Link>
        <Link to="/checkout">
          <div>
            <PiShoppingCartSimpleBold />
             <span> {state.itemsCounter} </span>
          </div>
        </Link>
      </header>
      {children}
      <footer className={style.footer}>
        <p>
          Developed By Matin with <FaHeartPulse />
        </p>
      </footer>
    </>
  );
}

export default Layout;
