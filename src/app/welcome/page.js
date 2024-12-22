"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/navbar";

export default function Welcome() {
  return (
    <div className="min-h-screen bg-[#0B3434]">
      <Navbar />

      <div className="flex items-center justify-end h-full  pt-24 pb-12">
        <div className="w-full  space-y-8">
          <div className="absolute ">
            <div className=" relative z-0">
              <img
                src="/welcome-lg.svg"
                className="w-full h-auto"
                alt="Welcome"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B3434] to-transparent"></div>
            </div>
          </div>

          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 space-y-6 max-w-md mx-auto z-50 text-center">
            <h1 className="text-white text-2xl font-semibold">Welcome to TM</h1>

            <p className="text-gray-400 text-sm w-2/3 mx-auto">
              We can check details of your watch and verify if it’s registered
              stolen
            </p>

            {/* Submit Button */}
            <Button
              className="w-full bg-[#95C901] hover:bg-[#84B001] text-black font-medium h-12 mt-6"
              onClick={() => console.log("Submitted code:", code.join(""))}
            >
              Start Verification
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
