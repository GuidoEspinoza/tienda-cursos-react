import { useState, useEffect} from 'react'
import { getProductById } from '../ItemsProducts'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return (
        <Container className='containerListItems'>
            <h1 className='tituloDetalleProducto mt-5'>Detalle del producto</h1>
            <ItemDetail {...product}/>
        </Container>
    )
}

export default ItemDetailContainer