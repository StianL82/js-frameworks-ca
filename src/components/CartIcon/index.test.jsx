import React from 'react';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import CartIcon from './index';

jest.mock('../CartContext', () => ({
  useCart: () => ({
    cart: [],
  }),
}));

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

const theme = {
  color: {
    dangerColor: '#ff0000',
    white: '#ffffff',
  },
};

describe('CartIcon', () => {
  test('renders Cart Icon and shows 0 items when cart is empty', () => {
    render(
      <ThemeProvider theme={theme}>
        <CartIcon />
      </ThemeProvider>
    );

    const cartImage = screen.getByAltText('Cart Icon');
    expect(cartImage).toBeInTheDocument();
    expect(cartImage).toHaveAttribute('src', '/images/cart_icon.svg');
    expect(screen.getByText('0')).toBeInTheDocument();
  });
});
