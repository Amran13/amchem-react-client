import React from "react";
import {
  GlobeAltIcon,
  ArrowPathIcon,
  CloudIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const EnvironmentalResponsibility = () => {
  return (
    <section className="py-20 bg-zinc-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#212E84] mb-16">
          Environmental Responsibility
        </h2>

        <div className="grid lg:grid-cols-3 gap-12 items-start ">
          <div className="lg:col-span-2 space-y-12 text-base-content leading-relaxed">
            <div className="flex gap-4 ">
              <GlobeAltIcon className="w-10 h-10 text-[#212E84]" />
              <div className=" text-black">
                <h3 className="text-2xl font-semibold text-[#212E84] mb-3">
                  Environmental Management
                </h3>

                <ol className="list-decimal pl-6 space-y-1 ">
                  <li>
                    Waste: Minimization through optimization, recycling
                    (packaging materials), proper disposal (hazardous waste via
                    licensed contractors)
                  </li>
                  <li>
                    Energy: Efficient equipment, process optimization,
                    consumption monitoring
                  </li>
                  <li>
                    Water: Efficient use, wastewater treatment, pollution
                    prevention
                  </li>
                  <li>
                    Air: Dust collection, proper ventilation, VOC minimization
                  </li>
                  <li>
                    Chemicals: Proper storage, secondary containment, spill
                    prevention
                  </li>
                </ol>
              </div>
            </div>

            <div className="flex gap-4  text-black">
              <ArrowPathIcon className="w-10 h-10 text-[#212E84]" />
              <div>
                <h3 className="text-2xl font-semibold text-[#212E84] mb-3">
                  Sustainable Sourcing
                </h3>

                <p>
                  Preference for suppliers with environmental management systems, consideration
                  of carbon footprint, minimized packaging, recyclable
                  materials.
                </p>
              </div>
            </div>

            <div className="flex gap-4  text-black">
              <CloudIcon className="w-10 h-10 text-[#212E84]" />
              <div>
                <h3 className="text-2xl font-semibold text-[#212E84] mb-3">
                  Climate Change
                </h3>

                <p>
                  Carbon footprint monitoring,
                  emission reduction opportunities, support for production
                  efficiency reducing emissions per unit.
                </p>
              </div>
            </div>

            <div className="flex gap-4  text-black">
              <ArrowPathIcon className="w-10 h-10 text-[#212E84]" />
              <div>
                <h3 className="text-2xl font-semibold text-[#212E84] mb-3">
                  Circular Economy
                </h3>

                <p>
                  Safe product end-of-life,
                  minimized virgin materials, maximized recycling/reuse, reduced
                  packaging waste.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#F6F8FF] rounded-2xl p-8 shadow-sm text-black">
            <h3 className="text-xl font-semibold text-[#212E84] mb-6">
              Environmental Commitments
            </h3>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-[#212E84] mt-[2px]" />
                <span>Waste minimization and responsible disposal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-[#212E84] mt-[2px]" />
                <span>Energy and water efficiency</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-[#212E84] mt-[2px]" />
                <span>Emission reduction initiatives</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-[#212E84] mt-[2px]" />
                <span>Circular economy and recycling focus</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-8 h-5 text-[#212E84] mt-[2px]" />
                <span>Sustainable sourcing and supplier environmental standards</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="w-8 h-5 text-[#212E84] mt-[2px]" />
                <span>Continuous environmental performance monitoring and improvement</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalResponsibility;
