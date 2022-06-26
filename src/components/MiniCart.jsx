import CartContext from "../context/CartContext"
import { useContext } from "react"
import { Col, Row, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const MiniCart = () => {

    const { cart, removeItem } = useContext(CartContext)

    console.log(cart, 'minicart')

    return (
        <>
            {
                cart.length === 0 ?
                    <div>
                        <h2>No hay productos en tu carrito</h2>
                        <br />
                        <Link to={`/`}>Ir a comprar</Link>
                    </div>
                    :
                    cart.map((item) => (
                        <>
                        <div className="itemMiniCart">
                            <Row className="itemMinicarSupRow" key={item.id}>
                                <Col><img className="imageProductMiniCart" src={item.image} alt='' /></Col>
                                <Col>
                                    <Row className="itemMinicartName"><h2>{item.name}</h2></Row>
                                    <Row className="itemMinicartPrice">Precio: {item.price}</Row>
                                </Col>
                            </Row>
                            <Row className="itemMinicartInfRow">
                                <Col className="itemMinicartQuantity">Cantidad: {item.quantity}</Col>
                                <Col className="itemMinicartRemove"><Button className="bntRemoveMinicartItem" onClick={() => removeItem(item.id)}>Eliminar</Button></Col>
                            </Row>
                        </div>
                        </>
                    ))
            }
        </>
    )
}

export default MiniCart