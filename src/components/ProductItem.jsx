import { SeparatorIcon } from '../icons'
import { ProductImage } from './ProductImage'
import { LinkWithTransition } from './LinkWithTransition'

export const ProductItem = ({ product }) => {
  return (
    <div
      className='w-full bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 hover:ring-4 hover:ring-cyan-600 transition-all'
    >
      <LinkWithTransition to={`product/${product.id}`} data-testid='product-item-link'>
        <ProductImage product={product} className='h-48 m-8 mx-auto relative' />
        <div className='px-5 pb-5'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>{product.model}</h5>
          <span className='text-sm text-gray-500'>{product.brand}</span>
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900'>{product.price}€</span>
            <div className='inline-flex items-center font-medium text-cyan-600 hover:text-cyan-800'>
              Ver más
              <SeparatorIcon className='text-cyan-600' />
            </div>
          </div>
        </div>
      </LinkWithTransition>
    </div>
  )
}
