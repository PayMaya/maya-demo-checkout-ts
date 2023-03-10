# Checkout Demo App

This mini application demonstrates the use of [Maya Checkout API](https://developers.maya.ph/docs/maya-checkout)
in order to accept card and e-wallet payments.

If you want to see the relevant integration code directly, see the file [checkout.ts](src/services/checkout.ts)

This project was created with React (React Redux and Thunk) and TypeScript.

Do not build your application on top of this demo.

---

## Requirements
1. Checkout API keys (public and secret)- needed as authorization in API calls

## How to Run the Application
1. Run `npm install` to install all needed packages.
2. Run `npm start` to start the application. (see next part for note on environment variables) 

Example: 
> npm start

## Environment variables
You can set these variables in your environment, or in a `.env` file in the root directory.

| env variable                      | description                                 | default               |
|-----------------------------------|---------------------------------------------|-----------------------|
| REACT_APP_CHECKOUT_PUBLIC_API_KEY | (required) public api key                   |                       |
| REACT_APP_CHECKOUT_SECRET_API_KEY | secret api key (not needed for this demo)   |                       |
| REACT_APP_HOST_URL                | host url of the app, used for redirect urls | http://localhost:3000 |
| REACT_APP_PATH_PREFIX             | path prefix, used for redirect urls         | /                     |
| PORT                              | port that the app listens to                | 3000                  |

Example
```ini
REACT_APP_CHECKOUT_PUBLIC_API_KEY=pk-gjldkfjgkldfjgljdfglawas
REACT_APP_CHECKOUT_SECRET_API_KEY=sk-sjsdfhdsjfhsjkldfsdfhsdf
```

### Secure your API keys
Take note to not make your secret api key visible in your web/fronend environment.  It is available in this demo for demonstration purposes only, and you are expected to perform API calls using the secret api key from your application's backend.


## APIs Used
1. [Maya Checkout](https://developers.maya.ph/docs/maya-checkout) - https://pg-sandbox.paymaya.com/checkout/v1/checkouts.

## Features
1. Adding products to cart
2. Checking out products using Maya Checkout

## Codebase (`src` folder)
### **Frontend**
##### `App.tsx`
Routing / handling of React views / pages
##### `App.css`
CSS for the application
##### `src/actions`
Redux actions
##### `src/components`
Customized React components used within the application
##### `src/reducers`
Redux reducers
##### `src/thunks`
Redux thunks for handling asynchronous logic
##### `src/views`
Customized React views / pages


### **Backend**
##### `src/services`
Service files - API calls

### **Miscellaneous**
##### `src/types`
Type assertions
##### `src/utils`
Helper functions


## Additional Resources
1. [Sandbox credentials and cards that can be used during checkout](https://developers.maya.ph/reference/sandbox-credentials-and-cards)
2. [How to integrate with Maya Checkout](https://developers.maya.ph/docs/learn-how-to-integrate-maya-checkout)
3. [Using webhooks](https://developers.maya.ph/docs/receive-real-time-payment-information-using-webhooks)
