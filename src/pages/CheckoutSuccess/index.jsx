import React from 'react';
import * as S from './index.styles';
import { Link } from 'react-router-dom';

/**
 * Checkout Success Page
 *
 * Displays a confirmation message after a successful checkout.
 * Provides a button to navigate back to the store.
 *
 * @component
 * @returns {JSX.Element} The rendered checkout success page.
 *
 * @function CheckoutSuccess
 * @description Renders a success message and a navigation button to return to the store.
 */

function CheckoutSuccess() {
  return (
    <div>
      <div>
        <h1 className="my-5 text-center">Checkout Success</h1>
        <S.Paragraph>Your order was successful</S.Paragraph>
        <S.Paragraph>Thank you for your purchase!</S.Paragraph>
        <S.ButtonContainer>
          <S.Button as={Link} to="/">
            Back To Store
          </S.Button>
        </S.ButtonContainer>
      </div>
    </div>
  );
}

export default CheckoutSuccess;
