"use client";
import React, { useState } from "react";
import { PropertyType, PropertyStatus } from "@prisma/client";
import Steper from "./Steper";
import Basic from "./Basic";
import { cn } from "@nextui-org/react";
import Locations from "./Locations";
const steps = [
  { label: "Basic" },
  { label: "Location" },
  { label: "Featues" },
  { label: "Pictures" },
  { label: "Contact" },
];
interface Props {
  propertyType: PropertyType[];
  propertyStatus: PropertyStatus[];
}
const PropertyForm = (props: Props) => {
  const [step, setStep] = useState(0);
  return (
    <div className="">
      <Steper items={steps} activeItem={step} setActiveItem={setStep} />
      <form className="mt-4 p-3">
        <Basic
          className={cn({ hidden: step !== 0 })}
          next={() => setStep((prev) => prev + 1)}
          types={props.propertyType}
          statuses={props.propertyStatus}
        />
        <Locations
          className={cn({ hidden: step !== 1 })}
          next={() => setStep((prev) => prev + 1)}
          prev={() => setStep((prev) => prev - 1)}
        />
      </form>
    </div>
  );
};

export default PropertyForm;
