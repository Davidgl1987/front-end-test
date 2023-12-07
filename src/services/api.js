export const URL_API_PRODUCTS = import.meta.env.PROD
  ? 'https://itx-frontend-test.onrender.com/api'
  : 'https://itx-frontend-test.onrender.com/api'

export const fetchProducts = async () => {
  const response = await fetch(`${URL_API_PRODUCTS}/product`)
  if (!response.ok) throw new Error('Algo ha ido mal...')
  const products = await response.json()
  return products.map(product => modelApiProduct(product))
}

export const fetchProductDetail = async (productId) => {
  const response = await fetch(`${URL_API_PRODUCTS}/product/${productId}`)
  if (!response.ok) throw new Error('Algo ha ido mal...')
  const product = await response.json()
  return modelApiProductDetail(product)
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

const modelApiProduct = (product) => {
  return {
    id: product.id,
    brand: product.brand,
    model: product.model,
    price: product.price,
    imgUrl: product.imgUrl,
  }
}

const modelApiProductDetail = (product) => {
  return {
    id: product.id,
    brand: product.brand,
    model: product.model,
    price: product.price,
    imgUrl: product.imgUrl,
    cpu: product.cpu,
    ram: product.ram,
    os: product.os,
    displayResolution: product.displayResolution,
    battery: product.battery,
    primaryCamera: Array.isArray(product.primaryCamera)
      ? product.primaryCamera.join(' ')
      : product.primaryCamera,
    secondaryCamera: Array.isArray(product.secondaryCmera)
      ? product.secondaryCmera.join(' ')
      : product.secondaryCmera,
    dimentions: product.dimentions,
    weight: product.weight,
    options: {
      colors: product.options.colors.map(({ code, name }) => ({ code, name })),
      storages: product.options.storages.map(({ code, name }) => ({ code, name })),
    }
  }
}