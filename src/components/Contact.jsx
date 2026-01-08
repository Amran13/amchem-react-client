import { useState } from "react";
import { Send } from "lucide-react";

const tabs = [
  {
    id: "distribution",
    label: "Distribution",
    image: "/distribution.png",
    title: "Distribution Partnership",
  },
  {
    id: "product",
    label: "Product Usage",
    image: "/utilization.png",
    title: "Product Usage Inquiry",
  },
  {
    id: "career",
    label: "Careers",
    image: "/career.png",
    title: "Career Application",
  },
];

export default function WorkWithUs() {
  const [activeTab, setActiveTab] = useState("distribution");
  const activeTitle = tabs.find((t) => t.id === activeTab)?.title;

  return (
    <section className="py-24 bg-zinc-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-3 transition ${
                activeTab === tab.id ? "opacity-100" : "opacity-30"
              }`}
            >
              <div
                className={`w-24 h-24 p-4 rounded-2xl ${
                  activeTab === tab.id ? "bg-blue-100" : ""
                }`}
              >
                <img
                  src={tab.image}
                  alt={tab.label}
                  className="w-full h-full object-contain"
                />
              </div>
              <span
                className={`text-black font-semibold ${
                  activeTab === tab.id ? "text-[#212E84]" : ""
                }`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-3xl p-10">
          <h2 className="text-3xl font-semibold text-center text-[#212E84] mb-10">
            {activeTitle}
          </h2>

          {activeTab === "distribution" && <DistributionForm />}
          {activeTab === "product" && <ProductUsageForm />}
          {activeTab === "career" && <CareerApplicationForm />}
        </div>
      </div>
    </section>
  );
}

/* ================= DISTRIBUTION ================= */

function DistributionForm() {
  return (
    <form className="max-w-xl mx-auto space-y-6 text-black">
      <Field label="Your Name" placeholder="Your name" />
      <Field label="Company Name" placeholder="Company name" />
      <Field label="Email" type="email" placeholder="you@company.com" />
      <Field label="Phone Number" placeholder="+1 (555) 000-0000" />
      <Field label="Country of Distribution" placeholder="Country" />

      <div className="">
        <p className="text-sm font-medium mb-2">
          Which product(s) are you interested in distributing?
        </p>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            "Medicated Premix",
            "Anticoccidial Premix",
            "Vitamin & Mineral",
            "Toxin Binder",
            "Mold Inhibitor",
            "Feed Acidifier",
            "Feed Flavour",
            "AGP Replacement",
          ].map((item) => (
            <label key={item} className="flex items-center gap-2 bg-white">
              <input type="checkbox" />
              {item}
            </label>
          ))}
        </div>
      </div>

      <Textarea
        label="Message"
        placeholder="Brief description of your company, products of interest and/or questions..."
      />

      <button className="w-full bg-[#212E84] text-white py-3 rounded-md font-medium hover:bg-gray-900 transition">
        Send message
      </button>
    </form>
  );
}

/* ================= PRODUCT USAGE ================= */

function ProductUsageForm() {
  return (
    <form className="max-w-xl mx-auto space-y-6 text-black">
      <Field label="Full Name" placeholder="Your name" className="placeholder:text-black" />
      <Field label="Email" type="email" placeholder="you@email.com" />
      <Textarea label="Message" placeholder="Your message..." />

      <button className="w-full bg-[#212E84] text-white py-3 rounded-md font-medium hover:bg-gray-900 transition">
        Submit Request
      </button>
    </form>
  );
}

/* ================= CAREER ================= */

function CareerApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  return (
    <form className="max-w-xl mx-auto space-y-6 text-black placeholder:text-black">
      <Field label="Full Name" placeholder="Your name" />
      <Field label="Email" type="email" placeholder="you@email.com" />

      <div>
        <label className="block text-sm font-medium mb-1">
          Position Applying For
        </label>
        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
          <option>Select position</option>
          <option>Veterinary Consultant</option>
          <option>Marketing Specialist</option>
          <option>R&D Scientist</option>
          <option>Production Officer</option>
        </select>
      </div>

      <div className="">
        <label className="font-medium mb-1">Resume (PDF/DOC)</label>
        <input
          type="file"
          name="resume"
          accept=".pdf,.doc,.docx"
          className="file-input file-input-bordered w-full bg-white"
          onChange={handleChange}
          required
        />
      </div>

      <button className="w-full bg-[#212E84] text-white py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-900 transition">
        <Send size={16} />
        Submit Application
      </button>
    </form>
  );
}

/* ================= REUSABLE FIELDS ================= */

function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#212E84]"
      />
    </div>
  );
}

function Textarea({ label, placeholder }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        placeholder={placeholder}
        rows={4}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#212E84]"
      />
    </div>
  );
}
