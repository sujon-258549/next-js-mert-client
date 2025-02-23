/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { getCurrentUser } from "@/server/AuthServer";
import { TUser } from "@/types";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type TUserProviderValue = {
  user: TUser | null;
  isLoading: boolean;
  setUser: (user: TUser | null) => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};
export const UserContext = createContext<TUserProviderValue | undefined>(
  undefined
);
const userProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<TUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  //   handel function  //phone
  const handelUserInfo = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };
  //   rerender
  useEffect(() => {
    handelUserInfo();
  }, [isLoading]);
  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUser = () => {
  const context = useContext(UserContext);

  if (context == undefined) {
    throw new Error("useUser must be used within the UserProvider context");
  }

  return context;
};
export default userProvider;
