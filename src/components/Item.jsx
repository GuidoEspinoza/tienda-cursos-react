import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

const Item = ({ id, image, name, price, category, description }) => {
    return (
        <div className='cardContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{description}</li>
                            <li className='categoriaDetallePLP'>{category?.replace('-', ' ')}</li>
                            <li>{price}</li>
                        </ul>
                    </Card.Text>
                    <Button className='btnProductPLP' variant="primary"><Link to={`/detalle/${id}`}>Ver Más</Link></Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item