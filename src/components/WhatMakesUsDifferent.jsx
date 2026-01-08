
import React from "react";
import { motion } from "framer-motion";
import {
    FlaskConical,
    ShieldCheck,
    Users,
    Factory,
    FileCheck,
    Leaf,
    Globe,
} from "lucide-react";

const WhatMakesUsDifferent = () => {
    const points = [
        {
            icon: <FlaskConical className="w-10 h-10 text-[#092476]" />,
            title: "Research-Driven Development",
            desc: "Formulation decisions are guided by systematic reviews of high-impact scientific journals, ensuring efficacy, safety, and optimal application.",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#092476]" />,
            title: "Pharmaceutical Standards",
            desc: "GMP compliance, complete analytical testing, batch traceability, and validated methods exceed typical feed additive industry practices.",
        },
        {
            icon: <Users className="w-10 h-10 text-[#092476]" />,
            title: "Technical Expertise",
            desc: "A multidisciplinary team provides evidence-based recommendations, application protocols, and comprehensive troubleshooting support.",
        },
        {
            icon: <Factory className="w-10 h-10 text-[#092476]" />,
            title: "Customization Capability",
            desc: "Flexible manufacturing allows custom formulations, modified specifications, and private-label production for regional needs.",
        },
        {
            icon: <FileCheck className="w-10 h-10 text-[#092476]" />,
            title: "Transparency",
            desc: "Full documentation, analysis certificates, safety sheets, and product traceability from raw materials to finished goods.",
        },
        {
            icon: <Leaf className="w-10 h-10 text-[#092476]" />,
            title: "Sustainability Focus",
            desc: "We support sustainable animal production with antibiotic alternatives, efficiency enhancers, and eco-friendly stewardship.",
        },
        {
            icon: <Globe className="w-10 h-10 text-[#092476]" />,
            title: "Global Standards, Local Support",
            desc: "European pharmaceutical excellence paired with regional technical support through qualified distributor partners.",
        },
    ];

    return (
        <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
            <div className="text-center mb-14">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:text-5xl text-4xl font-bold text-[#212E84]"
                >
                    What Makes Us Different
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-3 leading-relaxed"
                >
                    Our strength lies in scientific excellence, pharmaceutical precision,
                    and sustainability — delivering trusted, research-backed solutions.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {points.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 text-center border border-[#E3EDD6]"
                    >
                        <div className="flex justify-center mb-4">{item.icon}</div>

                        <h3 className="text-lg font-semibold text-[#092753] mb-2">
                            {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhatMakesUsDifferent;
