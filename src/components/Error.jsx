export const Error = ({ text }) => {
  return (
    <div className='flex items-center justify-center p-4 mb-4 text-sm text-red-800 border-4 border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800' role='alert'>
      <div>
        <span className='font-medium'>¡Error!</span> {text}
      </div>
    </div>

  )
}
