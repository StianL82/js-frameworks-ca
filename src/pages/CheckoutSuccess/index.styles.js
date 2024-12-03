import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ffc107;
  color: #fff;
  border-radius: 0.25rem;
  display: inline-flex;
  justify-content: center;
  border: 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 1rem auto;
  font-weight: bold;

  &:hover {
    background-color: #e0a800;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.color.textColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
