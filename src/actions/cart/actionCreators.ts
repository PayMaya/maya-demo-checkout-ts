import * as actionTypes from "./actionTypes"

export function addToCart(payload: Product) {
    return {
        type: actionTypes.ADD_TO_CART,
        payload
    }
}
  
export function clearCart() {
    return {
        type: actionTypes.CLEAR_CART
    }
}