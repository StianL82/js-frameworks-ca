import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const EmptyCartContainer = styled.div`
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
  text-align: center;
`;

export const BackButton = styled(Link)`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
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
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 8px;

  .product-image {
    max-width: 100px;
    margin-right: 20px;
  }

  .product-info {
    flex-grow: 1;
  }

  .quantity-control {
    display: flex;
    align-items: center;
    margin-top: 10px;

    button {
      background: #007bff;
      color: #fff;
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
  background: #f8f9fa;
  border: 1px solid #ddd;
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
`;
