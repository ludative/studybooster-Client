import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER_BY_TOKEN } from "@/queries/user";
import { IUser, IUserByToken } from "@/interfaces/user";

export default (): IUser | undefined => {
  const [auth, setAuth] = useState<IUser>();
  const { data } = useQuery<IUserByToken>(GET_USER_BY_TOKEN);

  if (data?.getUserByToken) setAuth(data.getUserByToken);

  return auth;
};
