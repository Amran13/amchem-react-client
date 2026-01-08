import { motion } from "framer-motion";

export default function Certificate() {
  const certs = [
    {
      title: "ISO 9001:2015",
      desc: "Quality Management System",
      img: "/logo/iso.webp",
      link: "https://www.iso.org/standard/62085.html",
    },
    {
      title: "GMP+",
      desc: "Feed Safety Assurance",
      img: "/logo/gmp.png",
      link: "https://www.gmpplus.org/",
    },
    {
      title: "ISO 22000:2018",
      desc: "Food Safety Management",
      img: "/logo/iso2.png",
      link: "https://www.iso.org/standard/65464.html",
    },
    {
      title: "FAMI-QS",
      desc: "Feed Additives & Premixes Certification",
      img: "/logo/famiqs.png",
      link: "https://www.fami-qs.org/",
    },
  ];

  return (
    <section className="bg-zinc-100 py-20 md:h-screen px-6 md:px-12 lg:px-24">
      <div className="text-center mb-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#212E84]"
        >
          CERTIFICATIONS & LICENSES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-3 leading-relaxed"
        >
          Demonstrating our commitment to quality, safety, and internationally
          recognized standards.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {certs.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="group bg-zinc-50 rounded-2xl p-8 text-center border border-[#E3EDD6] relative overflow-hidden"
          >
            <div className="flex justify-center items-center h-24">
              <img
                src={c.img}
                alt={c.title}
                className="max-h-20 object-contain"
              />
            </div>

            <div className="absolute inset-0 bg-[#033060]/90 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-lg font-semibold mb-1">
                {c.title}
              </h3>
              <p className="text-white/90 text-sm">{c.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
