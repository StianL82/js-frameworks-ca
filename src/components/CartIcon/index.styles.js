import styled from 'styled-components';

export const CartIcon = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  .cart-badge {
    position: absolute;
    top: 15px;
    right: -10px;
    background: ${(props) => props.theme.color.secondaryColor};
    color: ${(props) => props.theme.color.buttonTextColor};
    font-size: 0.8rem;
    font-weight: bold;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 36px;
    height: 36px;
  }
`;
