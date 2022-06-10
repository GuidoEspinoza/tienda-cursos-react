import { useState, useEffect } from 'react'
import { getProducts } from '../ItemsProducts'
import ItemList from '../components/ItemList'
import { Container } from 'react-bootstrap'


const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <Container fluid="md" className='mt-5 containerListItems'>
            <h1 className='tituloPLP'>Cursos disponibles</h1>
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer