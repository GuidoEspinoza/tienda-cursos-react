import CartContext from "../context/CartContext"
import { useContext, useState } from "react"
import logoCarrito from "../assets/img/carrito-de-compras.png"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'
import MiniCart from "./MiniCart";

const CartWidget = () => {

    const { totalQuantity, clearCart } = useContext(CartContext)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                <img src={logoCarrito} alt='cart' className='CartImg' />
                <span>{totalQuantity}</span>
            </Button>
            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Carrito de Compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <MiniCart />
                    <Button onClick={clearCart}>Limpiar Carrito</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );

}

export default CartWidget