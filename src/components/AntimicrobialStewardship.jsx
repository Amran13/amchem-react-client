import React from "react";

const AntimicrobialStewardship = () => {
  return (
    <section
      className="relative py-24 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/paralax-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative max-w-5xl mx-auto px-4 text-base-content leading-relaxed">
        <h2 className="text-4xl font-bold text-[#212E84] mb-8">
          Antimicrobial Stewardship
        </h2>

        <p className="mb-4">
          <strong>AMR Commitment:</strong> Recognition that antimicrobial
          resistance threatens animal and human health. Commitment to support
          reduced antimicrobial use, promoting judicious therapeutic use,
          avoiding critically important antimicrobials (e.g., colistin
          restrictions), and transparent reporting.
        </p>

        <p className="font-semibold mb-2">
          Alternative Solutions Portfolio:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>
            Organic acids: Butyrates (calcium, sodium), tributyrate supporting
            gut health
          </li>
          <li>
            Phytogenics: Allicin (garlic-derived) with antimicrobial properties
          </li>
          <li>
            Functional amino acids: Guanidinoacetic acid for energy metabolism
          </li>
          <li>
            Medium-chain fatty acids: Monolaurin with selective antimicrobial
            activity
          </li>
        </ol>

        <p className="font-semibold mb-2">
          Responsible Use Guidelines:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-1">
          <li>
            Therapeutic use: Diagnose before treating, select based on
            susceptibility, adequate dosing, appropriate duration
          </li>
          <li>
            Growth promotion: Use minimum effective doses where legal, consider
            rotation, evaluate withdrawal feasibility, implement alternatives
          </li>
          <li>
            Prevention: Optimize biosecurity, nutrition, environment,
            vaccination programs
          </li>
        </ol>

        <p className="mb-4">
          <strong>Regulatory Compliance:</strong> EU antimicrobial growth
          promoter ban (2006), country-specific restrictions, colistin
          prohibitions, medicated feed regulations, prescription requirements.
        </p>

        <p className="mb-4">
          <strong>Research Investment:</strong> Novel functional ingredient
          evaluation, alternative product optimization, efficacy trials versus
          antimicrobials, academic collaboration.
        </p>

        <p>
          <strong>One Health Approach:</strong> Recognition of interconnected
          animal, human, and environmental health requiring coordinated
          antimicrobial resistance mitigation.
        </p>
      </div>
    </section>
  );
};

export default AntimicrobialStewardship;
