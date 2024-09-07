import { useProducts } from "../context/ProductContext";
import style from "./productPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={style.container}>
      <div className={style.products}>
        {!products.length && <p>Loading...</p>}
        {products.map((p) => (
          <p key={p.id}>{p.title}</p>
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
