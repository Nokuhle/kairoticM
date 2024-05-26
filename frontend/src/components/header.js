import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export default function Header() {
  return (
    <header>
      <Navbar expand="md" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src="/images/logo.png" alt="KairoticM's Logo" className="nav-logo"/>
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <LinkContainer to="/">
                <Nav.Link>
                  <span>Home</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/Upload">
                <Nav.Link>
                  <span>Upload</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/service">
                <Nav.Link>
                  <span>Services</span>
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contacts">
                <Nav.Link>
                  <span>Contacts</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>

            <Nav>
              <LinkContainer to="/">
                <Nav.Link className="btn btn-width">
                  Sign Up
                </Nav.Link>
              </LinkContainer>

              <LinkContainer to="/">
                <Nav.Link className="btn btn-width btn-login">
                  <span className="btn-login-content">Login</span>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
