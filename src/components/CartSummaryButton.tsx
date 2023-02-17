import { useSelector } from "react-redux"
import RedirectButton from "./RedirectButton"

function CartSummaryButton () {
    const cart: Cart = useSelector((state: AppState) => state.cart)

    return (
        <div className="nav-bar-item button-container">
            <RedirectButton display={`Cart: ${cart.quantity} items`} url={'/cart'} className="btn" />
        </div>
    )
}

export default CartSummaryButton