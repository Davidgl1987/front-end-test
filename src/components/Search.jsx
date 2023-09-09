import { SearchIcon } from '../icons'

export const Search = ({ onChange }) => {
  return (
    <div className='relative'>
      <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
        <SearchIcon className='text-gray-600' />
      </div>
      <input
        type='text'
        className='w-full p-4 pl-10 text-sm text-gray-900 rounded-xl shadow-lg bg-gray-50 focus:ring focus:ring-cyan-600 focus:border-cyan-500 focus-visible:outline-none transition-all'
        placeholder='Acer, Tab, Alcatel...'
        onChange={({ target }) => onChange(target.value)}
      />
    </div>
  )
}
