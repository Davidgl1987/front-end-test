import { Fragment } from 'react'

export const Description = ({ product }) => {
  return (
    <div className='rounded-xl bg-white shadow-lg mb-4'>
      <ul>
        <li className='w-full px-4 py-2 border-b border-gray-200'>
          <h3 className='mb-2 text-2xl font-bold text-gray-900'>{product.model}</h3>
          <p className='mb-2 text-gray-500'>{product.brand}</p>
        </li>
        <li className='w-full px-4 py-2 border-b border-gray-200'>
          <h2 className='mb-2 text-3xl font-extrabold tracking-tight text-cyan-700'>{product.price}€</h2>
        </li>
        <li className='w-full border-gray-200 text-sm'>
          <table>
            <tbody>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>CPU</td>
                <td className='px-3'>{product.cpu}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>RAM</td>
                <td className='px-3'>{product.ram}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Sistema operativo</td>
                <td className='px-3'>{product.os}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Resolución de pantalla</td>
                <td className='px-3'>{product.displayResolution}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Batería</td>
                <td className='px-3'>{product.battery}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Cámara principal</td>
                <td className='px-3'>{product.primaryCamera.map((cam, i) => <Fragment key={i}>{cam}&nbsp;</Fragment>)}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Cámara secundaria</td>
                <td className='px-3'>{product.secondaryCmera.map((cam, i) => <Fragment key={i}>{cam}&nbsp;</Fragment>)}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1'>Dimensiones</td>
                <td className='px-3'>{product.dimentions}</td>
              </tr>
              <tr>
                <td className='bg-gray-100 px-3 py-1 rounded-bl-xl'>Peso</td>
                <td className='px-3'>{product.weight}</td>
              </tr>
            </tbody>
          </table>
        </li>
      </ul>
    </div>
  )
}
