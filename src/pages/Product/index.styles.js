import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #d6d6d6 0%, rgba(217, 217, 217, 0) 100%);
  padding: 40px;
  color: ${(props) => props.theme.color.white};
`;

export const BackLink = styled(Link)`
  color: ${(props) => props.theme.color.darkGray};
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
    color: ${(props) => props.theme.color.primaryColor};
  }

  svg {
    margin-right: 8px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 70%;
    max-width: 80vw;
    margin: 0 auto;
    display: block;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: red;
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

export const GradientContainer = styled.div`
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  background: linear-gradient(180deg, #d6d6d6 0%, rgba(217, 217, 217, 0) 100%);
  padding: 20px;
`;

export const ReviewContainer = styled.div`
  background: ${(props) => props.theme.color.white};
  border: 1px solid ${(props) => props.theme.color.mediumGray};
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
`;

export const ProductDetailsContainer = styled.div`
  display: flex;
  gap: 24px;
  margin: 24px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductInfo = styled.div`
  flex-grow: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const SaveText = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.color.successColor};
  margin-top: 8px;
  font-weight: bold;
`;
