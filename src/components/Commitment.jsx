import React from "react";

export default function Commitment() {
  const services = [
    {
      title: "Quality Assurance",
      desc: "Every product is manufactured under GMP conditions with comprehensive quality control testing and full documentation.",
      bg: "bg-green-50",
      icon: "https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/check-circle.svg",
    },
    {
      title: "Technical Support",
      desc: "Expert veterinary and nutritional guidance to optimize product application and results.",
      bg: "bg-purple-50",
      icon: "https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/headphones.svg",
    },
    {
      title: "Regulatory Compliance",
      desc: "Products meet international standards and local regulatory requirements.",
      bg: "bg-orange-50",
      icon: "https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/shield.svg",
    },
    {
      title: "Innovation",
      desc: "Continuous investment in research and development to provide cutting-edge solutions.",
      bg: "bg-blue-50",
      icon: "https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/cpu.svg",
    },
    {
      title: "Reliability",
      desc: "Consistent product availability and dependable supply chain management.",
      bg: "bg-red-50",
      icon: "https://cdn.jsdelivr.net/npm/feather-icons/dist/icons/truck.svg",
    },
    {
      title: "Partnership",
      desc: "Long-term relationships built on trust, transparency, and mutual success.",
      bg: "bg-yellow-50",
      icon: "/hand-shake.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-20">
        <h2 className="md:text-5xl text-4xl font-bold text-[#213785] uppercase mb-8">
          Our Commitment to You
        </h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

          {/* LEFT COLUMN */}
          <div className="flex flex-col justify-between gap-6">
            {services.slice(0, 3).map((s, i) => (
              <div
                key={i}
                className={`${s.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition h-full`}
              >
                <img
                  src={s.icon}
                  className="w-10 h-10 mb-3 opacity-80"
                  alt="icon"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center items-center h-full">
            <img
              src="https://plus.unsplash.com/premium_photo-1663011253265-9b5cb2b5ac92?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Lab research feed testing"
              className="rounded-xl shadow-xl object-cover w-full h-full max-h-[900px]"
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col justify-between gap-6">
            {services.slice(3, 6).map((s, i) => (
              <div
                key={i}
                className={`${s.bg} p-6 rounded-xl shadow-sm hover:shadow-md transition h-full`}
              >
                <img
                  src={s.icon}
                  className="w-10 h-10 mb-3 opacity-80"
                  alt="icon"
                />
                <h3 className="text-xl font-semibold mb-2 text-black">{s.title}</h3>
                <p className="text-gray-700 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
