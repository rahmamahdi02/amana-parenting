import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
  });

  const [showPayPal, setShowPayPal] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const encoded = new URLSearchParams(formData);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwj-yJr6iyK8qzvlGzima8cg04g8ssMzqK0pDQYdWMFKVIl1J5WG-OqitgIb5L7ND5A/exec",
        {
          method: "POST",
          body: encoded,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const result = await response.text();
      alert("Form submitted! Now proceed to payment.");
      setShowPayPal(true);
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error(error);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="wrapper max-w-xl mx-auto">
        <SectionTitle>
          <h2>
            <span className="text-primaryColor font-bold">Membership Sign-Up</span>
          </h2>
          <p className="text-xl mt-6 max-w-2xl">
            Fill out your details and proceed to checkout to activate your membership.
          </p>
        </SectionTitle>

        <form
          onSubmit={handleSubmit}
          className="bg-white mt-12 p-8 rounded-[24px] shadow-lg border border-slate-200 space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Jane Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">
              Address
            </label>
            <textarea
              id="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="123 Main Street, City, State"
              required
            ></textarea>
          </div>

          <div className="pt-4">
            {!showPayPal ? (
              <button
                type="submit"
                className="w-full bg-primaryColor text-white py-3 px-6 rounded-xl font-semibold"
              >
                Submit & Proceed to PayPal
              </button>
            ) : (
              <div className="mt-4">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input type="hidden" name="hosted_button_id" value="XBVYG4VUKZBHW" />
                  <input type="hidden" name="currency_code" value="USD" />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribe_LG.gif"
                    border="0"
                    name="submit"
                    title="PayPal - The safer, easier way to pay online!"
                    alt="Subscribe"
                  />
                </form>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
