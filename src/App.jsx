import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components'
import { ProductListPage, ProductDetailsPage } from './pages'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <main className='bg-cyan-50 p-4 h-auto min-h-screen pt-20'>
        <Routes>
          <Route
            index
            element={<ProductListPage />}
          />
          <Route
            path='/product/:productId'
            element={<ProductDetailsPage />}
          />
          <Route
            path='*'
            element={<Navigate to='/' replace />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
