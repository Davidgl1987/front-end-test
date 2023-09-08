export const URL_API_PRODUCTS = 'https://itx-frontend-test.onrender.com/api/product'
export const URL_API_PRODUCT_DETAIL = 'https://itx-frontend-test.onrender.com/api/product'

export const fetchProducts = async () => {
  const response = await fetch(URL_API_PRODUCTS)
  if (!response.ok) { throw new Error('Algo ha ido mal...') }
  return await response.json()
}

export const fetchProductDetail = async (productId) => {
  const response = await fetch(`${URL_API_PRODUCT_DETAIL}/${productId}`)
  if (!response.ok) throw new Error('Algo ha ido mal...')
  return await response.json()
}
