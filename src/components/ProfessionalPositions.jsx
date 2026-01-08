import React from "react";
import {
  FiUsers,
  FiActivity,
  FiPackage,
  FiShield,
  FiFileText,
  FiMail,
} from "react-icons/fi";

const ProfessionalPositions = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Professional Positions
          </h2>
        </div>

        <div className="space-y-8">
          <div className="card bg-base-100 shadow-lg rounded-3xl">
            <div className="card-body space-y-6">
              <div className="flex items-start gap-4">
                <FiUsers className="w-6 h-6 text-primary mt-1" />
                <p className="text-base-content/80 leading-relaxed">
                  <span className="font-semibold">
                    Technical Services Veterinarians:
                  </span>{" "}
                  Provide expert advice on product applications, conduct
                  customer training, support field trials, develop technical
                  literature. Requirements: DVM degree, 3-5 years production
                  animal experience, strong communication skills.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FiActivity className="w-6 h-6 text-primary mt-1" />
                <p className="text-base-content/80 leading-relaxed">
                  <span className="font-semibold">Animal Nutritionists:</span>{" "}
                  Optimize feed formulations incorporating Amchem products,
                  analyze production data, develop species-specific programs.
                  Requirements: MS/PhD in animal nutrition, 3-5 years feed
                  industry experience, formulation software proficiency.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FiPackage className="w-6 h-6 text-primary mt-1" />
                <p className="text-base-content/80 leading-relaxed">
                  <span className="font-semibold">
                    Product Development Scientists:
                  </span>{" "}
                  Research and develop new formulations based on scientific
                  literature and market needs. Requirements: MS/PhD in
                  pharmaceutical sciences, 5+ years product development
                  experience, analytical expertise.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FiShield className="w-6 h-6 text-primary mt-1" />
                <p className="text-base-content/80 leading-relaxed">
                  <span className="font-semibold">
                    Quality Assurance Officers:
                  </span>{" "}
                  Ensure GMP compliance, conduct audits, investigate deviations,
                  manage documentation systems. Requirements: BS in science, 3-5
                  years pharmaceutical/feed QA experience, ISO/GMP knowledge.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <FiFileText className="w-6 h-6 text-primary mt-1" />
                <p className="text-base-content/80 leading-relaxed">
                  <span className="font-semibold">
                    Regulatory Affairs Specialists:
                  </span>{" "}
                  Manage product registrations across jurisdictions, monitor
                  regulatory changes, compile registration dossiers.
                  Requirements: Life science degree, 3-5 years regulatory
                  experience, multi-jurisdictional knowledge.
                </p>
              </div>

              <div className="divider" />

              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <FiMail className="w-5 h-5" />
                </div>
                <p className="text-base-content/80">
                  <span className="font-semibold">Application:</span> Send CV to{" "}
                  <span className="hover:underline text-blue-900 mr-1 font-bold">
                    <a href="/contact">
                      Contact Page
                    </a>
                  </span>
                  specifying position of interest
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalPositions;
