type CheckoutTransaction = {
    checkoutId: string
    redirectUrl: string
}

type CheckoutRequest = {
    totalAmount: {
        value: number
        currency: string
        details?: AmountDetails
    }
    buyer?: {
        firstName?: string
        middleName?: string
        lastName?: string
        birthday?: string
        customerSince?: string
        sex?: string
        contact?: Contact
        billingAddress?: Address
        shippingAddress?: ShippingAddress
    }
    items?: CheckoutItem[]
    redirectUrl?: {
        success: string
        failure: string
        cancel: string
    }
    requestReferenceNumber: string
    
}

// sub types
type AmountDetails = {
    subtotal?: number
    discount?: number
    serviceCharge?: number
    shippingFee?: number
    tax?: number 
}

type Contact = {
    phone?: string
    email?: string
}

type Address = {
    line1?: string
    line2?: string
    city?: string
    state?: string
    zipCode?: string
    countryCode?: string
    shippingType?: string
}

interface ShippingAddress extends Address {
    firstName?: string
    middleName?: string
    lastName?: string
    phone?: string
    email?: string
}

type CheckoutItem = {
    name: string
    quantity?: number
    code?: string
    description?: string
    amount: {
        value: number
        details?: AmountDetails
    }
    totalAmount: {
        value: number
        details?: AmountDetails
    }
}