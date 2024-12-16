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

export const Price = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
`;

export const DiscountedPrice = styled.p`
  font-weight: bold;
  margin-bottom: 12px;
  color: red;
`;

export const Button = styled(ButtonBase)`
  background-color: ${(props) => props.theme.color.primaryColor};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.buttonHoverBg};
  }
`;
