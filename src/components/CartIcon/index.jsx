import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import * as S from './index.styles';

/**
 * Cart Icon Component
 *
 * Displays a shopping cart icon with a badge indicating the total number of items in the cart.
 * Clicking the icon navigates the user to the checkout page.
 *
 * @component
 * @returns {JSX.Element} The rendered CartIcon component.
 *
 * @function CartIcon
 * @description Retrieves the cart state using `useCart()` and calculates the total number of items.
 * Wraps the cart icon in a `Link` component that directs users to the checkout page.
 */

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
