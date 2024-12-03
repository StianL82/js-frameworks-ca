import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function CheckoutSuccess() {
  return (
    <div>
      <div>
      <h1 className="my-5 text-center">Checkout Success</h1>
        <S.Paragraph>
          Your order was successful
        </S.Paragraph>
        <S.Paragraph>
          Thank you for your purchase!
        </S.Paragraph>
        <S.ButtonContainer>
          <S.Button as={Link} to="/" isActive>
            Back To Store
          </S.Button>
        </S.ButtonContainer>
      </div>
    </div>
  );
}

export default CheckoutSuccess;