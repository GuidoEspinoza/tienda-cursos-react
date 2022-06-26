import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from "react-bootstrap/NavDropdown"
import logoCheems from '../assets/img/Cheems.png'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
            <Navbar expand="lg" collapseOnSelect variant="dark">
                <Container fluid>
                    <div className='iconoNavbar'>
                        <img src={logoCheems} alt="logo" />
                    </div>
                    <Navbar.Brand className='titleNavbar'><Link to={'/'}>Cursos Guido Espinoza</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='itemHomeNavbar'><Link to={'/'}>Home</Link></Nav.Link>
                            <NavDropdown className='itemCursosNavbar' title="Cursos" id="basic-nav-dropdown">
                                <NavDropdown.Item><Link to={'/categoria/desarrollo-web'}>Desarrollo Web</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to={'/categoria/programacion'}>Programación</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to={'/categoria/control-de-versiones'}>Control de Versiones</Link></NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item><Link to={'/cursos'}>Todos los Cursos</Link></NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
    )
}

export default NavBar