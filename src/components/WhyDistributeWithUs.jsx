import React from "react";
import {
  BeakerIcon,
  ChartBarIcon,
  LifebuoyIcon,
  MegaphoneIcon,
  TruckIcon,
  CurrencyDollarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const WhyDistributeWithUs = () => {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#212E84] mb-12">
          Why Partner with Amchem?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-full rounded-2xl bg-[#212E84] text-white p-6 flex flex-col">
            <BeakerIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Product Quality</h3>
            <p className="text-sm leading-relaxed flex-grow">
              Pharmaceutical-grade manufacturing, consistent specifications,
              proven efficacy, regulatory compliance, complete documentation.
              Quality advantage differentiates distributors and builds customer
              trust.
            </p>
          </div>

          <div className="h-full rounded-2xl bg-[#9FC9C8] text-[#0f172a] p-6 flex flex-col">
            <ChartBarIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">
              Competitive Positioning
            </h3>
            <p className="text-sm leading-relaxed flex-grow">
              Premium quality justifies pricing, science-based formulations
              outperform commodities, European heritage appeals to
              quality-conscious markets, comprehensive portfolio from single
              supplier.
            </p>
          </div>

          <div className="h-full rounded-2xl bg-[#212E84] text-white p-6 flex flex-col">
            <LifebuoyIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Technical Support</h3>
            <p className="text-sm leading-relaxed flex-grow">
              Access to veterinarians and nutritionists, problem-solving
              assistance, product training, technical literature, joint customer
              visits, educational seminars.
            </p>
          </div>

          <div className="h-full rounded-2xl bg-[#9FC9C8] text-[#0f172a] p-6 flex flex-col">
            <MegaphoneIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Marketing Support</h3>
            <p className="text-sm leading-relaxed flex-grow">
              Brochures, technical bulletins, digital assets, trade show
              assistance, advertising contribution, case studies, social media
              content.
            </p>
          </div>

          <div className="h-full rounded-2xl bg-[#212E84] text-white p-6 flex flex-col">
            <TruckIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Reliable Supply</h3>
            <p className="text-sm leading-relaxed flex-grow">
              Adequate inventory, on-time delivery, quality shipments, supply
              chain communication, emergency support capability.
            </p>
          </div>

          <div className="h-full rounded-2xl bg-[#9FC9C8] text-[#0f172a] p-6 flex flex-col">
            <CurrencyDollarIcon className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-semibold mb-3">Commercial Terms</h3>
            <p className="text-sm leading-relaxed flex-grow">
              Competitive pricing enabling profitability, volume incentives,
              reasonable payment terms, territory protection, transparent
              policies, long-term stability.
            </p>
          </div>

          <div className="lg:col-span-3 ">
            <div className="h-full max-w-[360px] w-full rounded-2xl bg-[#212E84] text-white p-6 flex flex-col">
              <SparklesIcon className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold mb-3">Growing Portfolio</h3>
              <p className="text-sm leading-relaxed flex-grow">
                Continuous innovation, regular new product introduction,
                market-responsive development, early distributor access to
                innovations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDistributeWithUs;
