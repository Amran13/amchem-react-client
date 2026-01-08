import React from "react";

const GlobalOperations = () => {
  return (
    <section className="py-16 bg-zinc-100">
      <div className="max-w-6xl mx-auto px-4 text-gray-900">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-900">Global Operations</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* International Sales */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">International Sales</h3>
            <p className="mb-2">
              <span className="font-semibold">Hotline:</span> +86-18-6386-82430
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:sales@amchembv.com"
                className="text-blue-600 hover:underline"
              >
                sales@amchembv.com
              </a>
            </p>
          </div>

          {/* International Distribution */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">International Distribution</h3>
            <p className="mb-2 font-semibold">Corporate Offices:</p>
            <p className="mb-2">47 Kallang Pudding Road</p>
            <p className="mb-2">Singapore 349318</p>

            <p className="mb-2 mt-4 font-semibold">China Office:</p>
            <p className="mb-2">Wangcun, Wolong District</p>
            <p className="mb-2">Nanyang City, Henan Province, China</p>
            <p>
              <a
                href="mailto:info@amchembv.com"
                className="text-blue-600 hover:underline"
              >
                info@amchembv.com
              </a>
            </p>
          </div>

          {/* Headquarters */}
          <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Headquarters</h3>
            <p className="mb-2">Hogstratne 83</p>
            <p className="mb-2">2823 LA Seweg</p>
            <p className="mb-4">The Netherlands</p>
            <p>
              <a
                href="mailto:headquarters@amchembv.com"
                className="text-blue-600 hover:underline"
              >
                headquarters@amchembv.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOperations;
