import { useState, useEffect } from 'react'
import ItemList from '../components/ItemList'
import { Container } from 'react-bootstrap'
import { collection, getDocs, query, where} from 'firebase/firestore';
import { db } from '../firebase/config';
import {useParams} from 'react-router-dom'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

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
                setProducts(newItems)
            })
    }, [categoryId])

    return (
        <Container fluid="md" className='mt-5 containerListItems'>
            <h1 className='tituloPLP'>Cursos disponibles</h1>
            <ItemList products={products}/>
        </Container>
    )
}

export default ItemListContainer