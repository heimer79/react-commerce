// Importa las funciones createContext y useState desde la librería 'react'
import { createContext, useState } from 'react';

// Importa PropTypes desde la librería 'prop-types' para validar los props
import PropTypes from 'prop-types';

// Crea un contexto llamado ShopContext que permitirá compartir el estado entre componentes
export const ShopContext = createContext();

// Define un componente proveedor llamado ShoppingCartProvider que recibirá children como prop
export const ShoppingCartProvider = ({ children }) => {
  // Usa el hook useState para crear una variable de estado llamada count y una función setCount para actualizarla, inicializada en 0
  const [count, setCount] = useState(0);

  // Retorna un componente ShopContext.Provider que provee el valor del estado count y la función setCount a sus hijos
  return (
    <ShopContext.Provider value={{ count, setCount }}>
      {children}
    </ShopContext.Provider>
  );
};

// Validación de los props del componente ShoppingCartProvider
// Especifica que el prop children debe ser un nodo React y es requerido
ShoppingCartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
