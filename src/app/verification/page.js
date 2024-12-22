"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "../components/navbar";
import Router from "next/router";

export default function VerificationPage() {
  const [code, setCode] = useState(["2", "7", "4", ""]);
  const [timeLeft, setTimeLeft] = useState(28);
  const [isResending, setIsResending] = useState(false);
  // const router = usePathname(); // Initialize the router

  const handleSubmit = () => {
    console.log("Submitted code:", code.join(""));
    // Redirect to the next page after submission
    history.push("/welcome"); // Change this URL to your desired page
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleCodeChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 3) {
        const nextInput = document.querySelector(
          `input[name="code-${index + 1}"]`
        );
        if (nextInput) nextInput.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.querySelector(
        `input[name="code-${index - 1}"]`
      );
      if (prevInput) {
        prevInput.focus();
        const newCode = [...code];
        newCode[index - 1] = "";
        setCode(newCode);
      }
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setTimeLeft(28);
    setIsResending(false);
  };

  return (
    <div className="min-h-screen bg-[#0B3434] flex flex-col justify-center items-center">
      <Navbar />

      <div className="w-full max-w-md space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 text-center">
          <h1 className="text-white text-2xl font-semibold">Verify it's you</h1>

          <p className="text-gray-400 text-sm">
            Enter the verification code we just sent you at{" "}
            <span className="text-[#C4A574]">+1 (111)-111-1111</span>
          </p>

          {/* Verification Code Inputs */}
          <div className="flex justify-center gap-3 my-8">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`code-${index}`}
                value={digit}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-20 h-14 rounded-full  text-center text-white text-2xl font-medium bg-[#0F4141] border-2 border-gray-600 focus:border-[#C4A574] focus:outline-none"
                maxLength={1}
                autoComplete="off"
              />
            ))}
          </div>

          {/* Resend Timer */}
          <div className="text-sm text-gray-400">
            {timeLeft > 0 ? (
              <p>
                Didn't receive the code? Resend in{" "}
                <span className="text-[#C4A574]">
                  {Math.floor(timeLeft / 60)}:
                  {(timeLeft % 60).toString().padStart(2, "0")}
                </span>
              </p>
            ) : (
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-[#C4A574] hover:underline focus:outline-none"
              >
                {isResending ? "Resending..." : "Resend code"}
              </button>
            )}
          </div>

          {/* Submit Button */}
          <Button
            className="w-full bg-[#95C901] hover:bg-[#84B001] text-black font-medium h-12 mt-6"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
