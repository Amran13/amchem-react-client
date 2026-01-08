import { productsData } from "../data/products"
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom";



export default  function ProductCategory() {
 const { slug } = useParams();

  const category = productsData.categories.find(
    c => c.slug === slug
  )

  console.log(category)
  if (!category) {
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-2xl font-semibold text-red-600">
          Category not found
        </h1>
      </div>
    )
  }

  return (
    <section className="bg-white">
      <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <h1 className="text-4xl text-[#212E84] font-bold">
        {category.name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {category.items.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
    </section>
  )
}
