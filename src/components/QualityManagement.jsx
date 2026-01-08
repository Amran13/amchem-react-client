import React from "react";
import {
  ShieldCheck,
  ClipboardList,
  CheckCircle2,
  FileText,
  AlertTriangle,
  RefreshCcw,
  Truck,
} from "lucide-react";

const QualityManagement = () => {
  return (
    <section className="py-20 bg-zinc-50">
      <div className="max-w-5xl mx-auto px-4 text-base-content leading-relaxed">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900 uppercase">
          Quality Management
        </h2>

        <div className="space-y-6">
          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <ShieldCheck className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>Quality Policy:</strong> Commitment to pharmaceutical-grade
              manufacturing meeting customer specifications and regulatory
              requirements through validated processes, trained personnel,
              comprehensive documentation, and continual improvement.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <ClipboardList className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>QMS Structure:</strong> ISO 9001 framework encompassing
              management responsibility, resource allocation, production
              controls, and measurement systems. Quality objectives monitored
              through key performance indicators.
            </p>
          </div>

          <div className="bg-base-200 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <p className="font-semibold">Quality Control:</p>
            </div>

            <ol className="list-decimal pl-6 space-y-1">
              <li>
                Raw materials: Approved supplier list, incoming testing,
                quarantine until approval
              </li>
              <li>
                In-process: Blend uniformity, weight verification, visual
                inspection
              </li>
              <li>
                Finished product: Identity, potency, microbiological testing,
                physical characteristics
              </li>
              <li>
                Batch release: QA review of records and test results prior to
                distribution
              </li>
              <li>
                Stability: Ongoing monitoring confirming shelf-life
                specifications
              </li>
            </ol>
          </div>

          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <FileText className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>Documentation:</strong> Complete traceability from raw
              material (supplier, lot, test results) through production (batch
              records, materials, operators, parameters) to distribution
              (customer, quantity, date). Enables investigation, recall
              capability, and regulatory compliance demonstration.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <AlertTriangle className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>Deviation Management:</strong> Immediate containment, root
              cause investigation, impact assessment, disposition decision
              (approve/rework/reject), corrective action implementation,
              effectiveness verification.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <RefreshCcw className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>Change Control:</strong> Formal process requiring
              justification, risk assessment, validation, documentation updates,
              training, management approval, and post-implementation review.
            </p>
          </div>

          <div className="flex gap-4 items-start bg-base-200 rounded-xl p-6">
            <Truck className="w-6 h-6 text-primary mt-1" />
            <p>
              <strong>Supplier Management:</strong> Qualification through
              assessment, quality agreements, incoming testing, performance
              monitoring, periodic re-evaluation, and critical supplier audits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityManagement;
