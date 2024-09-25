import { Link, useParams } from "react-router-dom";

import { useProductِDetails } from "../context/ProductContext";
import Loader from "../components/Loader";

import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import style from "./DetailsPage.module.css/";

function DetailsPage() {
  const { id } = useParams();

  const productDetails = useProductِDetails(+id);

  if (!productDetails) return <Loader />;

  return (
    <div className={style.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={style.information}>
        <h3 className={style.title}>{productDetails.title}</h3>
        <p className={style.description}>{productDetails.description}</p>
        <p className={style.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={style.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back to Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
