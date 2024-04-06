import { PrismaClient } from "@prisma/client";

const globaPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globaPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globaPrisma.prisma = prisma;

export default prisma;
