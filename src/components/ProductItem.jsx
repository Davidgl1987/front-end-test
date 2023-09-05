import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const ProductItem = ({ product }) => {
  return (
    <div className='w-full max-w-sm bg-white  rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all'>
      <Link to={`product/${product.id}`}>
        <img className='p-8 rounded-t-lg mx-auto' src={product.imgUrl} alt='product image' />
        <div className='px-5 pb-5'>
          <h5 className='text-xl font-semibold tracking-tight text-gray-900'>{product.model}</h5>
          <span className='text-sm text-gray-500'>{product.brand}</span>
          <div className='flex items-center justify-between'>
            <span className='text-3xl font-bold text-gray-900'>{product.price}€</span>
            <div className='inline-flex items-center font-medium text-cyan-600 hover:text-cyan-800'>
              Ver más
              <svg className='w-2.5 h-2.5 ml-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 6 10'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='m1 9 4-4-4-4' />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    imgUrl: PropTypes.string,
    model: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.string
  })
}
