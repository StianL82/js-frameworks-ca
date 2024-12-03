import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import * as S from './index.styles';

function CheckoutButton() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleCheckout = () => {
    clearCart();
    navigate('/CheckoutSuccess');
  };

  return (
    <S.Button onClick={handleCheckout}>
      Continue to Checkout
    </S.Button>
  );
}

export default CheckoutButton;
