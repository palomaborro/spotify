import { createContext } from "react";

type UserContextData = {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

type UserContextType = {
  user: UserContextData;
  setUser: (userContextData: UserContextData) => void;
};

const getUserFromLocalStorage = (): UserContextData => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  return {
    userId: userId ? userId : null,
    token: token ? token : null,
    isAuthenticated: !!userId && !!token,
  };
};

export const UserContext = createContext<UserContextType>({
  user: getUserFromLocalStorage(),
  setUser: () => {},
});
