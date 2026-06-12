import { getOrCreateUser }
  from "../services/auth.services.js";

const main = async () => {
  const user =
    await getOrCreateUser(
      "test-user",
      "test@example.com"
    );

  console.log(user);
};

main();