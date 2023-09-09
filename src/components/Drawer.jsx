import { useStore } from '../services/store'

export const Drawer = () => {
  const { cart, previewCart, togglePreviewCart } = useStore(state => state)

  return (
    <aside
      className={
        'fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (previewCart
          ? 'transition-opacity opacity-100 duration-300 translate-x-0'
          : 'transition-all opacity-0 delay-300 translate-x-full')
      }
    >
      <section
        className={
          'w-screen max-w-lg right-0 absolute bg-cyan-50 h-full shadow-xl delay-200 duration-300 ease-in-out transition-all transform ' +
          (previewCart ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <article className='relative w-screen max-w-lg pt-16 pb-10 flex flex-col overflow-y-scroll h-full'>
          <header className='p-4 font-bold text-lg text-center'>Carrito</header>
          <div className='p-4 pt-0'>
            {cart.length === 0 && <div className='text-center'>No has añadido productos a la cesta</div>}
            {cart.length > 0 && cart.map(({ product, color, storage }) => (
              <ul className='mb-2' key={product.id}>
                <li className='flex justify-center px-4 py-6 hover:bg-cyan-200 rounded-xl'>
                  <img className='w-16 h-16' src={product.imgUrl} alt='Bonnie image' />
                  <div className='pl-6 flex flex-col justify-center'>
                    <div className='text-gray-800 text-md font-semibold mb-1.5 dark:text-gray-400'>
                      {product.brand} {product.model}
                    </div>
                    <div className='text-xs text-gray-500'>{product.options.colors[color].name} - {product.options.storages[storage].name}</div>
                  </div>
                </li>
              </ul>))}
            {/* <pre className='text-red-300'>{JSON.stringify(cart, null, 2)}</pre> */}
          </div>
        </article>
      </section>
      <section
        className='w-screen h-full cursor-pointer'
        onClick={() => togglePreviewCart()}
      />
    </aside>
  )
}
