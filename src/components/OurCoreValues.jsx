    import React from "react";

const OurCoreValues = () => {
  const features = [
    {
      title: "Scientific Excellence",
      icon: "/success.png",
      desc:
        "We base every product on robust scientific research, ensuring efficacy, safety, and consistency across all applications.",
    },
    {
      title: "Quality Assurance",
      icon: "/high-quality.png",
      desc:
        "Strict quality control systems guarantee compliance with international standards and reliable performance.",
    },
    {
      title: "Innovation and Research",
      icon: "/innovation.png",
      desc:
        "Continuous investment in R&D drives innovative solutions that meet evolving livestock health challenges.",
    },
    {
      title: "Customer Partnership",
      icon: "/partnership.png",
      desc:
        "We work closely with partners to deliver tailored solutions that enhance productivity and long-term success.",
    },
    {
      title: "Environmental Responsibility",
      icon: "/environment.png",
      desc:
        "Our practices promote sustainability, reducing environmental impact while supporting responsible animal production.",
    },
    {
      title: "Regulatory Compliance",
      icon: "/compilance.png",
      desc:
        "All products adhere to global regulatory frameworks, ensuring safety, traceability, and ethical standards.",
    },
  ];

  return (
    <section className="pt-16 pb-32 bg-[#F2F4F3]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="md:text-5xl text-4xl uppercase text-[#00116E] font-bold">
            Our Core Values
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-3">
            {features.map((f, i) => (
              <div
                key={i}
                className={`
                  relative group p-6 flex flex-col items-center justify-center
                  border-gray-200 h-40 overflow-hidden
                  ${i < 3 ? "border-b" : ""}
                  ${i % 3 !== 2 ? "md:border-r" : ""}
                `}
              >
                <div className="absolute inset-0 bg-[#00116E] text-white p-6 flex items-center justify-center text-sm text-center leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  {f.desc}
                </div>

                <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-20 h-20 mx-auto mb-3">
                    <img
                      src={f.icon}
                      alt={f.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-center text-[#00116E]">
                    {f.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurCoreValues;
