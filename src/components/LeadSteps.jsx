import React from "react";

const steps = [
  "New Leads", "In Process", "Future Interest",
  "Cold Leads", "Applicant", "Payment", "CAS Issued", "Enrolled"
];

export default function LeadSteps({ currentStep }) {
  const currentIndex = steps.findIndex((step) => step === currentStep);

  return (
    <div className="flex justify-between items-center border-b py-4 overflow-x-auto">
      {steps.map((step, index) => {
        const isCompleted = index <= currentIndex;

        return (
          <div key={index} className="flex flex-col items-center mx-2 min-w-[80px]">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                isCompleted ? "bg-blue-600 text-white" : "border-2 border-gray-300 text-gray-500"
              }`}
            >
              {isCompleted ? "✓" : ""}
            </div>
            <span
              className={`text-xs mt-2 text-center ${
                index === currentIndex ? "text-blue-600 font-semibold" : "text-gray-600"
              }`}
            >
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}
