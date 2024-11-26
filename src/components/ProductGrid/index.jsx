import React from "react";
import ProductCard from "../ProductCard";
import * as S from "./index.styles";

function ProductGrid({ products }) {
  return (
    <S.GridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.GridContainer>
  );
}

export default ProductGrid;