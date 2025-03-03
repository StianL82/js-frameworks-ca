import React from 'react';
import * as S from './index.styles';
import { Link } from 'react-router-dom';

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
