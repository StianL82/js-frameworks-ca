import styled from 'styled-components';
import { ButtonBase } from '../../styles/GlobalStyle';

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.color.lightGray};
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  background-color: ${(props) => props.theme.color.white};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.1s ease,
    box-shadow 0.1s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.12);
    text-decoration: none;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.2rem;
  margin-bottom: 12px;
  color: ${(props) => props.theme.color.darkGray};
`;

export const Image = styled.img`
  width: 100%;
  height: 250px;
  max-height: 250px;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const OriginalPrice = styled.span`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: ${(props) => props.theme.color.dangerColor};
`;

export const DiscountedPrice = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
`;

export const Button = styled(ButtonBase)`
  background-color: ${(props) => props.theme.color.primaryColor || "#007bff"} !important;
  color: ${(props) => props.theme.color.white || "#ffffff"} !important;
  border: none;

  &:hover {
    background-color: ${(props) => props.theme.color.buttonHoverBg || "#0056b3"} !important;
    color: ${(props) => props.theme.color.white || "#ffffff"} !important;
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme.color.primaryColor || "#0056b3"} !important;
    outline-offset: 2px;
  }
`;


