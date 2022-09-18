/* import { createContext, useContext, useState } from "react"

const CartContext = createContext() // Context is defined

export const useCartContext = () => useContext(CartContext) // UseCOntext call thhe context to be


const CartContextProvider = ({children}) => {  // We need to add a parameter for the children in order to be able to call a children in the parameter to use the values of the context
    
    const [cartItems, setcartItems] = useState([])

    const isInCart = (item) => { // This checks if an item is already in the cart in order to not duplicate it
        item.some((searched) => searched.id === item.id)
    }

    const addToCart = (item) => { // This adds the item in the cart
        if(isInCart(item)) {
            return console.log( 'This item is already in the cart');
        }

        const quantity = counter
        const price = 1
        const itemInCart = {...item, quantity}
        setcartItems([...item, itemInCart])
        console.log("Item added to cart")
    }

    const removeFromCart = (item) => {
        const removeFromCart = item.filter((searched) => searched.id !== item.id)
        return setcartItems(removeFromCart)
    }

    const clearCart = () => {
        setcartItems([])
    }

    const calculateTotal = () => {
        const calculateTotal = cartItems.price.reduce((acum,item) => (item.price * item.quantity) + acum, 0 )
        return calculateTotal
    }




  return (
    <CartContext.Provider value={{isInCart, addToCart, removeFromCart, clearCart, calculateTotal}}>{children}</CartContext.Provider> // We return the provider here to set all the values (actions) to use in other children
  )
}
export default CartContextProvider */