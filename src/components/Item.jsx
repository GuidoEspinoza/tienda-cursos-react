import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ image, name, price, category, description }) => {
    return (
        <div className='cardContainer'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <ul>
                            <li>{description}</li>
                            <li>{category}</li>
                            <li>{price}</li>
                        </ul>
                    </Card.Text>
                    <Button variant="primary">Ver Mas</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item