import { render, screen } from '@testing-library/react'
import { test, describe } from 'vitest'

import App from '../App'

describe('App', () => {
  test('Shows that testing is configured ok', () => {
    render(<App />)
  })

  test('Render header', () => {
    render(<App />)
    screen.getByText('Front-end test')
  })
})
