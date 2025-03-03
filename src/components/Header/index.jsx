import React, { useState, useEffect, useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import * as S from './index.styles';
import CartIcon from '../CartIcon';

/**
 * HeaderNav Component
 *
 * Displays the navigation bar with links to different pages and a cart icon.
 * The navbar is responsive and collapses on smaller screens.
 *
 * @component
 * @returns {JSX.Element} The rendered HeaderNav component.
 *
 * @state {boolean} isExpanded - Controls whether the navigation menu is expanded.
 * @ref {Object} navRef - Reference to the navigation container for detecting clicks outside.
 *
 * @effect Adds and removes an event listener to close the menu when clicking outside.
 */

function HeaderNav() {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsExpanded(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.StyledNavbar
      data-bs-theme="light"
      expand="sm"
      className="py-2"
      expanded={isExpanded}
      onToggle={() => setIsExpanded(!isExpanded)}
      ref={navRef}
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          className="order-2 ms-auto"
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Navbar.Brand as={NavLink} to="/" className="order-1 me-auto logo">
          <S.Logo src="/images/logo.png" alt="Logo for Spendit" />
        </Navbar.Brand>
        <Navbar.Collapse id="navbarResponsive" className="order-3 text-center">
          <Nav className="ms-auto">
            <Nav.Link
              as={NavLink}
              to="/"
              className="nav-link me-0 me-sm-5"
              onClick={() => setIsExpanded(false)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link me-0 me-sm-5"
              onClick={() => setIsExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
          <CartIcon />
        </Navbar.Collapse>
      </Container>
    </S.StyledNavbar>
  );
}

export default HeaderNav;
