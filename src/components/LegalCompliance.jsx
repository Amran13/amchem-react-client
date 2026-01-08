import {
  DocumentTextIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

const LegalCompliance = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-gray-800">
        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#212E84] mb-12">
          Legal & Compliance
        </h2>

        <div className="space-y-10">
          {/* Terms & Conditions */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <DocumentTextIcon className="w-5 h-5 text-[#212E84] flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Terms & Conditions
              </h3>
            </div>

            <p className="mb-2">
              <span className="font-semibold">General Terms of Sale:</span>{" "}
              Standard commercial terms governing product sale, delivery,
              payment, liability, and dispute resolution.
            </p>

            <p>
              <span className="font-semibold">Website Terms of Use:</span>{" "}
              Conditions for website access and information use.
            </p>
          </div>

          {/* Privacy Policy */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheckIcon className="w-5 h-5 text-[#212E84] flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Privacy Policy
              </h3>
            </div>

            <p>
              Data collection, processing, and protection practices compliant
              with GDPR and applicable privacy regulations. Personal information
              handling, cookies policy, and user rights.
            </p>
          </div>

          {/* Regulatory Information */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ClipboardDocumentCheckIcon className="w-5 h-5 text-[#212E84] flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Regulatory Information
              </h3>
            </div>

            <p>
              Product registration status by country, maximum residue limits,
              withdrawal periods, and regulatory updates available through
              customer portal.
            </p>
          </div>

          {/* Disclaimer */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <ExclamationTriangleIcon className="w-5 h-5 text-[#212E84] flex-shrink-0" />
              <h3 className="text-xl md:text-2xl font-semibold">
                Disclaimer
              </h3>
            </div>

            <p>
              Product information provided for guidance; professional
              veterinary/nutritional consultation recommended for specific
              applications. Company liability limitations and user
              responsibility outlined in product documentation and terms of
              sale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;
