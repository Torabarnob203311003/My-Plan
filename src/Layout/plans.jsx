import { Check, Sparkles, Zap, Crown } from "lucide-react";
import {
  useCreateCheckoutSessionMutation,
  useGetPlansQuery,
} from "../redux/features/user/userApi";
import { useState } from "react";
import { toast } from "sonner";

const SubscriptionPage = () => {
  const { data: response, isLoading, error } = useGetPlansQuery();
  const [createCheckout, { isLoading: isCheckoutLoading }] =
    useCreateCheckoutSessionMutation();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [...(response?.data || [])];
  const getPlanIcon = (title) => {
    if (title.includes("Free")) return Sparkles;
    if (title.includes("Monthly")) return Zap;
    if (title.includes("Yearly")) return Crown;
    return Check;
  };

  const getPlanColor = (title) => {
    if (title.includes("Free")) return "from-blue-400 to-blue-500";
    if (title.includes("Monthly")) return "from-blue-500 to-blue-600";
    if (title.includes("Yearly")) return "from-blue-600 to-blue-700";
    return "from-blue-400 to-blue-500";
  };

  const getFeatures = (title) => {
    if (title.includes("Free")) {
      return [
        "Basic features",
        "Limited usage",
        "30-day trial",
        "Email support",
      ];
    }
    if (title.includes("Monthly")) {
      return [
        "All features",
        "Unlimited usage",
        "Priority support",
        "Advanced analytics",
        "API access",
      ];
    }
    if (title.includes("Yearly")) {
      return [
        "All features",
        "Unlimited usage",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Dedicated account manager",
        "2 months free",
      ];
    }
    return [];
  };

  const handleSubscribe = async (plan) => {
    setSelectedPlan(plan._id);

    try {
      // Pass the package ID to create checkout session
      const result = await createCheckout(plan._id);

      if (result.data?.success && result.data?.data?.url) {
        // Redirect to Stripe Checkout
        window.location.href = result.data.data.url;
      } else {
        throw new Error("Invalid checkout response");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      toast.error("Failed to create checkout session. Please try again.");
    } finally {
      setSelectedPlan(null);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-blue-600 text-xl mt-4 font-medium">
            Loading plans...
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center">
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-red-200">
          <div className="text-red-600 text-xl font-semibold">
            Error loading plans
          </div>
          <p className="text-gray-600 mt-2">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              Pricing Plans
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h1>
          <p className="text-xl text-gray-600">
            Select the perfect plan for your needs
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans
            .sort((a, b) => a.price - b.price)
            .map((plan) => {
              const Icon = getPlanIcon(plan.title);
              const isPopular = plan.title.includes("Monthly");
              const isLoading = selectedPlan === plan._id && isCheckoutLoading;

              return (
                <div
                  key={plan._id}
                  className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    isPopular
                      ? "border-blue-500 shadow-blue-200 shadow-xl"
                      : "border-gray-200 shadow-lg"
                  }`}
                >
                  {/* Popular Badge */}
                  {isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${getPlanColor(
                      plan.title
                    )} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Plan Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.title}
                  </h3>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-gray-500 ml-2">
                      / {plan.duration}
                    </span>
                    {plan.paymentType === "Yearly" && plan.price > 0 && (
                      <div className="text-sm text-green-600 mt-1 font-medium">
                        Save ${100 * 12 - plan.price} per year
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {getFeatures(plan.title).map((feature, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <Check className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Subscribe Button */}
                  <button
                    onClick={() => handleSubscribe(plan)}
                    disabled={isLoading}
                    className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${
                      isPopular
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl"
                        : "bg-blue-50 text-blue-600 hover:bg-blue-100 border-2 border-blue-200"
                    } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin h-5 w-5 mr-3"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                            fill="none"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Processing...
                      </span>
                    ) : plan.price === 0 ? (
                      "Start Free Trial"
                    ) : (
                      "Subscribe Now"
                    )}
                  </button>
                </div>
              );
            })}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-600">
          <p className="font-medium">
            All plans include a 30-day money-back guarantee
          </p>
          <p className="mt-2 text-sm flex items-center justify-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            Secure payment powered by Stripe
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPage;
