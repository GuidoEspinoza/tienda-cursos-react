import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Col, Row, Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

const MiniCart = () => {

    const { cart, removeItem } = useContext(CartContext)

    // console.log(cart, 'Cart')

    return (
        <>
        <Container className="containerCart">
            {
                cart.length === 0 ?
                    <div>
                        No hay productos en tu carrito
                        <Link to={`/`}>Ir a comprar</Link>
                    </div>

                    :
                    cart.map((item) => (
                        <>
                            <Row className="rowItemCart" key={item.id}>
                                <Col><img className="imageProductCart" src={item.image} alt='' /></Col>
                                <Col><h2>{item.description}</h2></Col>
                                <Col>Precio: {item.price}</Col>
                                <Col>Cantidad: {item.quantity}</Col>
                                <Col><Button onClick={() => removeItem(item.id)}>Eliminar</Button></Col>
                            </Row>
                        </>
                        
                    ))
                    
            }
        </Container>
        </>
    )
}

export default MiniCart