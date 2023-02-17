import { useSelector } from "react-redux"
import Card from "./Card"
import CartItemCard from "./CartItemCard"

function CartList() {
    const cart: Cart = useSelector((state: AppState) => state.cart)

    return(
        <Card className="cart-list">
            { cart.items.map((item,index) => (
                <CartItemCard key={index} product={item.product} quantity={item.quantity} totalPrice={item.totalPrice} />
            ))}
            <Card className="cart-total">
                Total PHP {cart.totalAmount}
            </Card>
        </Card>
    )
}

export default CartList