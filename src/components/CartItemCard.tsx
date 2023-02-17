import Card from "./Card"

function CartItemCard({ product, quantity, totalPrice }:CartItem) {
    return (
        <Card className="cart-item">
            <Card className="cart-product">
                <p>{product.name}</p>
            </Card>
            <Card className="item-info">
                <Card>
                    <p>Quantity {quantity}</p>
                </Card>
                <Card>
                    <p>PHP {totalPrice}</p>
                </Card>
            </Card>
        </Card>
    )
}

export default CartItemCard