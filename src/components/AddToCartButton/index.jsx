import React, { useState } from "react";
import { useCart } from "../CartContext";

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
      <button
        className="btn btn-warning mt-4 px-4 py-2 fw-bold"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          {product.title} has been added to your cart!
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;


