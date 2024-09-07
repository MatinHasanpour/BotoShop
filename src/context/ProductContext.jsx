import { useState, createContext, useContext, useEffect } from "react";
import api from "../services/config.js"

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductContext.Provider value={products}>
        {children}
      </ProductContext.Provider>
    </div>
  );
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductsProvider;
export { useProducts };
