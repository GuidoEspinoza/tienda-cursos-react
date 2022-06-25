import CartContext from "../context/CartContext"
import { useContext, useState } from "react"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MiniCart = () => {

    const { cart, removeItem, getQuantity } = useContext(CartContext)

    const [miniCart, setMiniCart] = useState(cart);

    console.log(miniCart, 'minicart State')

    console.log(cart, 'minicart Context')

    const [loading] = useState(false)

    if (loading) {
        return <h1>Se esta generando su orden</h1>
    }

    if (getQuantity() === 0) {
        return (
            <h2>No hay items en el carrito</h2>
        )
    }


    return (
        <>
            {
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