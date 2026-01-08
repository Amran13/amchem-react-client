import React from "react";

const DistributorRequirement = () => {
  return (
    <section className="py-16 bg-zinc-200">
      <div className="max-w-4xl mx-auto px-4 text-black leading-relaxed">
        <h2 className="text-3xl font-bold  mb-8">
          Distributor Requirements
        </h2>

        <p className="font-semibold mb-2">Business Credentials:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-1">
          <li>
            Established operation (3-5 years) in feed additives or animal health
          </li>
          <li>Financial stability and creditworthiness</li>
          <li>
            Appropriate warehouse (clean, dry, temperature-controlled, adequate
            capacity, proper handling)
          </li>
          <li>Office facilities and IT systems</li>
          <li>Working capital for inventory investment</li>
        </ol>

        <p className="font-semibold mb-2">Technical Capability:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-1">
          <li>
            Qualified personnel: Veterinarian(s), nutritionist(s), technical
            service representatives
          </li>
          <li>
            Technical knowledge: Animal production systems, feed formulation,
            health challenges
          </li>
          <li>
            Support capability: Pre-sales consultation, post-sales support,
            troubleshooting, field visits
          </li>
        </ol>

        <p className="font-semibold mb-2">Market Knowledge:</p>
        <ol className="list-decimal ml-6 mb-6 space-y-1">
          <li>
            Customer relationships: Feed manufacturers, integrators, large
            producers, veterinary practices
          </li>
          <li>
            Market understanding: Size, growth, competition, pricing, channels,
            regulatory environment
          </li>
          <li>
            Sales/marketing capability: Proven performance, marketing
            experience, trade show participation
          </li>
        </ol>

        <p className="font-semibold mb-2">Regulatory Compliance:</p>
        <ol className="list-decimal ml-6 space-y-1">
          <li>
            Required licenses for feed additives/veterinary products
          </li>
          <li>Quality management systems</li>
          <li>Proper storage/handling procedures</li>
          <li>Traceability and complaint handling</li>
          <li>Product recall capability</li>
        </ol>
      </div>
    </section>
  );
};

export default DistributorRequirement;
