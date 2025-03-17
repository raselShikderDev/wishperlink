const Pricing = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Simple, Transparent Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Starter",
              price: "Free",
              features: ["Basic Messaging", "5GB Storage", "Up to 5 Members"],
            },
            {
              name: "Pro",
              price: "$9",
              features: [
                "Advanced Features",
                "50GB Storage",
                "Up to 50 Members",
                "Priority Support",
              ],
              featured: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              features: [
                "Unlimited Storage",
                "Dedicated Support",
                "Custom Domain",
                "SLA",
              ],
            },
          ].map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl ${
                plan.featured
                  ? "border-2 border-indigo-500 scale-105 bg-slate-900"
                  : "border border-slate-700"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-lg text-slate-400">/month</span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-slate-300">
                    <svg
                      className="w-5 h-5 mr-2 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-lg ${
                  plan.featured
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-slate-700 hover:bg-slate-600"
                } transition-colors`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
