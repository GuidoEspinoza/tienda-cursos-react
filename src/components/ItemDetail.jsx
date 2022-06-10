import { Col, Row, Button } from "react-bootstrap"
import { getProducts } from '../ItemsProducts'

const ItemDetail = ({ id, name, price, category, image, description }) => {

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
                <Row className="rowBtnCursoPDP"><Button className="btnCursoPDP">Comprar</Button></Row>
            </Col>
        </Row>
    )
}

export default ItemDetail