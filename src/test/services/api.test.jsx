import { test, describe, expect } from 'vitest'

import { fetchProducts } from '../../services'

describe('api', () => {
  test('fetchProducts', async () => {
    const products = await fetchProducts()
    expect(products.length).toBeGreaterThan(0)
    expect(products[0]).toEqual({
      id: expect.any(String),
      brand: expect.any(String),
      model: expect.any(String),
      price: expect.any(String),
      imgUrl: expect.any(String)
    })
  })
})
