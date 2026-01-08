import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {
  FaSeedling,
  FaTractor,
  FaLeaf,
  FaWarehouse,
  FaGlobe
} from "react-icons/fa";

const timelineData = [
  {
    year: "1985",
    description:
      "Company established in the Netherlands specializing in medicated feed premix manufacturing",
    icon: <FaSeedling />,
  },
  {
    year: "1985–1995",
    description:
      "Foundation period focused on core competencies in antibacterial premixes, analytical capabilities, and European market development",
    icon: <FaLeaf />,
  },
  {
    year: "1996–2005",
    description:
      "Portfolio expansion to anticoccidials, vitamins, acidifiers; ISO 9001 and GMP+ certification achieved; market entry to Middle East and Asia",
    icon: <FaWarehouse />,
  },
  {
    year: "2006–2015",
    description:
      "Strategic pivot toward antibiotic alternatives responding to antimicrobial resistance concerns; development of organic acids, essential oils, butyrates, and functional ingredients; research collaboration with academic institutions",
    icon: <FaTractor />,
  },
  {
    year: "2016–Present",
    description:
      "Advanced formulation development; geographic expansion to Africa and Latin America; digital systems implementation; sustainability initiatives aligned with UN Sustainable Development Goals",
    icon: <FaGlobe />,
  },
];

const TimelineHistory = () => {
  return (
    <section className="py-20 bg-[#F2F6FB]">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#1F3A5F] mb-12"
        >
          Our Journey Through Time
        </motion.h2>

        <VerticalTimeline animate={false}>
          {timelineData.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              date={item.year}
              dateClassName="text-[#3B6EA8] font-semibold"
              iconStyle={{
                background: "#3B6EA8",
                color: "#ffffff",
              }}
              icon={item.icon}
              contentStyle={{
                background: "#ffffff",
                color: "#1F3A5F",
                boxShadow: "0 10px 30px rgba(31,58,95,0.15)",
                borderRadius: "16px",
                border: "1px solid #D6E2F1",
              }}
              contentArrowStyle={{
                borderRight: "7px solid #ffffff",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default TimelineHistory;
