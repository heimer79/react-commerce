// Importa los hooks useState y useEffect desde React.
import { useState, useEffect } from "react";

// Importa el componente Card desde el directorio ../../Components/Card.
import { Card } from "../../Components/Card";

// Importa el componente Layout desde el directorio ../../Components/Layout.
import { Layout } from "../../Components/Layout";

import { ProductDetail } from "../../Components/ProductDetail";

/**
 * Renderiza el componente Home.
 *
 * @returns {JSX.Element} El componente Home renderizado.
 */
export const Home = () => {
  // Declara un estado 'items' y una función 'setItems' para actualizar dicho estado.
  // Inicialmente, el estado 'items' es null.
  const [items, setItems] = useState(null);

  // El hook useEffect se utiliza para realizar una acción después de que el componente se monte.
  // En este caso, el código dentro de useEffect realiza una solicitud GET a una API para obtener datos.
  useEffect(() => {
    // Realiza una solicitud GET a la URL especificada para obtener productos.
    fetch('https://api.escuelajs.co/api/v1/products')
      // Convierte la respuesta de la solicitud en formato JSON.
      .then(response => response.json())
      // Una vez que los datos se han convertido a JSON, se actualiza el estado 'items' con los datos obtenidos.
      .then(data => setItems(data));
  // La lista de dependencias del useEffect está vacía, lo que significa que este efecto solo se ejecutará una vez, cuando el componente se monte.
  }, []);

  // Retorna el JSX que define la estructura del componente Home.
  return (
    <>
      {/* Renderiza el componente Layout, que posiblemente define la estructura general de la página. */}
      <Layout>
        {/* Muestra la palabra 'Home' dentro del Layout */}
        Home
        {/* Define una cuadrícula para mostrar los elementos obtenidos de la API. */}
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
          {/* Itera sobre el array 'items' utilizando map, y para cada item, renderiza un componente Card. */}
          {items?.map((item) => {
            // Cada componente Card recibe una 'key' única basada en el 'id' del producto y los datos del producto se pasan como props.
            return <Card key={item.id} data={item} />;
          })}
        </div>
        <ProductDetail />
      </Layout>
    </>
  );
};
