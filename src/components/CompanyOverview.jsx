import React from 'react';

const CompanyOverview = () => {
    return (
        <section
            className="relative w-full py-20 px-4 bg-cover bg-center"
            style={{ backgroundImage: "url('amchem-farm.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative max-w-4xl mx-auto text-center space-y-6">
                <p className="text-xs font-semibold tracking-widest text-gray-200">
                    COMPANY OVERVIEW
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Making veterinary pharmaceutical solutions better for everyone
                </h2>

                <p className="text-gray-200 leading-relaxed">
                    AMCHEM manufactures veterinary pharmaceutical products for the animal feed industry and the company operates under FAMI-QS certification, GMP+ feed safety assurance and ISO 22000:2018 food safety management systems. Manufacturing facilities produce feed-grade additives and premixes using precision blending technology, comprehensive quality control, and validated analytical methods.
                </p>

                <p className="text-gray-200 leading-relaxed">
                    Production capacity serves both commercial-scale feed manufacturers and specialty applications requiring custom formulations. The technical team of AMCHEM comprises veterinarians, animal nutritionists, pharmaceutical scientists, and quality assurance specialists providing product development, regulatory affairs, and customer technical support across multiple species and production systems.
                </p>

                <p className="text-gray-200 leading-relaxed">
                    Laboratory capabilities include HPLC, GC, and AAS microbiological analysis, and stability testing. All products undergo identity confirmation, potency assay, and microbiological screening prior to release.
                </p>
            </div>
        </section>
    );
};

export default CompanyOverview;
