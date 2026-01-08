import React from "react";

const CareerOpportunities = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-base-content leading-relaxed text-black">

        <h2 className="text-3xl font-bold  mb-6">
          Career Opportunities
        </h2>

        <h3 className="text-xl font-semibold mb-4">
          Graduate Trainee Positions
        </h3>

        <p className="mb-4">
          <strong>Program Structure:</strong> 12-18 month rotational program
          providing exposure to technical services, quality assurance,
          production, regulatory affairs, and commercial operations. Mentorship,
          training courses, project leadership, and pathway to permanent
          positions.
        </p>

        <p className="mb-4">
          <strong>Disciplines:</strong> Veterinary medicine, animal
          science/nutrition, food science, pharmaceutical sciences, chemistry,
          microbiology
        </p>

        <p className="mb-6">
          <strong>"Qualifications:</strong> Bachelor's or Master's degree
          (graduated within 2 years), strong academic record, English
          proficiency, willingness to learn and travel"
        </p>

        <p className="mb-10">
          <strong>Application:</strong> Submit CV and cover letter to{" "}
          <span className="hover:underline text-blue-900 font-bold">
            <a href="/contact">
              Contact Page
            </a>
          </span>
        </p>
      </div>
    </section>
  );
};

export default CareerOpportunities;
