
import { useContext } from "react"; // 
import { ShopContext } from "../../Context"; // Importa el contexto 'ShopContext' para poder acceder a él.
import { PlusIcon } from "@heroicons/react/24/solid";


// Declara y exporta el componente 'Card'.
// Recibe 'data' como un prop, que contiene los datos necesarios para renderizar el contenido del componente.
export const Card = (data) => {
  const context = useContext(ShopContext) //
  // Retorna el JSX que define la estructura del componente Card.
  return (
    // Contenedor principal de la tarjeta con estilos aplicados, como color de fondo, cursor, tamaño, y bordes redondeados.
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg"
     onClick={() => context.openProductDetail()}
    >
      {/* Figura que contiene la imagen y la etiqueta de la categoría. */}
      <figure className="relative mb-2 w-full h-4/5">
        {/* Etiqueta para mostrar el nombre de la categoría.
             Se posiciona en la parte inferior izquierda, con fondo semitransparente y bordes redondeados. */}
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {data.data.category.name}
        </span>
        {/* Imagen del producto, cubre todo el espacio disponible en la figura con bordes redondeados. */}
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data.images[0]} // Utiliza la primera imagen del array de imágenes del producto.
          alt={data.data.title} // El atributo alt se establece en el título del producto para accesibilidad.
        />
        {/* Icono '+' en la esquina superior derecha de la figura. 
             Está dentro de un contenedor circular blanco. */}
        <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
        onClick={() => context.setCount(context.count + 1)}
        >
          <PlusIcon className="h-4 w-4 text-black" />
        </div>
      </figure>
      {/* Contenedor para mostrar el título del producto y el precio. 
           Los elementos están distribuidos horizontalmente con espacio entre ellos. */}
      <p className="flex justify-between">
        {/* Muestra el título del producto con un estilo de texto pequeño y ligero. */}
        <span className="text-sm font-light">{data.data.title}</span>
        {/* Muestra el precio del producto con un tamaño de texto mediano y estilo de fuente más pesado. */}
        <span className="text-lm font-medium">${data.data.price}</span>
      </p>
    </div>
  );
};
