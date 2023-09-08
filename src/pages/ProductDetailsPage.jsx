import { useParams } from 'react-router-dom'
import { Actions, Breadcrumbs, Description, Error, Image, Loader } from '../components'
import { useProductDetail } from '../hooks/useProductDetail'

export const ProductDetailsPage = () => {
  const { productId } = useParams()

  const { data: product, isLoading, error } = useProductDetail(productId)

  if (isLoading) return <Loader />

  if (error) return <Error text={error.message} />

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
