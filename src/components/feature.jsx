const Feature = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose ChatWave?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Military-Grade Security",
              icon: "🔒",
              desc: "End-to-end encryption for all your conversations",
            },
            {
              title: "AI-Powered Tools",
              icon: "🤖",
              desc: "Smart replies, translation, and conversation summaries",
            },
            {
              title: "Cross-Platform Sync",
              icon: "🔄",
              desc: "Seamless experience across all your devices",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-slate-800 text-center rounded-xl hover:bg-slate-700 transition-colors"
            >
              <div className="text-4xl text-center mb-4 text-indigo-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-slate-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
