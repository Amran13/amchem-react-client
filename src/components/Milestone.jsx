import React from "react";
import {
  FiMapPin,
  FiAward,
  FiCheckCircle,
  FiPackage,
  FiActivity,
  FiStar,
} from "react-icons/fi";

const Milestone = () => {
  const milestones = [
    {
      year: "1992",
      text: "First international market entry",
      icon: <FiMapPin className="w-4 h-4" />,
    },
    {
      year: "1998",
      text: "ISO 9001 certification",
      icon: <FiAward className="w-4 h-4" />,
    },
    {
      year: "2003",
      text: "GMP+ certification",
      icon: <FiCheckCircle className="w-4 h-4" />,
    },
    {
      year: "2008",
      text: "AGP alternative product line launched",
      icon: <FiPackage className="w-4 h-4" />,
    },
    {
      year: "2018",
      text: "Biological toxin management solutions introduced",
      icon: <FiActivity className="w-4 h-4" />,
    },
    {
      year: "2025",
      text: "40 years of pharmaceutical excellence",
      icon: <FiStar className="w-4 h-4" />,
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold tracking-tight">Our Milestones</h3>
          <p className="text-base-content/70 mt-2">
            A journey of scientific growth and global impact
          </p>
        </div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
          {milestones.map((item, index) => (
            <div key={index} className="relative pl-10">
              <span className="absolute -left-[18px] top-1 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-content shadow-md">
                {item.icon}
              </span>

              <div className="card bg-base-100 shadow-lg rounded-2xl">
                <div className="card-body py-5">
                  <span className="text-sm font-semibold text-primary">
                    {item.year}
                  </span>
                  <p className="text-base font-medium text-base-content/90">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestone;
