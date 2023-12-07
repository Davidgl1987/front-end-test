export const ProductImage = ({ product, className }) => {
  return (
    <img
      className={className}
      style={{ viewTransitionName: product.id }}
      src={product.imgUrl}
      alt={`Image of ${product.brand} ${product.model}`}
    />
  )
}
