import CartWidget from "./CartWidget"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
    return (
        <div>
            <Navbar expand="lg" collapseOnSelect variant="dark">
                <Container fluid>
                <CartWidget />
                    <Navbar.Brand href="/">Cursos Guido Espinoza</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/">Quien soy</Nav.Link>
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">HTML</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">CSS</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">JS</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">React Js</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.5">Git</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">GitHub</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/">Proyectos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar