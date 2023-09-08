import { Breadcrumbs, ProductItem, Search } from '../components'
import { useProducts } from '../hooks'

export const ProductListPage = () => {
  const { data: products, isLoading, error } = useProducts()

  if (isLoading) return <div>loading...</div>

  if (error) return <div>Error</div>

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <div className='md:grid md:gap-4 md:grid-cols-3 lg:grid-cols-4'>
        <div className='mb-4 md:col-span-2 lg:col-span-3'>
          <Breadcrumbs breadcrumbs={[{ name: 'Home' }]} />
        </div>
        <div className='mb-4 col-span-1'>
          <Search />
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
