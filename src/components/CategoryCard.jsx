import React from "react";

export default function CategoryCard({ name, slug, image }) {
  return (
    <a href={`/products/category/${slug}`} className="card p-6 hover:scale-105 transition">
      <img
        src={image || "/placeholder.png"}
        alt={name}
        width={300}
        height={300}
        className="rounded-xl hover:border-[#984B1F] hover:border-4"
      />
      {/* <h2 className="text-xl font-bold"> {name}</h2> */}
    </a>
  );
}
