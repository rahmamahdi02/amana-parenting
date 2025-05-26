import SectionTitle from "./SectionTitle";

export default function MembershipSignup() {
  return (
    <section className="py-20 bg-slate-100">
      <div className="wrapper max-w-md mx-auto bg-white rounded-[24px] shadow-lg p-8">
        <SectionTitle>
          <h2>
            <span className="text-primaryColor font-bold">Sign Up for Membership</span>
          </h2>
          <p className="text-xl mt-6 max-w-lg">
            Join us to unlock exclusive benefits and connect with our community.
          </p>
        </SectionTitle>

        <form className="mt-12 space-y-6">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="fullName" className="block mb-2 text-sm font-semibold text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="address" className="block mb-2 text-sm font-semibold text-slate-700">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="1234 Main St, City, Country"
              required
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 font-medium rounded-xl bg-primaryColor text-white hover:bg-primaryColor/90 transition"
          >
            Proceed to Checkout
          </button>
        </form>
      </div>
    </section>
  );
}
