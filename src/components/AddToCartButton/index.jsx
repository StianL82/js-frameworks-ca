import React, { useState } from 'react';
import { useCart } from '../CartContext';
import * as S from './index.styles';

/**
 * AddToCartButton Component
 *
 * A button component that allows users to add a product to the cart.
 * Displays a temporary success alert when an item is added.
 *
 * @component
 * @param {Object} product - The product to be added to the cart.
 * @returns {JSX.Element} The rendered AddToCartButton component.
 */

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
      <S.Button onClick={handleAddToCart}>Add to Cart</S.Button>
      {showAlert && (
        <div className="alert alert-success mt-3" role="alert">
          {product.title} has been added to your cart!
        </div>
      )}
    </div>
  );
}

export default AddToCartButton;
