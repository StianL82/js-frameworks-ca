import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutButton from './index';
import { useCart } from '../../components/CartContext';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

jest.mock('../../components/CartContext', () => ({
  useCart: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

const theme = {
  color: {
    white: '#FFFFFF',
    primary: '#007BFF',
    danger: '#FF0000',
  },
};

describe('CheckoutButton', () => {
  test('renders Checkout button', () => {
    const mockClearCart = jest.fn();
    useCart.mockReturnValue({ clearCart: mockClearCart });
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <ThemeProvider theme={theme}>
        <CheckoutButton />
      </ThemeProvider>
    );

    expect(screen.getByText('Continue to Checkout')).toBeInTheDocument();
  });

  test('calls clearCart and navigates to CheckoutSuccess on click', () => {
    const mockClearCart = jest.fn();
    useCart.mockReturnValue({ clearCart: mockClearCart });
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(
      <ThemeProvider theme={theme}>
        <CheckoutButton />
      </ThemeProvider>
    );

    const button = screen.getByText('Continue to Checkout');
    fireEvent.click(button);

    expect(mockClearCart).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith('/CheckoutSuccess');
  });
});
