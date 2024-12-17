import styled from 'styled-components';
import { ButtonBase } from '../../styles/GlobalStyle';

export const EmptyCartContainer = styled.div`
  background: ${(props) => props.theme.color.cardBg};
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const BackButton = styled(ButtonBase)`
  background-color: ${(props) => props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.white};
  display: inline-flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.color.buttonHoverBg};
    text-decoration: none;
  }

  svg {
    margin-right: 8px;
  }
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 20px;
  background: ${(props) => props.theme.color.cardBg};
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;

  .product-image {
    max-width: 100px;
    margin-right: 20px;
  }

  .product-info {
    flex-grow: 1;

    h5 {
      color: ${(props) => props.theme.color.darkGray};
      font-family: 'Open Sans', sans-serif;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 8px;
    }
  }

  .quantity-control {
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
      background: ${(props) => props.theme.color.primaryColor};
      color: ${(props) => props.theme.color.white};
      border: none;
      padding: 5px 10px;
      cursor: pointer;
    }

    span {
      margin: 0 10px;
    }
  }
`;

export const CartSummary = styled.div`
  padding: 20px;
  background: ${(props) => props.theme.color.cardBg};
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;

  ul {
    list-style: none;
    padding: 0;
  }

  .details {
    margin-top: 20px;

    p {
      margin-bottom: 10px;
    }

    h4 {
      margin-top: 10px;
    }
  }

  .cart-summary-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
`;


export const TotalText = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin-top: 10px;
`;
