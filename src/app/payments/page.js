"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/sidebar";

export default function PaymentMethods() {
  const [paymentType, setPaymentType] = useState("online");
  const [selectedMethod, setSelectedMethod] = useState(null);

  const paymentMethods = [
    {
      id: "mastercard",
      name: "Master Card",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: "/placeholder.svg?height=32&width=32",
    },
    {
      id: "apple",
      name: "Apple Wallet",
      icon: "/placeholder.svg?height=32&width=32",
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <Sidebar />

      <div className="relative w-full">
        {/* Back Button */}
        <button
          className="fixed top-12 left-24 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <main className="p-8 max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-[700] mb-2">
              Payment Methods
            </h1>
            <p className="text-gray-400 text-[16px]">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

          {/* Payment Type Toggle */}
          <div className="bg-[#093033] p-1 rounded-full flex mb-8">
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm transition-transform ease-in-out duration-300 ${
                paymentType === "online"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPaymentType("online")}
            >
              Online Payment
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full text-sm transition-transform ease-in-out duration-300 ${
                paymentType === "offsite"
                  ? "bg-white text-black"
                  : "text-gray-400 hover:text-white"
              }`}
              onClick={() => setPaymentType("offsite")}
            >
              Off-site payment
            </button>
          </div>

          {/* Conditional Rendering Based on Payment Type */}
          <div
            className={`transition-transform duration-300 ease-in-out ${
              paymentType === "online"
                ? "translate-x-0"
                : "-translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-white text-[18px] mb-6">
              Select payment methods
            </p>
            {paymentMethods.map((method) => (
              <button
                key={method.id}
                className={`w-full flex mb-3 items-center gap-4 p-4 rounded-lg transition-colors ${
                  selectedMethod === method.id
                    ? "bg-[#0F4141] border-2 border-[#C4A574]"
                    : "bg-[#0F4141] border-2 border-transparent hover:border-gray-600"
                }`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <img
                  src={`/${method.id}.svg`}
                  alt={method.name}
                  className="w-8 h-8"
                />
                <span className="text-white">{method.name}</span>
                <div className="ml-auto">
                  <div
                    className={`w-6 h-6 rounded-full border-2 ${
                      selectedMethod === method.id
                        ? "border-[#C4A574] bg-[#C4A574]"
                        : "border-gray-600"
                    }`}
                  >
                    {selectedMethod === method.id && (
                      <div className="w-full h-full rounded-full bg-[#C4A574] border-2 border-[#0F4141]" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Add Payment Method */}
          {paymentType === "online" && (
            <button className="text-[#C4A574] text-sm hover:underline mb-8">
              +Add Payment Method
            </button>
          )}

          <div
            className={`transition-transform duration-300 ease-in-out ${
              paymentType === "offsite"
                ? "translate-x-0"
                : "translate-x-full opacity-0 pointer-events-none"
            }`}
          >
            <p className="text-white text-center mb-8">
              Please proceed with Off-site payment at your nearest facility.
            </p>
          </div>

          {/* Next Button */}
          <Button
            className="w-full bg-[#95C901] hover:bg-[#84B001] text-black font-medium h-12"
            onClick={() => console.log("Selected:", selectedMethod)}
          >
            Next
          </Button>
        </main>
      </div>
    </div>
  );
}
