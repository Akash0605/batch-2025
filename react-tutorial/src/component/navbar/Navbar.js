import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css';

function Navbr({ isLoggedIn }) {
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <div>
            <p className={`${isLoggedIn ? 'text-green' : 'text-white'}`}>Logged in as: {isLoggedIn ? "John Doe" : "Guest"}</p>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbr;