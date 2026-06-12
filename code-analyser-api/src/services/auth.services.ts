import {
  createUser,
  findUserById,
} from "./user.services";

export const getOrCreateUser =
  async (
    id: string,
    email: string
  ) => {
    const existingUser =
      await findUserById(
        id
      );

    if (
      existingUser
    ) {
      return existingUser;
    }

    return createUser(
      id,
      email
    );
  };