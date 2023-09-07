import { CartIcon } from '../icons'

export const Actions = ({ product }) => {
  return (
    <div className='rounded-xl bg-white shadow-lg mb-4'>
      <ul>
        <li className='w-full px-4 py-2 sm:grid sm:grid-cols-2 sm:gap-x-4'>
          <div>
            <label htmlFor='small' className='block mb-2 text-sm font-medium text-gray-900'>Color</label>
            <select className='block w-full p-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring focus:ring-cyan-600 focus:border-cyan-500 focus-visible:outline-none'>
              {product.options.colors.map(color => <option key={color.code}>{color.name}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor='small' className='block mb-2 text-sm font-medium text-gray-900'>Almacenamiento</label>
            <select className='block w-full p-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring focus:ring-cyan-600 focus:border-cyan-500 focus-visible:outline-none'>
              {product.options.storages.map(storage => <option key={storage.code}>{storage.name}</option>)}
            </select>
          </div>
          <button className='w-full p-2 mb-2 text-lg font-bold text-white text-center inline-flex items-center justify-center bg-cyan-700 rounded-lg hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 transition-all sm:col-span-2'>
            <CartIcon className='text-white w-4 h-4 mr-2' /> Añadir al carrito
          </button>
        </li>
      </ul>
    </div>
  )
}
