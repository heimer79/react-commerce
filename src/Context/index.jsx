
import { createContext, useState } from 'react'


export const ShopContext = createContext()




export const ShoppingCartProvider = ({ children }) => {


  const [ count, setCount ] = useState(0) 


  /* console.log(count) */



  
  return (
    <ShopContext.Provider value={{
      count,
      setCount
    }}>
        { children }
    </ShopContext.Provider>
   
  )
}



