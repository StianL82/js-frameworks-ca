import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import * as S from './index.styles';

/**
 * Checkout Button Component
 *
 * Handles the checkout process by clearing the cart and navigating to the checkout success page.
 *
 * @component
 * @returns {JSX.Element} The rendered CheckoutButton component.
 *
 * @function CheckoutButton
 * @description Clears the shopping cart using `clearCart()` and redirects the user to the checkout success page.
 */

function CheckoutButton() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    navigate('/CheckoutSuccess');
  };

  return <S.Button onClick={handleCheckout}>Continue to Checkout</S.Button>;
}

export default CheckoutButton;
