"use client";

import Link from "next/link";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  return (
    <Navbar
      bg="primary"
      variant="dark"
      sticky="top"
      expand="sm"
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} href="/">
          NextJS image gallery
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav>
            <Nav.Link as={Link} active={pathname === "/static"} href="/static">
              static image
            </Nav.Link>
            <Nav.Link
              as={Link}
              active={pathname === "/dynamic"}
              href="/dynamic"
            >
              dynamic image
            </Nav.Link>
            <Nav.Link as={Link} active={pathname === "/isr"} href="/isr">
              isr image
            </Nav.Link>
            <NavDropdown title="Topics" id="topic-dropdown">
              <NavDropdown.Item as={Link} href="/topics/health">
                health
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/fitness">
                fitness
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/topics/coding">
                coding
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
