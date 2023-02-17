import * as actionTypes from "./actionTypes"

export function checkoutSuccess() {
    return {
        type: actionTypes.CHECKOUT_SUCCESS
    }
}

export function checkoutFailed() {
    return {
        type: actionTypes.CHECKOUT_FAILED
    }
}
  