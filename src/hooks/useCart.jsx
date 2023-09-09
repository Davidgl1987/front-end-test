import { useMutation } from '@tanstack/react-query'
import { postCart } from '../services/api'

export const useCart = () => {
  const mutation = useMutation(postCart, {
    onSuccess: data => {
      console.log('La llamada siempre devuelve:')
      console.log(data)
      console.log('Según los requerimientos no se podría añadir más productos al carrito')
      console.log('Yo prefiero dejar que se metan más para tener una experiencia más parecida a una tienda normal')
    }
  })
  return mutation
}
