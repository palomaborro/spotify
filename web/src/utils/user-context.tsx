import React, { createContext, useState, ReactNode } from "react";

type UserContextData = {
  userId: string | null;
  token: string | null;
  isAuthenticated: boolean;
};

type UserContextType = {
  user: UserContextData;
  setUser: (userContextData: UserContextData) => void;
  logoutUser: () => void;
};

type UserProviderProps = {
  children: ReactNode;
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
  logoutUser: () => {},
});

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextData>(getUserFromLocalStorage());

  const logoutUser = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    setUser({ userId: null, token: null, isAuthenticated: false });
  };

  return (
    <UserContext.Provider value={{ user, setUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
