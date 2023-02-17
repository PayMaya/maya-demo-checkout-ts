import { checkoutFailed, checkoutSuccess } from "../actions/checkout/actionCreators";
import { createCheckout } from "../services/checkout";

export function createCheckoutThunk(cart: Cart, user: User) {
    return async (dispatch: any) => {
        try {
            const checkout: CheckoutTransaction = await createCheckout(cart, user)
            window.location.href = checkout?.redirectUrl
            dispatch(checkoutSuccess())
        } catch (err) {
            console.log(err)
            dispatch(checkoutFailed())
        }
        
    }
}