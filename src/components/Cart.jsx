import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Col, Row, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const Cart = () => {

    const { cart, removeItem, isInCart } = useContext(CartContext)

    // console.log(cart, 'cart')
    console.log(isInCart, 'isInCart')

    return (
        <>
             {
                cart.length === 0 ?
                    <div>
                        No hay productos en tu carrito
                        <Link to={`/`}>Ir a comprar</Link>
                    </div>

                    :
                    cart.forEach((item) => (
                        <>
                        <Container>
                            <Row>
                                <Col><img className="imageProductMiniCart" src={item.image} alt='' /></Col>
                                <Col>
                                    <Row><h2>{item.name}</h2></Row>
                                    <Row>Precio: {item.price}</Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Cantidad: {item.quantity}</Col>
                                <Col><Button onClick={removeItem(item.id)}>Eliminar</Button></Col>
                            </Row>
                        </Container>
                        </>
                    ))
            }
        </>
    )
}

export default Cart