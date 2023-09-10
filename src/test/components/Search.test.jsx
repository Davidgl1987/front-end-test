import { render, screen, fireEvent } from '@testing-library/react'
import { test, describe, expect, vi } from 'vitest'
import { Search } from '../../components'

describe('Search', () => {
  const onChange = vi.fn()
  const text = 'Samsung'

  test('Snapshot', () => {
    const { container } = render(<Search onChange={onChange} />)
    expect(container).toMatchSnapshot()
  })
  test('Fire onChange event on input change', () => {
    render(<Search onChange={onChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.input(input, { target: { value: text } })
    expect(input.value).toBe(text)
    expect(onChange).toBeCalledTimes(1)
    expect(onChange).toBeCalledWith(text)
  })
})
