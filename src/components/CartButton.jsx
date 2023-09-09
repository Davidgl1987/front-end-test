import { CartIcon } from '../icons'
import { useStore } from '../services/store'

export const CartButton = () => {
  const cart = useStore(state => state.cart)
  return (
    <>
      <button
        className='bg-cyan-700 hover:bg-cyan-800 transition-all hover:scale-110 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 relative'
        type='button'
      >
        <CartIcon className='text-white' />
        {cart.length > 0 && <div className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2'>{cart.length}</div>}
      </button>
    </>
  )
}
