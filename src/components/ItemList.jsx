import { Row } from "react-bootstrap";
import Item from "./Item";

const ItemList = ({ products }) => {
    return (
        <Row xs={1} md={3} className="g-4 listItems">
            {products.map(product => <Item key={product.id} {...product} />)}
        </Row>
    )
}

export default ItemList