import { Col, Row, Button } from "react-bootstrap"
import { useState, useContext } from 'react'
import ItemCount from "../components/ItemCount"
import CartContext from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({ id, name, price, category, image, description, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({ id, image, name, price, quantity})
        setQuantityAdded(quantity)
    }

    return (
        <Row className="rowContainerPDP">
            <Col className="colImgPDP" xs={12} md={6}>
                <img className="imgPDP" src={image} alt={description} />
            </Col>
            <Col className="colDetallesPDP" xs={12} md={6}>
                <Row><p className="nombreCursoPDP">Nombre del curso: <span className="nombreDetallePDP">{name}</span></p></Row>
                <Row><p className="precioCursoPDP">Precio: <span className="precioDetallePDP">{price}</span> </p></Row>
                <Row><p className="categoriaCursoPDP">Categoría: <span className="categoriaDetallePDP">{category?.replace('-', ' ')}</span></p></Row>
                <Row><p className="descripcionCursoPDP">Descripción: <span className="descripcionDetallePDP">{description}</span></p></Row>
                <Row>{ quantityAdded === 0 
                    ?  <ItemCount stock={stock} onAdd={handleOnAdd} />
                    :  <Link className="buttonEndShipping" to='/cart'><Button>Terminar compra</Button></Link>
                }</Row>
            </Col>
        </Row>
    )
}

export default ItemDetail