import { useState } from 'react';
import './App.css';
import Product from './components/Product';
import ProductClass from './components/ProductClass';



function App() {
  const [isClassComponent , setIsClassComponent] = useState(true);

  const toggleComponent = ()=>{
    setIsClassComponent(!isClassComponent);
  };

  return (
    <div className="App bg-image">
     {isClassComponent?(
      <ProductClass toggleComponent={toggleComponent}/>
      ) :(
      <Product toggleComponent={toggleComponent}/>
      ) 

    }
   
    
    
    
          
   

    </div>
  );
}

export default App;
