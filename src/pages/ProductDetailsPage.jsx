import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProductDetail } from '../services/api'
import { Actions, Breadcrumbs, Description, Image } from '../components'

export const ProductDetailsPage = () => {
  const { productId } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchProductDetail(productId)
      setProduct(() => product)
    }
    getProduct()
  }, [productId])

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
