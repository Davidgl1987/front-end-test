import { useQuery } from '@tanstack/react-query'
import { fetchProductDetail } from '../services/api'

export const useProductDetail = (idProduct) => {
  const query = useQuery({
    queryKey: ['product', idProduct],
    queryFn: () => fetchProductDetail(idProduct)
  })
  return query
}
