import { useState, useEffect, createContext } from "react"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [resumen, setResumen] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0)
    // console.log(totalQuantity, 'Cantidad Total')
    // console.log(cart, 'CartContext')

    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)) {
        setCart([...cart, productToAdd])
        setResumen([...cart, productToAdd]);
      }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id) 
        setCart(cartWithoutProduct)
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ 
            cart,
            totalQuantity, 
            addItem,
            removeItem,
            isInCart,
            clearCart,
            resumen,
            setResumen,
            setCart
            // getCartQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext