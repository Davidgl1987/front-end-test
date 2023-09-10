import { vi, test, describe, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

import { ProductListPage } from '../../pages'
import { useProducts } from '../../hooks'
import { mockFetchProducts as data } from '../mock.data'

vi.mock('../../hooks/useProducts')

describe('ProductListPage', () => {
  test('Show loader', () => {
    useProducts.mockReturnValue({
      data: undefined,
      isLoading: true
    })
    render(<ProductListPage />)
    expect(screen.getByText('Loading...'))
  })

  test('Show images of products', () => {
    useProducts.mockReturnValue({ data, isLoading: false })
    render(<ProductListPage />, { wrapper: BrowserRouter })
    expect(screen.getAllByRole('img').length).toBe(2)
  })

  test('Filter images', () => {
    useProducts.mockReturnValue({ data, isLoading: false })
    render(<ProductListPage />, { wrapper: BrowserRouter })
    expect(screen.getAllByRole('img').length).toBe(2)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: 'Samsung' } })
    expect(screen.getAllByRole('img').length).toBe(1)
  })

  test('Link is formed ok', () => {
    render(<ProductListPage />, { wrapper: BrowserRouter })
    useProducts.mockReturnValue({ data, isLoading: false })
    const link = screen.getAllByTestId('product-item-link')[0]
    expect(link.href).toBe(`${window.location.origin}/product/${data[0].id}`)
  })
})
