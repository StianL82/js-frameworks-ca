import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const hasDiscount = product.discountedPrice && product.discountedPrice < product.price;

  return (
    <S.Card as={Link} to={`/product/${product.id}`}>
      <S.Title>{product.title}</S.Title>
      <S.Image src={product.image.url} alt={product.title} />
      {hasDiscount ? (
        <S.DiscountedPrice>Price: {product.discountedPrice} NOK</S.DiscountedPrice>
      ) : (
        <S.Price>Price: {product.price} NOK</S.Price>
      )}
      <S.Button>View Product</S.Button>
    </S.Card>
  );
}

export default ProductCard;

