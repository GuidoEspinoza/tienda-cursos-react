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
                            <NavDropdown title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/categoria/desarrollo-web">Desarrollo Web</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/categoria/programacion">Programación</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/categoria/control-de-versiones">Control de Versiones</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/cursos">Todos los cursos</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar