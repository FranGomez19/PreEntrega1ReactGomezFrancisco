import { createContext, useState } from "react";


export const CartContext = createContext({
    cart: []
})

export function CartProvider({ children }) {

    const [cart, setCart] = useState([]);

    console.log(cart);


    const addProduct = (product, quantity) => {
        setCart((prevCart) => {
            // Buscamos si el producto ya existe en el carrito
            const existingProduct = prevCart.find((prod) => prod.id === product.id);
            
            if (existingProduct) {
                // Si ya existe, actualizamos su cantidad
                return prevCart.map((prod) =>
                    prod.id === product.id
                        ? { ...prod, quantity: prod.quantity + quantity }
                        : prod
                );
            } else {
                // Si no existe, lo agregamos como un nuevo producto
                return [...prevCart, { ...product, quantity }];
            }
        });
    };
    const removeProduct = (productId) => {
        const cartUpdated = cart.filter(prod => prod.id !== productId)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }
    const isInCart = (productId) => {
        return cart.some(prod => prod.id === productId)
    }
    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.precio, 0);
    };
    const cantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

    const total = precioTotal();

    return (
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct,
            clearCart,
            isInCart,
            total,
            cantidadTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}