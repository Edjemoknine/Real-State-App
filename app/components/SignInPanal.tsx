import {
  getKindeServerSession,
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { Button } from "@nextui-org/button";

const SignInPanal = async () => {
  const { isAuthenticated, getUser } = await getKindeServerSession();
  const user = await getUser();
  if (await isAuthenticated())
    return (
      <div>
        {user?.given_name} <LogoutLink>LogOut</LogoutLink>
      </div>
    );
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
