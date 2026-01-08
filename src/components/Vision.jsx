

import { motion } from "framer-motion";
import {
    Microscope,
    Factory,
    ShieldCheck,
    Stethoscope,
    Globe2,
    Recycle
} from "lucide-react";

const Vision = () => {
    const objectives = [
        {
            icon: <Microscope className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Lead research-driven product development utilizing peer-reviewed scientific literature",
        },
        {
            icon: <Factory className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Maintain pharmaceutical-grade manufacturing exceeding feed industry standards",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Support transition to reduced-antibiotic production systems through effective alternatives",
        },
        {
            icon: <Stethoscope className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Provide technical expertise enabling optimized product application",
        },
        {
            icon: <Globe2 className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Expand global accessibility of advanced veterinary pharmaceutical solutions",
        },
        {
            icon: <Recycle className="w-10 h-10 text-[#3B6EA8]" />,
            text:
                "Contribute to sustainable intensification of livestock production",
        },
    ];

    return (
        <section className="bg-[#212E84] py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-white mb-6"
                >
                    Our Vision
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-white text-base md:text-lg leading-relaxed mb-12"
                >
                    To advance global animal production through scientifically validated
                    pharmaceutical solutions that optimize animal health, production
                    efficiency, and antimicrobial stewardship while maintaining
                    environmental sustainability and food safety standards.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {objectives.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            whileHover={{ y: -6 }}
                            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-[#D6E2F1]"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                {item.icon}
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Vision;
