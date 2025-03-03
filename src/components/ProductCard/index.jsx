import React from 'react';
import * as S from './index.styles';
import { Link } from 'react-router-dom';

/**
 * ProductCard Component
 *
 * Displays product details, including title, image, price, and discount information.
 * Clicking the card navigates to the product's detail page.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Object} props.product - The product object containing details.
 * @param {string} props.product.id - The unique identifier for the product.
 * @param {string} props.product.title - The title of the product.
 * @param {Object} props.product.image - The image object of the product.
 * @param {string} props.product.image.url - The URL of the product image.
 * @param {number} props.product.price - The original price of the product.
 * @param {number} [props.product.discountedPrice] - The discounted price, if applicable.
 * @returns {JSX.Element} The rendered ProductCard component.
 */

function ProductCard({ product }) {
  const hasDiscount =
    product.discountedPrice && product.discountedPrice < product.price;

  return (
    <S.Card as={Link} to={`/product/${product.id}`}>
      <S.Title>{product.title}</S.Title>
      <S.Image src={product.image.url} alt={product.title} />
      <S.PriceContainer>
        {hasDiscount ? (
          <>
            <S.DiscountedPrice>{product.discountedPrice} NOK</S.DiscountedPrice>
            <S.OriginalPrice>{product.price} NOK</S.OriginalPrice>
          </>
        ) : (
          <S.Price>{product.price} NOK</S.Price>
        )}
      </S.PriceContainer>
      <S.Button>View Product</S.Button>
    </S.Card>
  );
}

export default ProductCard;
