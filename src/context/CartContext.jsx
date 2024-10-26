import { createContext, useState } from "react";


export const CartContext = createContext({
    cart:[]
})

export function CartProvider({children}){

    const [cart, setCart] = useState([]);

    console.log(cart);
    

    const addProduct = (product, quantity) => {
        if (!isInCart(product.id)) {
            setCart(prev=>[...prev, {...product, quantity}])
        }else{
            console.error("el producto ya fue agregado")
        }
    }
    const removeProduct =(productId)=>{
        const cartUpdated = cart.filter(prod => prod.id !==productId)
        setCart(cartUpdated)
    }
    const clearCart =()=>{
        setCart([])
    }
    const isInCart = (productId)=>{
        return cart.some(prod => prod.id === productId)
    }
    const calculateTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
    };
    
    const total = calculateTotal();
    
    return(
        <CartContext.Provider value={[cart, addProduct, removeProduct, clearCart, total]}>
            {children}
        </CartContext.Provider>
    )
}