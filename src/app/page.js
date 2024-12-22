"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import Navbar from "./components/navbar";
import "react-phone-input-2/lib/style.css";
import "./globals.css";

const PhoneInput = dynamic(() => import("react-phone-input-2"), {
  ssr: false,
});

export default function LoginForm() {
  const [phone, setPhone] = useState("");

  return (
    <div className="min-h-screen bg-[#0B3434]">
      <Navbar />

      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-[480px] space-y-8">
          <div className="space-y-6 bg-[#0B3434]/90 p-8">
            <div className="space-y-2">
              <h1 className="text-white text-2xl text-center font-semibold mb-6">
                Log In
              </h1>

              <p className="text-white/60 text-sm text-center">
                Please select your country and enter mobile number
              </p>
            </div>

            <div className="space-y-6">
              <div className="phone-input-container">
                <PhoneInput
                  country={"gb"}
                  value={phone}
                  onChange={setPhone}
                  enableSearch={false}
                  inputProps={{
                    required: true,
                    placeholder: "Enter phone number",
                  }}
                  inputClass="!w-full !h-[52px] !bg-transparent !text-white !border-white/20 !pl-[72px] !rounded-lg !text-base"
                  buttonClass="!border-white/20 !bg-transparent !h-[52px] !w-[62px]"
                  containerClass="!w-full"
                  buttonStyle={{
                    backgroundColor: "transparent",
                    borderRight: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              </div>

              <p className="text-white/40 text-xs">
                Requires country code, we will send you a verification code via
                SMS
              </p>

              <Button className="w-full bg-[#2B5B3E] hover:bg-[#234B33] text-white font-medium h-[52px] rounded-lg text-base">
                Send SMS
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-white/20"></div>
                <span className="text-white/60 text-sm">Or</span>
                <div className="flex-1 h-px bg-white/20"></div>
              </div>

              <Button
                variant="outline"
                className="w-full bg-white hover:bg-gray-50 text-gray-900 h-[52px] rounded-lg flex items-center justify-center gap-3 text-base font-medium"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Main input styling */
        .phone-input-container .form-control {
          background: transparent !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          color: white !important;
          width: 100% !important;
          height: 52px !important;
          font-size: 16px !important;
          transition: all 0.2s ease !important;
        }

        .phone-input-container .form-control:focus {
          border-color: rgba(255, 255, 255, 0.4) !important;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.2) !important;
        }

        /* Flag button styling */
        .phone-input-container .flag-dropdown {
          background: transparent !important;
          border: none !important;
          border-right: 1px solid rgba(255, 255, 255, 0.2) !important;
        }

        .phone-input-container .selected-flag {
          background: transparent !important;
          padding: 0 0 0 12px !important;
        }

        .phone-input-container .selected-flag:hover,
        .phone-input-container .selected-flag:focus {
          background: rgba(255, 255, 255, 0.1) !important;
        }

        /* Dropdown styling */
        .phone-input-container .country-list {
          background: #102c2c !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          border-radius: 8px !important;
          margin-top: 8px !important;
          padding: 8px 0 !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3) !important;
          scrollbar-width: thin !important;
          scrollbar-color: rgba(255, 255, 255, 0.3) transparent !important;
          max-height: 280px !important;
        }

        /* Country list items */
        .phone-input-container .country {
          padding: 8px 16px !important;
          display: flex !important;
          align-items: center !important;
          transition: background 0.2s ease !important;
        }

        .phone-input-container .country:hover,
        .phone-input-container .country.highlight {
          background: rgba(255, 255, 255, 0.1) !important;
        }

        .phone-input-container .country-name {
          color: white !important;
          font-size: 14px !important;
          margin-left: 12px !important;
        }

        .phone-input-container .dial-code {
          color: rgba(255, 255, 255, 0.7) !important;
          font-size: 14px !important;
        }

        /* Scrollbar styling */
        .phone-input-container .country-list::-webkit-scrollbar {
          width: 6px !important;
        }

        .phone-input-container .country-list::-webkit-scrollbar-track {
          background: transparent !important;
        }

        .phone-input-container .country-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3) !important;
          border-radius: 3px !important;
        }

        .phone-input-container .country-list::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.4) !important;
        }
      `}</style>
    </div>
  );
}
