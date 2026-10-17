 import {Card} from "./Card"
 export function Product({title,price}){
return (
   <Card>
   <div className="product">
   <h2>{title}</h2>
   <p>{price}</p>
   </div>
   </Card>
);
}