interface Cart {
    items: CartItem[]
    quantity: number
    totalAmount: number
}

interface Product {
    name: string,
    unitPrice: number
}

interface CartItem {
    product: Product
    quantity: number
    totalPrice: number
}

type CartAction = {
    type: string
    payload: Product
}