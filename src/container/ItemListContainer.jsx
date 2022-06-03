import { useState, useEffect } from 'react'
import { getProducts } from '../ItemsProducts'
import ItemList from '../components/ItemList'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return (
        <div>
            <h1 className='Titulo'>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer