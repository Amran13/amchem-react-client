import React from "react";
import {
    BeakerIcon,
    BuildingOffice2Icon,
    AcademicCapIcon,
    UserGroupIcon,
    CheckCircleIcon,
} from "@heroicons/react/24/outline";

export default function TechnologyTransfer() {
    return (
        <section className="bg-white  py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-4xl text-[#212E84] font-semibold mb-16">
                    Technology Transfer
                </h2>

                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2  sm:grid-cols-2 gap-10 ">
                        <div className="">
                            {/* <BeakerIcon className="w-10 h-10 text-[#212E84]" /> */}
                            <div className="flex flex-col gap-4">
                                <div>
                                    <BuildingOffice2Icon className="w-12 text-[#212E84]" />
                                    <h3 className="font-semibold text-2xl mb-2 text-[#212E84]">
                                        Joint Ventures
                                    </h3>

                                    <p className="text-gray-700">
                                        Strategic market joint ventures considered combining Amchem
                                        technical expertise and product portfolio with local partner
                                        market knowledge and infrastructure. Long-term partnership
                                        approach to market development.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <AcademicCapIcon className="w-12 text-[#212E84]" />
                            <div>
                                <h3 className="font-semibold text-2xl mb-2 text-[#212E84]">
                                    Academic Institutions
                                </h3>

                                <div className="">
                                    <p className="mb-3 text-gray-700">
                                        <span className="font-semibold">
                                            University Partnerships:
                                        </span>{" "}
                                        Research collaboration, sponsored projects, student
                                        internships, thesis support, guest lectures, industry
                                        perspective contribution to curricula.
                                    </p>

                                    <p className="text-gray-700">
                                        <span className="font-semibold">
                                            Research Institute Collaboration:
                                        </span>{" "}
                                        Joint studies on animal nutrition, veterinary medicine,
                                        pharmaceutical sciences, and agricultural technology.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <div className="flex gap-4">
                            <UserGroupIcon className="w-10 h-10 text-[#212E84]" />
                            <div>
                                <h3 className="font-semibold mb-2">
                                    Industry & Research Engagement
                                </h3>

                                <p className="text-gray-700">
                                    Participation in associations, technical committees, and
                                    standards development.
                                </p>
                            </div>
                        </div> */}
                    </div>

                    <div className="bg-[#F6F8FF] rounded-2xl text-black px-4 py-8 shadow-sm">
                        <h3 className="text-xl text-[#212E84] font-semibold mb-6">
                            Consultation Services
                        </h3>

                        <ul className="space-y-3 text-xs">
                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-6 text-[#212E84] mt-[2px]" />
                                <span>Formulation protocols for feed additive production</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 text-[#212E84] mt-[2px]" />
                                <span>Manufacturing process development</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 text-[#212E84] mt-[2px]" />
                                <span>Quality control system implementation</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 text-[#212E84] mt-[2px]" />
                                <span>Regulatory compliance guidance</span>
                            </li>

                            <li className="flex items-start gap-3">
                                <CheckCircleIcon className="w-5 text-[#212E84] mt-[2px]" />
                                <span>Staff training programs</span>
                            </li>
                        </ul>

                        <p className="text-sm text-gray-600 mt-6">
                            For companies establishing feed additive manufacturing
                            capabilities.
                        </p>

                        <button className="btn bg-[#212E84] hover:bg-[#1a2466] text-white rounded-full px-8 mt-6">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
