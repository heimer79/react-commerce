import {  XMarkIcon } from '@heroicons/react/24/solid'


import './style.css'




// Componente funcional que representa el detalle de un producto
export const ProductDetail = () => {
  return (
    // Contenedor principal del detalle del producto con clases de estilo
    <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
        {/* Encabezado del detalle del producto */}
        <div className='flex justify-between items-center p-6'>
            {/* Título del detalle del producto */}
            <h2 className='text-2xl font-medium '>Product Detail</h2>
            {/* Icono o botón de cierre */}
            <div>

                <XMarkIcon className='h-6 w-6 text-black-500 cursor-pointer' />
            </div>
        </div>
    </aside>
  )
}