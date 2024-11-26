import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div>
      <div>
        <S.Heading>Cart Checkout Page</S.Heading>
        <S.Paragraph>
          Here we will display the products in your cart
        </S.Paragraph>
        <S.ButtonContainer>
          <S.Button as={Link} to="/checkoutSuccess" isActive>
            Checkout
          </S.Button>
        </S.ButtonContainer>
      </div>
    </div>
  );
}

export default Checkout;