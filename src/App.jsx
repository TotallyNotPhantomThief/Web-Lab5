import { useState } from 'react'
import './App.css'
{/*Css imports are universal? At least thats what ı read so we import it. */}


import { ProductList } from './components/ProductList'
{/* We create these states and variables so we can use them whether its written or shown. */}
export  default function App(){
 const [showProducts, setShowProducts] = useState(true);
 const [name, setName] =useState("");
 return (
  <div>
   <h1>React Product Dashboard</h1>
   {/*İf setShowProducts is in true state it shows them with hide prodcuts written in box and vice verse.*/}
   <button onClick={() => setShowProducts((toggle) => !toggle)}>
	{showProducts ? 'Hide Products' : 'Show Products'}
   </button>
 {/*Input for the name so user can write it . */}
  <input
   type="text"
   placeholder="Enter your name"
   value={name}
   onChange={(nameChange) => setName(nameChange.target.value)}
  />
  <p>Hello,{name}</p>
  {showProducts && <ProductList/>}
  </div>
 );
}
