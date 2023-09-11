export const Image = ({ product }) => {
  return (
    <figure className='rounded-xl bg-white h-fit shadow-lg'>
      <img
        style={{ viewTransitionName: product.id }}
        className='h-96 w-72 my-8 mx-auto '
        src={product.imgUrl}
        alt={`Image of ${product.brand} ${product.model}`}
      />
    </figure>
  )
}
