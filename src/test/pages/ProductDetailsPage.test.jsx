import { test, describe, vi, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { useProductDetail, useCart } from '../../hooks'
import { ProductDetailsPage } from '../../pages'
import { mockFetchProductDetails as data } from '../mock.data'

vi.mock('../../hooks/useProductDetail')
vi.mock('../../hooks/useCart')

describe('ProductDetailsPage', () => {
  test('Show loader', () => {
    useProductDetail.mockReturnValue({
      data: undefined,
      isLoading: true
    })
    render(<ProductDetailsPage />)
    expect(screen.getByText('Loading...'))
  })

  test('Show details', () => {
    useProductDetail.mockReturnValue({ data, isLoading: false })
    useCart.mockReturnValue({ mutateAsync: () => {} })
    render(<ProductDetailsPage />, { wrapper: BrowserRouter })
    expect(screen.getAllByRole('img').length).toBe(1)
    expect(screen.getByText(data.brand))
    expect(screen.getByText('Añadir al carrito'))
  })
})
