import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";
import { getUserInfo } from "../../../lib/actions/user";
import PageTitle from "@/app/components/PageTitle";
import { Card } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";
import SectionTitle from "./_components/SectionTitle";
import UploadAvatar from "./_components/UploadAvatar";
const Profile = async () => {
  const { getUser } = await getKindeServerSession();
  const user = await getUser();
  const userInfo = await getUserInfo(user?.id);

  return (
    <div>
      <PageTitle title="My Profile" />
      <Card className="m-4 p-4">
        <SectionTitle title="Basic information" />
        <div className="flex">
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20" src={userInfo?.avatarUrl ?? ""} />
            <UploadAvatar />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Attribute
            title="Name"
            value={`${userInfo?.firstName} ${userInfo?.lastName}`}
          />
          <Attribute title="Email" value={`${userInfo?.email}`} />
          <Attribute
            title="Register On"
            value={`${userInfo?.createdAt.toLocaleDateString()}`}
          />
          <Attribute title="Properties Posted" value={`0`} />
        </div>
      </Card>
    </div>
  );
};

export default Profile;

const Attribute = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col">
      <span className="text-sm font-medium text-gray-800">{title}</span>
      <span className=" text-gray-600">{value}</span>
    </div>
  );
};
