import { getUser } from "../../services/authService";

export const rootLoader = async () => {
  try {
    const user = await getUser();
    return { user };
  } catch (error) {
    console.log(error);
    return null;
  }
};
