import { render, screen } from '@testing-library/react'
import { it, describe } from 'vitest'
import App from './App'

describe('Test runs', () => {
  it('Shows that testing is configured ok', () => {})
  it('Render text properly', () => {
    render(<App />)
    screen.getByText('Front-end test')
  })
})
