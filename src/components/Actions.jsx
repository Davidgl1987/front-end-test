import { useRef } from 'react'
import { toast } from 'react-hot-toast'
import { CartIcon } from '../icons'
import { useStore } from '../services'
import { useCart } from '../hooks'
import { OptionSelector } from './OptionSelector'

export const Actions = ({ product }) => {

  const cartProduct = useRef({
    product,
    color: 0,
    storage: 0
  })

  const { addToCart } = useStore(state => state)

  const { mutateAsync } = useCart()

  const handleOnChange = ({ target }) => {
    cartProduct.current = { ...cartProduct.current, [target.name]: target.value }
  }

  const onAddToCart = () => {
    const { color, storage, product } = cartProduct.current
    const colorCode = product.options.colors[color].code
    const storageCode = product.options.storages[storage].code
    mutateAsync({ id: product.id, colorCode, storageCode })
      .then(response => {
        console.log({ response })
        addToCart(cartProduct.current)
        toast.success('Producto añadido correctamente')
      })
      .catch(error => {
        toast.error(`Error: ${error.message}`)
      })
  }

  return (
    <div className='rounded-xl bg-white shadow-lg mb-4'>
      <ul>
        <li className='w-full px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-x-4'>
          <OptionSelector
            label='Color'
            name={'color'}
            onChange={handleOnChange}
            selected={cartProduct.colorCode}
            options={product.options.colors}
          />
          <OptionSelector
            label='Almacenamiento'
            name={'storage'}
            onChange={handleOnChange}
            selected={cartProduct.storageCode}
            options={product.options.storages}
          />
          <button
            className='w-full p-2 mb-2 text-lg font-bold text-white text-center inline-flex items-center justify-center bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 transition-all sm:col-span-2'
            onClick={onAddToCart}
          >
            <CartIcon className='text-white w-4 h-4 mr-2' /> Añadir al carrito
          </button>
        </li>
      </ul>
    </div>
  )
}
