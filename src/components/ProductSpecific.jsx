import { productsData } from "../data/products"
import ProductDetails from "../components/ProductsDetails";
import { useParams } from "react-router-dom";




export default  function ProductSpecific() {
  const { prodname } = useParams()

    console.log(prodname)
  const allItems = productsData.categories.flatMap(c => c.items)
  
  const product = allItems.find(p => p?.id === prodname)



  if (!product) {
    return <div className="p-6 text-xl">Product not found</div>
  }

  

  return <ProductDetails product={product}></ProductDetails>
}
