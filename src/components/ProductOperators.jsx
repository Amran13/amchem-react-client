import React from "react";
import { FiSettings, FiCheckSquare, FiMail } from "react-icons/fi";

const ProductionOperators = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Production Operators
          </h2>
        </div>

        <div className="card bg-base-200 shadow-xl rounded-3xl">
          <div className="card-body md:p-10 space-y-8">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary text-primary-content">
                <FiSettings className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-semibold">
                Responsibilities & Qualifications
              </h3>
            </div>

            <div className="space-y-5 text-base-content/80 leading-relaxed">
              <p>
                <span className="font-semibold">Responsibilities:</span>{" "}
                Operate blending equipment per SOPs, weigh materials accurately,
                conduct in-process checks, maintain equipment cleanliness,
                complete batch records, follow safety protocols.
              </p>

              <p>
                <span className="font-semibold">Qualifications:</span> Technical
                diploma preferred, 1-2 years manufacturing experience, attention
                to detail, physical ability (lift 25 kg), basic computer skills.
              </p>
            </div>

            <div className="divider" />

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <FiMail className="w-5 h-5" />
              </div>
              <p className="text-base-content/80">
                <span className="font-semibold">Application:</span> Submit
                application to{" "}
                <span className="hover:underline text-blue-900 mr-1 font-bold">
                  <a href="/contact">
                    Contact Page
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionOperators;
