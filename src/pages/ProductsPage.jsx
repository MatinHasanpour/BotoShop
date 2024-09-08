import Card from "../components/Card";
import Loader from "../components/Loader";
import { useProducts } from "../context/ProductContext";
import style from "./productPage.module.css";

function ProductsPage() {
  const products = useProducts();
  console.log(products);
  return (
    <div className={style.container}>
      <div className={style.products}>
        {!products.length && <Loader />}
        {products.map((p) => (
          <Card key={p.id} data={p} />
        ))}
      </div>
      <div>sidebar</div>
    </div>
  );
}

export default ProductsPage;
