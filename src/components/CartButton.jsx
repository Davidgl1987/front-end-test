import { CartIcon } from '../icons'

export const CartButton = () => {
  return (
    <button type='button' className='bg-cyan-700 hover:bg-cyan-800 transition-all hover:scale-110 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 relative'>
      <CartIcon className='text-white' />
      {/* <div className='absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full -top-2 -right-2'>1</div> */}
    </button>
  )
}
