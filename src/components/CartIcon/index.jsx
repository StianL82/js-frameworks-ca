import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import * as S from './index.styles';

function CartIcon() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <S.CartIcon as={Link} to="/checkout">
      <img src="/images/cart_icon.svg" alt="Cart Icon" />
      <span className="cart-badge">{totalItems}</span>
    </S.CartIcon>
  );
}

export default CartIcon;
