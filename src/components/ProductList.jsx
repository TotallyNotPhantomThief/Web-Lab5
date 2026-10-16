const data = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Phone", price: 800 },
  { id: 3, title: "Tablet", price: 600 }
];

function Product({title,price}){
return (
   <div className="prodcut">
   <h2>{title}</h2>
   <p>{price}</p>
   </div>
);
}

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
