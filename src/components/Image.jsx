export const Image = ({ product }) => {
  return (
    <figure className='rounded-xl bg-white h-fit shadow-lg'>
      <img
        className='w-2/3 mx-auto p-8'
        src={product.imgUrl}
        alt={`Image of ${product.brand} ${product.model}`}
      />
    </figure>
  )
}
