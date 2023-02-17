import { addToCart, clearCart } from "../actions/cart/actionCreators";

export function addToCartThunk(payload: Product) {
    return (dispatch: any) => dispatch(addToCart(payload))
}

export function clearCartThunk() {
    return (dispatch: any) => dispatch(clearCart())
}