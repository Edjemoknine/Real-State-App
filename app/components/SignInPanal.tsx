import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { Button } from "@nextui-org/button";
import UserProfile from "./UserProfile";
import prisma from "@/lib/prisma";

const SignInPanal = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();

  if (await isAuthenticated()) {
    const user = await getUser();
    const dbUser = await prisma.user.findUnique({ where: { id: user?.id } });

    return <>{dbUser ? <UserProfile user={dbUser} /> : ""}</>;
  }

  return (
    <div className=" flex gap-3 items-center">
      <Button color="primary">
        <LoginLink>Sign In</LoginLink>
      </Button>
      <Button>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  );
};

export default SignInPanal;
