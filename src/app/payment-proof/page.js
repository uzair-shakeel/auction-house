"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "../components/sidebar";

export default function PaymentProof() {
  const [paymentType, setPaymentType] = useState("online");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(URL.createObjectURL(file)); // Create a URL for the selected image
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center">
      <Sidebar />

      <div className="relative w-full">
        <button
          className="fixed top-12 left-24 flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          onClick={() => window.history.back()}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>

        <main className="p-8 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-white text-[36px] font-[700] mb-2">
              Payment Methods
            </h1>
            <p className="text-gray-400 text-[16px]">
              Our verification confirms your watch's authenticity.
            </p>
          </div>

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
              Off-site Payment
            </button>
          </div>

          <div className="bg-[#091618] rounded-lg p-12 mb-8">
            <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-600 rounded-lg cursor-pointer hover:border-[#C4A574] transition-colors">
              {/* If there's a file, show the image; otherwise, show the default placeholder */}
              {file ? (
                <img
                  src={file}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <img src="/upload.svg" />{" "}
                  <p className="text-white text-lg mb-2">
                    Upload your Payment Image
                  </p>
                  <p className="text-gray-400 text-sm">Maximum Size 5 MB</p>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
                accept="image/*"
              />
            </label>
          </div>

          <Button
            className="w-full bg-[#95C901] hover:bg-[#84B001] text-black font-medium h-12"
            disabled={!file}
          >
            Next
          </Button>
        </main>
      </div>
    </div>
  );
}
