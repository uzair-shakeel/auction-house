"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/sidebar";

export default function PaymentConfirmation() {
  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      {/* <Sidebar /> */}

      <div className="relative w-full">
        <main className="p-8 max-w-2xl mx-auto">
          <div className="bg-[#093033] rounded-lg p-12 text-center">
            <div className="flex justify-center mb-6">
              <img src="/checkmark.svg" />
            </div>

            <h1 className="text-white text-[36px] font-[700] mb-4">
              Thank you for your order!
            </h1>

            <p className="text-gray-400 text-[16px] mb-8">
              The estimated time is 48 hours for Rolex and 2 hours for AP
              (Audemars Piguet) and Patek Philippe.
            </p>

            <Button
              className="w-full bg-[#95C901] hover:bg-[#84B001] text-black font-medium h-12"
              onClick={() => (window.location.href = "/")}
            >
              Go home
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
