import React from "react";

const ContractManufacturing = () => {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/paralax-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/90"></div>

      <div className="relative max-w-5xl mx-auto px-4 text-base-content leading-relaxed">
        <h3 className="text-4xl font-semibold mb-4 text-[#212E84]">
          Contract Manufacturing
        </h3>

        <p className="font-semibold mb-2">Services Available:</p>
        <ol className="list-decimal ml-6 mb-4 space-y-1">
          <li>Custom formulation development based on customer specifications</li>
          <li>Toll manufacturing of premixes using customer formulations</li>
          <li>Private label production under customer brands</li>
          <li>Small batch and pilot-scale production</li>
          <li>Analytical services and quality control testing</li>
        </ol>

        <p className="mb-4">
          <span className="font-semibold">Capabilities:</span> Precision blending
          equipment, pharmaceutical-grade quality systems, comprehensive
          analytical laboratory, regulatory expertise, flexible batch sizes.
        </p>

        <p className="mb-8">
          <span className="font-semibold">Contact:</span>{" "}
          <span className="text-primary">
            partnerships@amchem-bv.com
          </span>
        </p>
      </div>
    </section>
  );
};

export default ContractManufacturing;
