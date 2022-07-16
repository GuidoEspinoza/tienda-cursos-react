import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase/config';

const ItemListCategoryContainer = () => {
    const [productsCategory, setProductsCategory] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        const productsRef = categoryId ? ( 
            query(collection(db, 'items'), where('category', '==', categoryId))
        ) : ( collection(db, 'items') )

        getDocs(productsRef)
            .then((resp)=>{
                const newItems = resp.docs.map((doc)=>{
                    return{
                        id: doc.id,
                        ...doc.data() /* Data: metodo de firestore */
                    }
                });
                // console.log("nuevosItems",newItems)
                setProductsCategory(newItems)
            }).catch(error => {
                console.log(error, 'error')
            }).finally(() => {
                setLoading(false)
            })
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