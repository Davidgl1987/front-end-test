import { useEffect, useState } from 'react'
import { fetchProducts } from '../services/api'
import { Breadcrumbs, ProductItem, Search } from '../components'

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
      <div className='md:grid md:gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <div className='mb-4 md:col-span-2 lg:col-span-3'>
          <Breadcrumbs breadcrumbs={[{ name: 'Home' }]} />
        </div>
        <div className='mb-4 col-span-1'>
          {/* <div className='lg:w-1/4 lg:pl-4 md:w-1/3 md:pl-3 w-full '> */}
          <Search />
          {/* </div> */}
        </div>
      </div>
      <div className='grid justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4'>
        {products.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
