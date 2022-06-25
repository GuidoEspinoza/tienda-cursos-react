import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MiniCart = () => {

    const { cart, removeItem, isInCart } = useContext(CartContext)

    console.log(cart, 'minicart')
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
                        </>
                    ))
            }
        </>
    )
}

export default MiniCart