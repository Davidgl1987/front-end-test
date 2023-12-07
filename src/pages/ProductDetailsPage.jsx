import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Actions, Breadcrumbs, Description, Image, Loader } from '../components'
import { useProductDetail } from '../hooks/useProductDetail'

export const ProductDetailsPage = () => {
  const { productId } = useParams()

  const { data: product, isLoading, error } = useProductDetail(productId)

  if (isLoading) return <Loader />

  if (error) toast.error(`Error: ${error.message}`)

  return (
    <div className='max-w-screen-xl mx-auto p-4'>
      <Breadcrumbs breadcrumbs={[{ name: 'Home', url: '/' }, { name: `${product.model}` }]} />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <div className='rounded-xl bg-white h-fit shadow-lg'>
          <Image product={product} className='h-96 w-72 my-8 mx-auto' />
        </div>
        <div>
          <Description product={product} />
          <Actions product={product} />
        </div>
      </div>
    </div>
  )
}
