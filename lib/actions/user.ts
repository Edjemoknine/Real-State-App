"use server";

import prisma from "../prisma";

export const getUserInfo = async (id: any) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: id } });
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const updateAvatar = async (avatarUrl: string, userId: string) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      avatarUrl,
    },
  });
};
