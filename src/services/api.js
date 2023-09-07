export const URL_API_PRODUCTS = 'https://itx-frontend-test.onrender.com/api/product'
export const URL_API_PRODUCT_DETAIL = 'https://itx-frontend-test.onrender.com/api/product'

export const fetchProducts = async () => {
  let productsList = []
  try {
    const data = await fetch(URL_API_PRODUCTS)
    productsList = await data.json()
  } catch (error) {
    console.error(error)
  }
  return productsList
}

export const fetchProductDetail = async (productId) => {
  let product = null
  try {
    const data = await fetch(`${URL_API_PRODUCT_DETAIL}/${productId}`)
    product = await data.json()
  } catch (error) {
    console.error(error)
  }
  return product
}
