import { Link, useParams } from "react-router-dom";

export default function ProductCard({product}) {
    
  return (  
    <div>
         <Link to={`/products/product/${product.id}`} className="card bg-base-100 border border-gray-100 p-6 hover:scale-105 transition">
       <h2 className="font-bold text-base">{product.product}</h2>
       <p className="text-xs font-medium">{product.brand}</p>
     </Link> 
    </div>
  )
}
