
import { createContext } from 'react'


const ShopContext = createContext()




export const ShoppingCartProvider = ({ children }) => {
  // Add prop validation for 'children'
  
  return (
    <ShopContext.Provider>
        { children }
    </ShopContext.Provider>
   
  )
}



