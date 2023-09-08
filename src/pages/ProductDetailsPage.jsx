import { useParams } from 'react-router-dom'
import { Actions, Breadcrumbs, Description, Image } from '../components'
import { useProductDetail } from '../hooks/useProductDetail'

export const ProductDetailsPage = () => {
  const { productId } = useParams()

  const { data: product, isLoading, error } = useProductDetail(productId)

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Error</div>

  if (!product) return <div>No hay producto</div>

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <Breadcrumbs breadcrumbs={[{ name: 'Home', url: '/' }, { name: `${product.model}` }]} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <Image product={product} />
        <div>
          <Description product={product} />
          <Actions product={product} />
        </div>
      </div>
    </div>
  )
}
