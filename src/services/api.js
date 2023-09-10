export const URL_API_PRODUCTS = import.meta.env.PROD
  ? 'https://itx-frontend-test.onrender.com/api'
  : 'https://itx-frontend-test.onrender.com/api'

export const fetchProducts = async () => {
  const response = await fetch(`${URL_API_PRODUCTS}/product`)
  if (!response.ok) throw new Error('Algo ha ido mal...')
  return await response.json()
}

export const fetchProductDetail = async (productId) => {
  const response = await fetch(`${URL_API_PRODUCTS}/product/${productId}`)
  if (!response.ok) throw new Error('Algo ha ido mal...')
  return await response.json()
}

export const postCart = async ({ id, colorCode, storageCode }) => {
  const response = await fetch(`${URL_API_PRODUCTS}/cart`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ id, colorCode, storageCode })
  })
  if (!response.ok) throw new Error('Algo ha ido mal...')
  return await response.json()
}
