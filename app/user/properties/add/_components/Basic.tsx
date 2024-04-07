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
import { PropertyType, PropertyStatus } from "@prisma/client";

interface Props {
  className?: string;
  types: PropertyType[];
  statuses: PropertyStatus[];
  next: () => void;
}

const Basic = (props: Props) => {
  const handleNext = () => props.next();
  return (
    <Card
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-3 p-3",
        props.className
      )}
    >
      <Input label="Name" className="md: col-span-3" />
      <Textarea label="Description" className="md:col-span-3" />
      <Select label="Type" selectionMode="single">
        {props.types.map((type) => (
          <SelectItem key={type.id} value={type.value}>
            {type.value}
          </SelectItem>
        ))}
      </Select>
      <Select label="Status" selectionMode="single">
        {props.statuses.map((type) => (
          <SelectItem key={type.id} value={type.value}>
            {type.value}
          </SelectItem>
        ))}
      </Select>
      <Input label="Price" />

      <div className="flex justify-center gap-3 col-span-3">
        <Button
          color="primary"
          className="w-36"
          startContent={<ChevronLeftIcon className="w-6" />}
          isDisabled
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

export default Basic;
