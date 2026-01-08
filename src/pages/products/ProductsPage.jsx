import { productsData, arrOfSpecies } from "../../data/products"
import CategoryCard from "../../components/CategoryCard"
import SpeciesCard from "../../components/SpeciesCard"

export default function Page() {
  return (
    <section className="bg-white">
      <div className="p-6 space-y-10 lg:max-w-7xl mx-auto ">
      <div>
        <h1 className="md:text-5xl text-3xl font-bold mb-4 text-[#212E84]">Solution by Composition</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {productsData.categories.map(cat => (
            <CategoryCard key={cat.slug} name={cat.name} image={cat.image} slug={cat.slug} />
          ))}
        </div>
      </div>

      <div>
        <h1 className="md:text-5xl text-3xl font-bold mb-4 text-[#212E84] pt-12">Solution by Species</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 gap-y-20 py-12">
          {/* console.log(arrOfSpecies) */}
          {arrOfSpecies.map(s => {
  const slug = s.trim().includes(" ")
    ? s.trim().toLowerCase().replace(/\s+/g, "-")
    : s;

  return <SpeciesCard key={slug} name={slug} />;
})}
        </div>
      </div>
    </div>
    </section>
  )
}
