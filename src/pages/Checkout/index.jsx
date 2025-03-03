import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import * as S from './index.styles';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import CheckoutButton from '../../components/CheckoutButton';

/**
 * Checkout Page
 *
 * Displays the shopping cart contents, allowing users to adjust quantities, remove items,
 * and proceed to checkout. Also shows a cart summary with order details.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout page.
 *
 * @function Checkout
 * @description Renders the cart items, order summary, and checkout button.
 *
 * @constant {Object[]} cart - The current items in the user's cart.
 * @constant {Function} removeFromCart - Function to remove a product from the cart by its ID.
 * @constant {Function} updateQuantity - Function to update the quantity of a product in the cart.
 * @constant {number} total - The total cost of all items in the cart.
 */

function Checkout() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (item.discountedPrice ?? item.price) * item.quantity,
    0
  );

  return (
    <div className="container">
      <h1 className="my-5 text-center">Your Cart</h1>
      <div className="row">
        <div className="col-md-7">
          {cart.length === 0 ? (
            <S.EmptyCartContainer>
              <p className="h4 mb-4">Your Cart is Empty.</p>
              <S.BackButton as={Link} to="/">
                <FaArrowLeft /> Back to store
              </S.BackButton>
            </S.EmptyCartContainer>
          ) : (
            cart.map((product) => (
              <S.ProductCard key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.image.url}
                    alt={product.title}
                    className="product-image"
                  />
                </Link>
                <div className="product-info">
                  <h5>{product.title}</h5>
                  <div className="quantity-control">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity - 1)
                      }
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, product.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                  <p>
                    Price:{' '}
                    {(
                      (product.discountedPrice ?? product.price) *
                      product.quantity
                    ).toFixed(2)}{' '}
                    kr
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="btn btn-danger"
                >
                  <FaTrash />
                  <span className="sr-only">Remove from cart</span>
                </button>
              </S.ProductCard>
            ))
          )}
        </div>

        <div className="col-md-5">
          <S.CartSummary>
            <h2 className="cart-summary-title">Cart Summary</h2>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.title} x {product.quantity} -{' '}
                  {(
                    (product.discountedPrice ?? product.price) *
                    product.quantity
                  ).toFixed(2)}{' '}
                  kr
                </li>
              ))}
            </ul>
            <div className="details">
              <p>Order: {total.toFixed(2)} kr</p>
              <p>Shipping: 0,00 kr</p>
              <S.TotalText>Total: {total.toFixed(2)} kr</S.TotalText>
              <CheckoutButton />
            </div>
          </S.CartSummary>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
