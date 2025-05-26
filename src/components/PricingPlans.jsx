import SectionTitle from "./SectionTitle";

const plans = [
  {
    title: "Basic",
    tag: "Personal",
    price: "$9",
    description: "Perfect for individuals just getting started with virtual cards.",
    features: [
      "1 virtual card",
      "$1,000 monthly limit",
      "Basic analytics",
      { label: "Team access", available: false },
    ],
    gradient: false,
  },
  {
    title: "Pro",
    tag: "Popular",
    price: "$29",
    description: "Ideal for professionals who need more flexibility and features.",
    features: [
      "5 virtual cards",
      "$10,000 monthly limit",
      "Advanced analytics",
      "1 team member",
    ],
    gradient: true,
    progress: "70%",
  },
  {
    title: "Business",
    tag: "Enterprise",
    price: "$99",
    description: "Full-featured solution for businesses with advanced needs.",
    features: [
      "Unlimited virtual cards",
      "$50,000 monthly limit",
      "Enterprise analytics",
      "Unlimited team members",
    ],
    gradient: false,
  },
];

const FeatureItem = ({ text, available = true }) => (
  <li className={`flex items-center text-sm ${available ? "text-slate-700" : "text-slate-400"}`}>
    <svg
      className={`w-5 h-5 mr-2 ${available ? "text-emerald-500" : "text-slate-300"}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={available ? "M5 13l4 4L19 7" : "M6 18L18 6M6 6l12 12"}
      />
    </svg>
    {typeof text === "string" ? text : text.label}
  </li>
);

const PlanCard = ({ plan }) => {
  const isGradient = plan.gradient;
  const baseClasses = "rounded-[24px] overflow-hidden shadow-lg";
  const wrapperClasses = isGradient
    ? `${baseClasses} bg-gradient-to-br from-indigo-500 to-indigo-400 transform md:scale-105 text-white`
    : `${baseClasses} bg-white border border-slate-200`;

  return (
    <div className={wrapperClasses}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className={`font-bold text-xl ${isGradient ? "text-white" : "text-slate-800"}`}>
            {plan.title}
          </h3>
          <span
            className={`px-3 py-1 rounded-full text-xs ${
              isGradient ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
            }`}
          >
            {plan.tag}
          </span>
        </div>

        <div className="mb-6">
          <span className={`text-4xl font-bold ${isGradient ? "text-white" : "text-slate-800"}`}>
            {plan.price}
          </span>
          <span className={`ml-1 ${isGradient ? "text-white/70" : "text-slate-500"}`}>/month</span>
        </div>

        <p className={`text-sm mb-6 ${isGradient ? "text-white/70" : "text-slate-500"}`}>
          {plan.description}
        </p>

        <ul className="space-y-3 mb-8">
          {plan.features.map((item, i) => (
            <FeatureItem
              key={i}
              text={item}
              available={typeof item === "string" || item.available}
            />
          ))}
        </ul>

        <button
          className={`w-full py-3 px-4 font-medium rounded-xl transition ${
            isGradient
              ? "bg-white hover:bg-white/90 text-indigo-600"
              : "bg-slate-100 hover:bg-slate-200 text-slate-800"
          }`}
        >
          Get Started
        </button>
      </div>

      {plan.progress && (
        <div className="px-6 pb-6">
          <div className="flex justify-between text-xs text-white/70 mb-1">
            <span>Monthly usage</span>
            <span>{plan.progress} used</span>
          </div>
          <div className="h-1.5 w-full bg-white/20 rounded-full">
            <div
              className="h-1.5 bg-white rounded-full"
              style={{ width: plan.progress }}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default function PricingPlans() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="wrapper">
        <SectionTitle>
          <h2>
            <span className="text-primaryColor font-bold">Choose Your Plan</span>
          </h2>
          <p className="text-xl mt-6 max-w-2xl">
            Select the perfect virtual card solution for your needs with our flexible pricing options.
          </p>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {plans.map((plan, index) => (
            <PlanCard key={index} plan={plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-500 text-sm">
            All plans include 24/7 support, fraud protection, and secure transactions.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Need a custom solution?{" "}
            <a href="#" className="text-indigo-500 font-medium underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
