import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function OurCoreProducts() {
  const productCategories = [
    {
      name: "Medicated premixes",
      href: "/products/category/medicated-premix",
      image: "/medicated-premix.jpg",
    },
    {
      name: "Anticoccidial premixes",
      href: "/products/category/anticoccidial-premixes",
      image: "/anticoccidial-premix.jpg",
    },
    {
      name: "Vitamin–mineral supplements",
      href: "/products/category/vitamin-and-mineral-supplements",
      image: "/vitamin-and-minerals.jpg",
    },
    {
      name: "Mycotoxin binders",
      href: "/products/category/toxin-binders",
      image: "/toxin-binder.jpg",
    },
    {
      name: "Feed Acidifier",
      href: "/products/category/feed-acidifiers",
      image: "/feed-acidifier.jpg",
    },
    {
      name: "Mold Inhibitors",
      href: "/products/category/mold-inhibitors",
      image: "/mold-inhibitor.jpg",
    },
    {
      name: "Feed Flavours",
      href: "/products/category/feed-flavours",
      image: "/feed-flavour.jpg",
    },
    {
      name: "AGP Replacement",
      href: "/products/category/agp-replacement-products",
      image: "/agp-replacement.jpg",
    },
  ];

  const row1 = productCategories.slice(0, 4);
  const row2 = productCategories.slice(4);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex flex-col gap-12 max-w-6xl mx-auto py-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl md:text-5xl font-semibold uppercase text-center text-black"
      >
        Core Product <span className="text-[#00116E]">Categories</span>
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gap-6 grid md:grid-cols-4 grid-cols-2 md:max-w-5xl mx-auto"
      >
        {row1.map((c, i) => (
          <motion.div key={i} variants={item}>
            <Link to={c.href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-40 h-40 rounded overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="gap-6 grid md:grid-cols-4 grid-cols-2 md:max-w-5xl mx-auto"
      >
        {row2.map((c, i) => (
          <motion.div key={i} variants={item}>
            <Link to={c.href}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="relative w-40 h-40 rounded overflow-hidden cursor-pointer hover:shadow-lg"
              >
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
