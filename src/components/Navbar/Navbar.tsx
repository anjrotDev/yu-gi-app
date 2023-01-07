import React from "react";
import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

export const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Yu-Gi-App!!</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
