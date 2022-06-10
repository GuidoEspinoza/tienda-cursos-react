import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../ItemsProducts'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

const ItemListCategoryContainer = (props) => {
    const [productsCategory, setProductsCategory] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)

        if(!categoryId) {
            getProducts().then(prods => {
                setProductsCategory(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        } else {
            getProductsByCategory(categoryId).then(prods => {
                setProductsCategory(prods)
            }).catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
        }
        
    }, [categoryId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    return(
        <Container fluid="md" className='mt-5 containerListItems'>
            <h1 className='tituloPLP'>Cursos disponibles</h1>
            <ItemList products={productsCategory}/>
        </Container>
    )
}

export default ItemListCategoryContainer