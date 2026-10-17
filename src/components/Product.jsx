 import {Card} from "./Card"
 {/*Giving the prdouct titel and price as an key so whatever in that spcace such as "price: blah blah" can be printed where it wrtires price. 
   <Card> is so we can import card which imports css style.card so we can put them in the desing we did.*/}
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