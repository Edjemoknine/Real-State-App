import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Card,
  cn,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import next from "next";
import React from "react";
interface Props {
  next: () => void;
  prev: () => void;
  className?: string;
}
const Locations = (props: Props) => {
  const handleNext = () => {
    props.next();
  };
  const handlePrev = () => {
    props.prev();
  };
  return (
    <div>
      <Card
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-3 p-3",
          props.className
        )}
      >
        <Input label="Street Address" />
        <Input label="Zip/Postal Code" />
        <Input label="City" />
        <Input label="State" />
        <Input label="Region/Neighborhood" className="col-span-2" />
        <Textarea label="Description" className="md:col-span-2" />

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
    </div>
  );
};

export default Locations;
