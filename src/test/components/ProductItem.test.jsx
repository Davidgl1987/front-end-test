import { test, describe, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ProductItem } from '../../components'

import { mockFetchProductDetails as product } from '../mock.data'

describe('ProductItem', () => {
  test('Snapshot', () => {
    const { container } = render(<ProductItem product={product} />, { wrapper: BrowserRouter })
    expect(container).toMatchSnapshot()
  })

  test('Image', () => {
    render(<ProductItem product={product} />, { wrapper: BrowserRouter })
    expect(screen.getByRole('img').src).toBe(product.imgUrl)
  })

  test('Model', () => {
    render(<ProductItem product={product} />, { wrapper: BrowserRouter })
    expect(screen.getByText(product.model)).toBeTruthy()
  })
})
