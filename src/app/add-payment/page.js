"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Sidebar from "../components/sidebar";

export default function AddPayment() {
  const [formData, setFormData] = useState({
    username: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      // Allow only digits and format card number
      const formattedValue = value
        .replace(/\D/g, "") // Remove non-numeric characters
        .slice(0, 16) // Limit to 16 digits
        .replace(/(.{4})/g, "$1 ") // Add space every 4 digits
        .trim(); // Remove trailing spaces
      setFormData({ ...formData, cardNumber: formattedValue });
    } else if (name === "expiryDate") {
      // Format as MM/YY
      const formattedValue = value
        .replace(/\D/g, "") // Remove non-numeric characters
        .slice(0, 4) // Limit to 4 digits (MMYY)
        .replace(/(\d{2})(\d{0,2})/, "$1/$2"); // Add slash after 2 digits
      setFormData({ ...formData, expiryDate: formattedValue });
    } else if (name === "cvc") {
      // Allow only 3 digits
      const formattedValue = value.replace(/\D/g, "").slice(0, 3);
      setFormData({ ...formData, cvc: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <Sidebar />

      <div className="relative w-full">
        <button
          className="absolute top-12 left-24 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <main className="p-8 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-[700] mb-2">
              Add Payment Method
            </h1>
            <p className="text-gray-400 text-[16px]">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input
                name="username"
                placeholder="User name"
                value={formData.username}
                onChange={handleChange}
                className="bg-[#093033] border-0 text-white h-12"
              />
            </div>
            <div>
              <Input
                name="cardNumber"
                placeholder="Card number (1234 5678 1234 5678)"
                value={formData.cardNumber}
                onChange={handleChange}
                className="bg-[#093033] border-0 text-white h-12"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Input
                name="expiryDate"
                placeholder="Expiry date (MM/YY)"
                value={formData.expiryDate}
                onChange={handleChange}
                className="bg-[#093033] border-0 text-white h-12"
              />
              <Input
                name="cvc"
                placeholder="CVC (123)"
                value={formData.cvc}
                onChange={handleChange}
                className="bg-[#093033] border-0 text-white h-12"
              />
            </div>

            <Button
              className="w-full bg-[#95C901]  hover:bg-[#84B001] text-black font-medium h-12 mt-12"
              type="submit"
            >
              Next
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
