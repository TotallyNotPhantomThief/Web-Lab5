import { useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
export  default function App(){
 const [showProducts, setShowProducts] = useState(true);
 const [name, setName] =useState("");
 return (
  <div>
   <h1>React Product Dashboard</h1>
   <button onClick={() => setShowProducts((toggle) => !toggle)}>
	{showProducts ? 'Hide Products' : 'Show Products'}
   </button>
  <input
   type ="text"
   placeholder="Enter your name"  
   value={name}
   onChange={(nameChange) => setName(nameChange.target.value)}
  />
  <p>Hello,{name}</p>
  {showProducts && <ProductList/>}
  </div>
 );
}
