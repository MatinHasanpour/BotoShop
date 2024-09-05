import { Navigate, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";

function App() {
  return (
    <>
      <h1>BotoShop</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductsPage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </>
  );
}

export default App;
