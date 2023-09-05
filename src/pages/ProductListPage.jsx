import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import { ProductItem, SearchBox } from '../components'

export const ProductListPage = () => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts()
      setProducts(() => products)
    }
    getProducts()
  }, [])

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className='pb-4'>
        <SearchBox />
      </div>
      <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
