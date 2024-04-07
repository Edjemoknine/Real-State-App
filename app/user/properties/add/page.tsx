import React from "react";
import PropertyForm from "./_components/PropertyForm";
import prisma from "@/lib/prisma";

const AddProperty = async () => {
  const [propertyType, propertyStatus] = await Promise.all([
    prisma.propertyType.findMany(),
    prisma.propertyStatus.findMany(),
  ]);
  return (
    <div>
      <PropertyForm
        propertyType={propertyType}
        propertyStatus={propertyStatus}
      />
    </div>
  );
};

export default AddProperty;
