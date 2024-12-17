import styled from 'styled-components';

export const CartIcon = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    color 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  .cart-badge {
    position: absolute;
    top: 15px;
    right: -10px;
    background: ${(props) => props.theme.color.dangerColor};
    color: ${(props) => props.theme.color.white};
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
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
