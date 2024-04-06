"use client";
import React, { useState } from "react";
import Steper from "./Steper";
const steps = [
  { label: "Basic" },
  { label: "Location" },
  { label: "Featues" },
  { label: "Pictures" },
  { label: "Contact" },
];
const PropertyForm = () => {
  const [step, setStep] = useState(0);
  return (
    <div>
      <Steper items={steps} activeItem={step} setActiveItem={setStep} />
    </div>
  );
};

export default PropertyForm;
