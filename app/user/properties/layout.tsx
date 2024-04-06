import React, { ReactNode } from "react";
import { Button } from "@nextui-org/button";
import Link from "next/link";
interface Props {
  children: ReactNode;
}
const layout = ({ children }: Props) => {
  return (
    <div>
      <div className="flex justify-between p-2 items-center bg-primary-400 ">
        <h2 className="text-white text-xl font-semibold px-2">
          User Properties
        </h2>
        <Button color="secondary">
          <Link href={"/user/properties/add"}>Add Property</Link>
        </Button>
      </div>
      {children}
    </div>
  );
};

export default layout;
