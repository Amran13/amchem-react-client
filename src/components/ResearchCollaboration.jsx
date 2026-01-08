import React from "react";

export default function ResearchCollaboration() {
  return (
    <section className="bg-white md:pt-20 pb-32 pl-2 md:pl-0">
      <div className="max-w-7xl mx-auto md:px-20 grid grid-cols-1 lg:grid-cols-2 md:gap-16 items-center">
        <div className="relative w-full flex justify-center ">
          <div className="absolute -left-6 top-16 md:w-96 w-60 h-72 bg-[#212E84]/90 z-0 "></div>

          <div className="relative z-10 right-12">
            <img
              src="/lab-2.jpg"
              alt="Field research"
              width={300}
              height={400}
              className="object-cover border-8 border-white"
            />
            {/* <p className="text-xs mt-2 italic text-gray-500">
              Images from Pixabay
            </p> */}
          </div>

          <div className="absolute left-32 md:left-60 -bottom-20 z-20">
            <img
              src="/lab-1.jpg"
              alt="Laboratory research"
              width={260}
              height={260}
              className="object-cover border-8 border-white shadow-lg"
            />
          </div>
        </div>

        <div className="text-left md:mt-0 mt-24">
          <h3 className="text-4xl font-bold text-[#212E84] mb-6">
            Research & Development Collaboration
          </h3>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Academic Partnerships:</span>{" "}
            Collaborative research with universities and research institutions
            for novel ingredients, efficacy validation, and animal nutrition
            advancement. Opportunities for sponsored research, joint
            publications, and student programs.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Field Trials:</span> Cooperative
            efficacy studies under commercial conditions demonstrating product
            value and developing best practice protocols.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
            <span className="font-semibold">Technology Development:</span>{" "}
            Evaluation of new raw materials and formulation technologies for
            incorporation into product portfolio.
          </p>

          <p className="text-gray-700 leading-relaxed">
            <span className="font-semibold">Industry Engagement:</span>{" "}
            Participation in associations, technical committees, and standards
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
