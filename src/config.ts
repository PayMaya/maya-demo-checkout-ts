const config = {
    host_url: process.env.REACT_APP_HOST_URL || 'http://localhost:3000',
    path_prefix: process.env.REACT_APP_PATH_PREFIX || '/',
    maya_checkout: {
      url: 'https://pg-sandbox.paymaya.com/checkout/v1/checkouts',
      pub_api_key: process.env.REACT_APP_CHECKOUT_PUBLIC_API_KEY,
      sec_api_key: process.env.REACT_APP_CHECKOUT_SECRET_API_KEY || "not required",
    },
}
  
export default config
