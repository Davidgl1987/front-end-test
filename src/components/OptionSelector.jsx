export const OptionSelector = ({ 
  label, 
  onChange, 
  selected,
  options,
 }) => {
  return (
    <div>
      <label htmlFor='small' className='block mb-2 text-sm font-medium text-gray-900'>{label}</label>
      <select
        className='block w-full p-2 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring focus:ring-cyan-600 focus:border-cyan-500 focus-visible:outline-none'
        onChange={onChange}
        name='storage'
        value={selected}
      >
        {options.map((option, i) => <option key={option.code} value={i}>{option.name}</option>)}
      </select>
    </div>
  )
}