import { Link } from 'react-router-dom'
import { CartButton } from './'

export const Header = () => {
  return (
    <header>
      <nav className='bg-cyan-600 text-white fixed w-full z-20 top-0 left-0 shadow-md'>
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='/' className='flex items-center hover:text-cyan-800 transition-all'>
            <img src='/mobile-store.svg' className='h-8 mr-3 hover:scale-110 transition-all' alt='Front-end text logo' />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>Front-end test</span>
          </Link>
          <CartButton />
        </div>
      </nav>
    </header>
  )
}
