"use client";
import { User as PrismaUser } from "@prisma/client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import { Avatar } from "@nextui-org/avatar";
import Image from "next/image";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";

interface userProps {
  user: PrismaUser;
}
const UserProfile = ({ user }: userProps) => {
  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            avatarProps={{
              isBordered: true,
              src:
                user.avatarUrl ??
                "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
            description={user.email}
            name={`${user.firstName} ${user.lastName}`}
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat">
          <DropdownItem key="profile">
            <Link href={"/user/profile"}>Profile</Link>
          </DropdownItem>
          <DropdownItem key="properties">
            <Link href={"/user/properties"}>Properties</Link>
          </DropdownItem>
          <DropdownItem key="logout" color="danger">
            <LogoutLink>Log Out</LogoutLink>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default UserProfile;
