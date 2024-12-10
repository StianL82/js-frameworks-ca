import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../components/CartContext';
import * as S from './index.styles';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import CheckoutButton from '../../components/CheckoutButton';


function Checkout() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
                  <img src={product.image.url} alt={product.title} className="product-image" />
                </Link>
                <div className="product-info">
                  <h5>{product.title}</h5>
                  <div className="quantity-control">
                    <button onClick={() => updateQuantity(product.id, product.quantity - 1)} disabled={product.quantity === 1}>-</button>
                    <span>{product.quantity}</span>
                    <button onClick={() => updateQuantity(product.id, product.quantity + 1)}>+</button>
                  </div>
                  <p>Price: {(product.price * product.quantity).toFixed(2)} kr</p>
                </div>
                <button onClick={() => removeFromCart(product.id)} className="btn btn-danger">
                  <FaTrash />
                </button>
              </S.ProductCard>
            ))
          )}
        </div>

        <div className="col-md-5">
          <S.CartSummary>
            <h3>Cart Summary</h3>
            <ul>
              {cart.map((product) => (
                <li key={product.id}>
                  {product.title} x {product.quantity} - {(product.price * product.quantity).toFixed(2)} kr
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