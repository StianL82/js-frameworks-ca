import React, { useState } from "react";
import { useCart } from "../CartContext";
import * as S from "./index.styles";

function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    <div>
      <S.Button onClick={handleAddToCart}>
        Add to Cart
      </S.Button>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          {product.title} has been added to your cart!
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;



