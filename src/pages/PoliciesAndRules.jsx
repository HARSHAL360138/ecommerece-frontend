
import React from "react";

const PoliciesAndRules = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-28">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-10 border border-gray-200">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#002349] mb-3">
            Policies & Rules
          </h1>
          <p className="text-gray-600 text-lg">
            Please read our policies carefully to ensure a smooth shopping experience.
          </p>
          <div className="w-24 h-1 bg-[#957C3D] mx-auto mt-3"></div>
        </div>

        {/* Policies Section */}
        <div className="space-y-10 text-left">
          {/* 1️⃣ Order & Payment Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              1. Order & Payment Policy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              All orders placed through our website are subject to product availability and
              confirmation of the order price. Payment can be made via credit/debit cards,
              UPI, net banking, or wallet options. All transactions are secured with
              end-to-end encryption to protect your data.
            </p>
          </section>

          {/* 2️⃣ Shipping Policy */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              2. Shipping & Delivery
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We strive to deliver your products within 3–7 business days, depending on
              your location. Once your order is shipped, you will receive tracking details
              via email or SMS. Delays may occur due to unforeseen logistics or weather
              conditions.
            </p>
          </section>

          {/* 3️⃣ Returns & Exchanges */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              3. Returns & Exchanges
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Products can be returned within 7 days of delivery if they are unused,
              undamaged, and in their original packaging. Refunds or exchanges will be
              initiated after quality inspection. Please refer to our{" "}
              <a
                href="/online-returns-policy"
                className="text-[#957C3D] hover:underline"
              >
                Online Returns Policy
              </a>{" "}
              for more details.
            </p>
          </section>

          {/* 4️⃣ Privacy & Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              4. Privacy & Data Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We respect your privacy and ensure your personal information is kept
              confidential. Data shared during shopping or registration is securely stored
              and never shared with third parties without consent.
            </p>
          </section>

          {/* 5️⃣ Terms of Use */}
          <section>
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              5. Terms of Use
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing our website, you agree not to misuse our platform for fraudulent
              activities or data manipulation. We reserve the right to update our policies
              at any time. Continued use of our website indicates acceptance of these terms.
            </p>
          </section>

          {/* 6️⃣ Contact Section */}
          <section className="border-t border-gray-200 pt-6">
            <h2 className="text-2xl font-semibold text-[#002349] mb-3">
              Need Help?
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any queries or policy-related concerns, please reach out to our{" "}
              <a
                href="/help-center"
                className="text-[#957C3D] hover:underline font-medium"
              >
                Help Center
              </a>{" "}
              or contact our support team at{" "}
              <span className="font-semibold text-[#002349]">
                support@shoplane.com
              </span>.
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => (window.location.href = "/")}
            className="bg-[#957C3D] hover:bg-[#FFC966] text-[#002349] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md"
          >
            Go Back Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PoliciesAndRules;
