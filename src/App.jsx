import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components'
import { ProductListPage, ProductDetailsPage } from './pages'

function App () {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        cacheTime: 60 * 60 * 1000,
        staleTime: 60 * 60 * 1000
      }
    }
  })

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Header />
        <main className='bg-yellow-50 p-4 h-auto min-h-screen pt-20'>
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
    </QueryClientProvider>
  )
}

export default App
