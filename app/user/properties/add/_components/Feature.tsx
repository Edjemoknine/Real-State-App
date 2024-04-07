import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { Button, Card, Checkbox, cn, Input, Textarea } from "@nextui-org/react";

import React from "react";

interface Props {
  next: () => void;
  prev: () => void;
  className?: string;
}
const Feature = (props: Props) => {
  const handleNext = () => {
    props.next();
  };
  const handlePrev = () => {
    props.prev();
  };
  return (
    <Card
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 gap-3 p-3",
        props.className
      )}
    >
      <Input label="Bedrooms" />
      <Input label="Bathrooms" />
      <Input label="Area" />
      <Input label="Parking Spots" />
      <Textarea label="Description" className="md:col-span-2" />
      <div className="flex justify-between items-center">
        <Checkbox>Has Swimming Pool</Checkbox>
        <Checkbox>Has Garden/Yard </Checkbox>
        <Checkbox>Has Balcony/Patio </Checkbox>
      </div>
      <div className="flex justify-center gap-3 col-span-2">
        <Button
          color="primary"
          className="w-36"
          startContent={<ChevronLeftIcon className="w-6" />}
          onClick={handlePrev}
        >
          {" "}
          Previous
        </Button>
        <Button
          color="primary"
          className="w-36"
          endContent={<ChevronRightIcon className="w-6" />}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </Card>
  );
};

export default Feature;
