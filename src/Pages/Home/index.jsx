import { useState, useEffect } from "react";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";


/**
 * Renders the Home page component.
 *
 * @returns {JSX.Element} The rendered Home page component.
 */
export const Home = () => {
  const [items, setItems] = useState(null)


// This code is using the useEffect hook to fetch data from an API and update the 'items' state.
// It makes a GET request to 'https://api.escuelajs.co/api/v1/products' and retrieves the response data.
// The response data is then set as the value of the 'items' state using the setItems function.
// The useEffect hook is only executed once, when the component is mounted, because the dependency array is empty ([]).
// This ensures that the API request is only made once when the component is initially rendered.
useEffect(() => {  
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
}, [])





  return (
    <>
      <Layout>
        Home
        <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          items?.map((item) => {
            return <Card key={item.id} data={item} />
          })
        }

        </div>
       
        
      </Layout>
    </>
  );
};
