import { productsData } from "../data/products"
import ProductCard from "../components/ProductCard"
import { useParams } from "react-router-dom"


export default  function SpeciesCategory() {
  const {id} = useParams()
  const allItems = productsData.categories.flatMap(c => c.items)
  const filtered = allItems.filter(p => p.species.includes(id))

  console.log(id, allItems, filtered)


  return (
    <section className="bg-white">
      <div className="p-6 space-y-6 max-w-7xl  mx-auto">
      <h1 className="text-4xl font-bold capitalize text-[#212E84]">{id.name}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(item => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
    </section>
  )
}
