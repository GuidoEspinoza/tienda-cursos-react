import { useState, useEffect } from 'react'
import ItemDetail from '../components/ItemDetail'
import { useParams } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()

    useEffect(() => {
        const docRef = doc(db, "items", productId)
        getDoc(docRef)
            .then((resp) => {
                setProduct({ id: resp.id, ...resp.data() })
            })
    }, [productId])

    return (
        <Container className='containerListItems'>
            <h1 className='tituloDetalleProducto mt-5'>Detalle del producto</h1>
            <ItemDetail {...product} />
        </Container>
    )
}

export default ItemDetailContainer