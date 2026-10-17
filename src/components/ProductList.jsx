{/*   In this page the prdouct is an array that we will not be touching or modifying.*/}
import { Product } from "./Product";
const data = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 }
];
{/*To go every prodcut one by one and render it one at a time we use .map(), we import Product so we can give title and price both a style and a printing space.*/}
export function ProductList(){
return(
<div>
{data.map((product) =>(
   <Product
   key = {product.id} title={product.title} price={product.price}
   />
))}
</div>

);
}
