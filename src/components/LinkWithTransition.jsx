import { flushSync } from 'react-dom'
import { useNavigate } from 'react-router-dom'

export const LinkWithTransition = ({ children, to, ...props }) => {
  const navigate = useNavigate()
  const handleClick = (event) => {
    event.preventDefault()
    document.startViewTransition(() => {
      flushSync(() => {
        navigate(to)
      })
    })
  }
  return (
    <a
      {...props}
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  )
}
