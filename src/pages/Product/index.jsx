import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div>
      <div>
        <S.Heading>Individual Product Page</S.Heading>
        <S.Paragraph>
          On this page we will display the individual product.
        </S.Paragraph>
        <S.Button as={Link} to="/" isActive>
            Back To Store
          </S.Button>
        <S.Button as={Link} to="/checkout">
          Buy the Product
        </S.Button>
      </div>
    </div>
  );
}

export default Product;
