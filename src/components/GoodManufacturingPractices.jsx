import React from "react";

const GoodManufacturingPractices = () => {
  const items = [
    {
      title: "GMP Principles:",
      text:
        "Quality built into products through design and manufacturing, risk-based resource allocation, validated process control, comprehensive documentation, qualified personnel, appropriate facilities, and continuous improvement.",
    },
    {
      title: "Facilities:",
      text:
        "Segregated areas preventing cross-contamination, smooth cleanable surfaces, controlled environment, pest control, adequate space, proper lighting/ventilation.",
    },
    {
      title: "Equipment:",
      text:
        "Suitable design, proper installation and qualification (IQ/OQ/PQ), regular calibration, preventive maintenance, validated cleaning procedures.",
    },
    {
      title: "Personnel:",
      text:
        "Appropriate qualifications, GMP training, position-specific training, competency assessment, health monitoring, hygiene requirements.",
    },
    {
      title: "Production Controls:",
      text:
        "Standard Operating Procedures for all operations, master formulas, batch-specific records documenting materials and critical steps, material control with quarantine and FIFO rotation, process validation demonstrating consistency.",
    },
    {
      title: "Quality Control:",
      text:
        "Independent QC function, qualified personnel, calibrated instruments, validated methods, appropriate reference standards, specifications for all materials, comprehensive testing procedures.",
    },
    {
      title: "Documentation:",
      text:
        "SOPs, master formulas, batch records, laboratory records, equipment logs, training records, change control, deviation reports, validation protocols—all controlled, approved, and archived appropriately.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-zinc-200">
      <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-10 text-center  px-4">
        <span className="text-blue-900">Good Manufacturing Practices</span> 
      </h2>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="lg:sticky lg:top-28">
          <img
            src="/manufacture.avif"
            alt="Good Manufacturing Practices"
            className="rounded-2xl w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[520px] object-cover shadow-lg"
          />
        </div>

        <div className="leading-relaxed text-sm sm:text-base text-base-content">
          <div className="space-y-4 sm:space-y-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-base-100 rounded-xl p-4 sm:p-6 border border-base-300"
              >
                <p>
                  <strong className="block mb-1">{item.title}</strong>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoodManufacturingPractices;
