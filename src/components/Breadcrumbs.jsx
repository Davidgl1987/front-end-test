import { Link } from 'react-router-dom'
import { HomeIcon, SeparatorIcon } from '../icons'

export const Breadcrumbs = ({ breadcrumbs }) => {
  return (
    <nav className='flex py-4' aria-label='Breadcrumb'>
      <ol className='inline-flex items-center space-x-1 md:space-x-3'>
        {breadcrumbs.map((breadcrumb, i) => (
          <li key={i}>
            <Link to={breadcrumb.url} className='inline-flex items-center text-sm font-medium text-gray-600 hover:text-cyan-600 dark:text-gray-400 dark:hover:text-white'>
              {i === 0 ? <HomeIcon /> : <SeparatorIcon />}
              <div className='ml-1 text-sm font-medium text-gray-600 hover:text-cyan-600 md:ml-2 dark:text-gray-400 dark:hover:text-white'>{breadcrumb.name}</div>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}
