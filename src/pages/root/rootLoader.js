import { getUser } from "../../services/authService";

export const rootLoader = async () => {
  const user = await getUser();
  return { user };
};
