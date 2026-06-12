import { prisma }
  from "../lib/prisma";

export const findUserById =
  async (
    id: string
  ) => {
    return prisma.user.findUnique({
      where: {
        id,
      },
    });
  };

export const createUser =
  async (
    id: string,
    email: string
  ) => {
    return prisma.user.create({
      data: {
        id,
        email,
      },
    });
  };