import React, { useState ,useContext} from "react";
import { useParams } from "react-router";
import { SupplementContext } from "../SupplementContext";
import "./Product.css"; // Import your custom CSS file for styling
import Navbar from "./Navbar";
// import { supplements } from "../App";
const Product4 = () => {


  const supplements = useContext(SupplementContext)
  console.log(supplements);
  const [rotate, setRotate] = useState(false);
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const product = supplements?.find((supplement) => supplement.id.toString() === id);
  const [images, setImages] = useState({
    img1: product?.imgSrc,
    img2: product?.imgSrc,
    img3: product?.imgSrc,
    img4: product?.imgSrc,
  });
  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="product-container">
      <div className="product-images">
        <img src={activeImg} alt="" className="product-image" />
        <div className="image-thumbnails">
          <img
            src={images.img1}
            alt=""
            className="image-thumbnail"
            onClick={() => setActiveImage(images.img1)}
          />
          <img
            src={images.img2}
            alt=""
            className="image-thumbnail"
            onClick={() => setActiveImage(images.img2)}
          />
          <img
            src={images.img3}
            alt=""
            className="image-thumbnail"
            onClick={() => setActiveImage(images.img3)}
          />
          <img
            src={images.img4}
            alt=""
            className="image-thumbnail"
            onClick={() => setActiveImage(images.img4)}
          />
        </div>
      </div>
      <div className="product-description">
        <span className="product-name">{product.name}</span>
        <h1 className="product-title">{product.name}</h1>
        <p className="product-text">{product.description}</p>
        <h6 className="product-price">$199.00</h6>
        <div className="quantity-control">
          <div className="quantity-buttons">
            <button
              className="quantity-button"
              onClick={() => setAmount((prev) => prev - 1)}
            >
              -
            </button>
            <span className="quantity">{amount}</span>
            <button
              className="quantity-button"
              onClick={() => setAmount((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <button className="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  
   </>
  );
};

export default Product4;
