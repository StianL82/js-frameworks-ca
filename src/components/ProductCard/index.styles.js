// Styles for ProductCard
// Card.styles.js
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const DiscountedPrice = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
  color: red;
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #0056b3;
  }
`;
