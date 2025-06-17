import React, { useState } from "react";
import { supabase } from "../lib/supabase";
import toast, { Toaster } from "react-hot-toast";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    location: "",
    organization: "",
    designation: "",
    isIEEEMember: "",
    ieeeMembershipId: "",
    isWIEMember: "",
    WIEContributions: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const getPaymentLink = () => {
    if (formData.isIEEEMember === "yes") {
      if (formData.isWIEMember === "yes") {
        return "https://rzp.io/rzp/VhsPp2SL"; // Replace with actual WIE member payment link
      }
      return "https://rzp.io/rzp/luxjz0o"; // Replace with actual IEEE member payment link
    }
    return "https://rzp.io/rzp/9CSbU6m"; // Replace with actual non-IEEE member payment link
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const paymentLink = getPaymentLink();
      window.location.href = paymentLink;
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-purple-50 py-24">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Registration Form
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                required
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Organization
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                required
                value={formData.organization}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="designation"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                required
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div className="space-y-4">
              <div>
                <p className="block text-sm font-medium text-gray-700 mb-2">
                  Are you an IEEE Member?
                </p>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isIEEEMember"
                      value="yes"
                      checked={formData.isIEEEMember === "yes"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <span className="ml-2">Yes</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="isIEEEMember"
                      value="no"
                      checked={formData.isIEEEMember === "no"}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                    />
                    <span className="ml-2">No</span>
                  </label>
                </div>
              </div>

              {formData.isIEEEMember === "yes" && (
                <>
                  <div>
                    <label
                      htmlFor="ieeeMembershipId"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      IEEE Membership ID
                    </label>
                    <input
                      type="text"
                      id="ieeeMembershipId"
                      name="ieeeMembershipId"
                      required
                      value={formData.ieeeMembershipId}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-gray-700 mb-2">
                      Are you a WIE Member?
                    </p>
                    <div className="flex gap-4">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="isWIEMember"
                          value="yes"
                          checked={formData.isWIEMember === "yes"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <span className="ml-2">Yes</span>
                      </label>
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="isWIEMember"
                          value="no"
                          checked={formData.isWIEMember === "no"}
                          onChange={handleInputChange}
                          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                        />
                        <span className="ml-2">No</span>
                      </label>
                    </div>
                  </div>

                  {formData.isWIEMember === "yes" && (
                    <div>
                      <label
                        htmlFor="WIEContributions"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        What are your contributions to IEEE WIE?
                      </label>
                      <textarea
                        id="WIEContributions"
                        name="WIEContributions"
                        required
                        value={formData.WIEContributions}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Please describe your contributions to IEEE WIE..."
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors duration-300"
            >
              Proceed to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
