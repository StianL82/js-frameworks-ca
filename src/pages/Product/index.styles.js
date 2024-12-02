import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderSection = styled.div`
  width: 100%;
  background: linear-gradient(180deg, #d6d6d6 0%, rgba(217, 217, 217, 0) 100%);
  padding: 40px;
  color: #fff;
`;

export const BackLink = styled(Link)`
  color: #333;
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
`;

export const OriginalPrice = styled.span`
  font-size: 1rem;
  color: red;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.color.textColor};
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
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 16px;
`;
