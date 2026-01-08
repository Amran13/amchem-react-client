import React from "react";
import { motion } from "framer-motion";

const RegistrationProcess = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Initial Contact",
      content: (
        <>
          Email{" "}
          <span className="underline text-primary">
            distribution@amchem-bv.com
          </span>{" "}
          with company information (name, location, years established, current
          lines, territory interest, customer base summary). Preliminary
          discussion assesses mutual fit.
        </>
      ),
    },
    {
      step: "Step 2",
      title: "Formal Application",
      content:
        "Complete detailed application form with company profile, product experience, market coverage, infrastructure specifications, technical capabilities, financial statements, references, and business plan with projections.",
    },
    {
      step: "Step 3",
      title: "Evaluation",
      content:
        "Internal review of qualifications, due diligence (registration verification, credit check, reference calls), decision on proceeding to site visit.",
    },
    {
      step: "Step 4",
      title: "Site Visit",
      content:
        "Facility inspection (warehouse, office, logistics), management meetings, team introductions, market discussion, business plan presentation, mutual questions. Assessment of fit and capabilities.",
    },
    {
      step: "Step 5",
      title: "Agreement Negotiation",
      content:
        "Terms discussion covering territory, products, minimum commitments, pricing, payment terms, marketing/technical support, duration, performance metrics, termination conditions. Legal review and execution.",
    },
    {
      step: "Step 6",
      title: "Launch Preparation",
      content:
        "Comprehensive product and commercial training, marketing materials provision, initial stock shipment, system setup, launch planning.",
    },
    {
      step: "Step 7",
      title: "Ongoing Management",
      content:
        "Regular communication, sales reporting, quarterly reviews, performance monitoring, continuous support, relationship development.",
    },
  ];

  return (
    <div>
      <section
        className="relative py-28 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/paralax-bg.jpg')" }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center text-[#212E84]">
          Registration Process
        </h2>
        <div className="absolute inset-0 bg-white/10"></div>

        <div className="relative max-w-6xl mx-auto px-4">
          <div className="relative space-y-24">
            <div className="absolute left-1/2 top-0 bottom-0 border-l-2 border-dashed border-base-300 -translate-x-1/2" />

            {steps.map((item, i) => {
              const fromLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: fromLeft ? -120 : 120 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`relative flex ${
                    fromLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-full lg:w-[46%] bg-base-200 rounded-2xl p-6 shadow-sm">
                    <span className="inline-block mb-4 px-4 py-1 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                      {item.step}
                    </span>

                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>

                    <p className="leading-relaxed">{item.content}</p>
                  </div>

                  <span className="absolute left-1/2 top-8 w-4 h-4 rounded-full bg-primary -translate-x-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationProcess;
