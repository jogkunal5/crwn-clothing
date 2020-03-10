export const addItemToCart = (cartItems, cartItemToAdd) => {

    // finding whether cart item are already exist by checking its id
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    // If item already exists then just increase the quantity by 1
    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
    }

    // quantity property gets attached first time around since this block won't run when its a new item
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

}