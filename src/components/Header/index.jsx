import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import * as S from "./index.styles";
import CartIcon from "../CartIcon";

function HeaderNav() {
  return (
    <S.StyledNavbar data-bs-theme="light" expand="sm" className="py-2">
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Toggle
          aria-controls="navbarResponsive"
          className="order-2 ms-auto"
        />
        <Navbar.Brand as={Link} to="/" className="order-1 me-auto logo">
          <S.Logo src="/images/logo.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Collapse
          id="navbarResponsive"
          className="order-3 text-center"
        >
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link me-0 me-sm-5">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link me-0 me-sm-5">
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
