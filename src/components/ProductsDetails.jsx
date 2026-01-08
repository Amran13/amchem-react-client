

export default function ProductDetails({ product }) {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-4 py-10 text-black">

      <div className="bg-blue-950 text-white px-6 py-4">
        <h1 className="text-xl md:text-2xl font-bold">
          {product.name}
        </h1>
        {product.subtitle && (
          <p className="italic mt-1">{product.subtitle}</p>
        )}
      </div>

      <div className="space-y-10 mt-8">

        {product.sections.map((section, index) => (
          <div key={index}>

            <h2 className="text-green-700 font-bold uppercase mb-2">
              {section.title}
            </h2>

            {section.type === "text" &&
              section.content.split("\n\n").map((p, i) => (
                <p key={i} className="mb-4 leading-relaxed text-justify">
                  {p}
                </p>
              ))
            }


            {section.type === "table" && (
              <>
                {section.description && (
                  <p className="mb-2">{section.description}</p>
                )}

                <div className="overflow-x-auto">
                  <table className="w-full border border-black text-sm">
                    <thead>
                      <tr className="bg-gray-100">
                        {section.columns.map((col, i) => (
                          <th
                            key={i}
                            className="border border-black p-2 text-center"
                          >
                            {col}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td
                              key={c}
                              className="border border-black p-2 text-center"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {section.footer && (
                  <p className="text-sm mt-2">{section.footer}</p>
                )}
              </>
            )}

          </div>
        ))}

      </div>
    </div>
    </section>
  )
}
