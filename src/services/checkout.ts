import axios from 'axios';
import config from '../config';
import { v4 as uuidv4 } from 'uuid';
import { Buffer } from 'buffer';

const mayaCheckoutUrl: string = config.maya_checkout.url
const hostUrl: string = config.host_url
const token: string = Buffer.from(`${config.maya_checkout.pub_api_key}:`, 'binary').toString('base64')
const requestReferenceNumber: string = uuidv4() // generated rrn

export const createCheckout = async (cart: Cart, buyer: User) => {
    const req: CheckoutRequest = {
        totalAmount: {
            currency: 'PHP',
            value: cart.totalAmount
        },
        items: cart.items.map((item): CheckoutItem => ({
            amount: {
                value: item.product.unitPrice,
                details: {
                    subtotal: item.product.unitPrice
                }
            },
            totalAmount: {
                value: item.totalPrice
            },
            name: item.product.name,
            quantity: item.quantity
        })),

        /*
            ! Note:

            After your redirect page loads, you can use the "Retrieve Payment via RRN"
            API to retrieve real-time information about the transaction.

            see: https://developers.maya.ph/reference/getpaymentviarequestreferencenumber-1
         */
        redirectUrl: {
            success: `${hostUrl}/purchase/success?id=${requestReferenceNumber}`,
            failure: `${hostUrl}/purchase/failed?id=${requestReferenceNumber}`,
            cancel: `${hostUrl}/purchase/canceled?id=${requestReferenceNumber}`
        },

        buyer: {
            firstName: buyer.firstName,
            lastName: buyer.lastName
        },
        requestReferenceNumber
    }

    const headers = {
        accept: 'application/json',
        authorization: `Basic ${token}`,
        'content-type': 'application/json'
    }

    /*
        ! Note:

        You may want to save the checkoutId returned from this API call, as well as the
        requestReferenceNumber you gave the request, to be able to look them up later when
        you implement the webhooks.

        see: https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks
        for more information on webhooks
     */
    const response = await axios.post(`${mayaCheckoutUrl}`, req, { headers })
    const checkout: CheckoutTransaction = response.data
    return checkout
}