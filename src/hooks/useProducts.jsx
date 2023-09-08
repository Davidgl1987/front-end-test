import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../services/api'

export const useProducts = () => {
  const query = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts
  })
  return query
}
