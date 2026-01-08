import React from "react";

const ProductSafety = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 text-base-content leading-relaxed">
        <h2 className="text-3xl font-bold mb-6">
          Product Safety
        </h2>

        <p className="mb-4">
          <strong>Safety Assessment:</strong> Toxicological evaluation of active
          ingredients, target species safety margins, non-target species risk
          assessment, residue considerations, withdrawal period establishment,
          occupational exposure assessment, environmental impact evaluation.
        </p>

        <p className="font-semibold mb-2">Product Stewardship:</p>
        <ol className="list-decimal pl-6 mb-4 space-y-1">
          <li>
            Safety Data Sheets: Hazard identification, first aid,
            handling/storage, exposure controls, physical/chemical/toxicological
            properties, environmental information, disposal, transport
          </li>
          <li>
            Labels: Clear identification, composition, dosage,
            species/indications, contraindications, withdrawal periods, safety
            pictograms
          </li>
          <li>
            Technical support: Application guidance, troubleshooting, adverse
            effect avoidance training
          </li>
        </ol>

        <p className="mb-4">
          <strong>Pharmacovigilance:</strong> Customer complaint procedures,
          adverse event investigation, regulatory reporting, periodic safety
          updates, risk-benefit assessments, labeling updates.
        </p>

        <p>
          <strong>Recall Procedures:</strong> Issue identification, risk
          assessment, notification (customers/authorities), product retrieval,
          root cause investigation, corrective action, documentation,
          effectiveness verification. Annual mock recalls conducted.
        </p>
      </div>
    </section>
  );
};

export default ProductSafety;
