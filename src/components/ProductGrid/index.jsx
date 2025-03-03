import React from 'react';
import ProductCard from '../ProductCard';
import * as S from './index.styles';

/**
 * ProductGrid Component
 *
 * Renders a grid layout for displaying multiple product cards.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {Array} props.products - An array of product objects to be displayed.
 * @returns {JSX.Element} The rendered ProductGrid component.
 */

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
