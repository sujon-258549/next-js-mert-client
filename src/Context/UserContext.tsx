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
  //   handel function
  const handelUserInfo = async () => {
    const user = await getCurrentUser();
    setUser(user);
    setIsLoading(false);
  };
  //   rerender
  useEffect(() => {
    handelUserInfo();
  }, []);
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

// import { getCurrentUser } from "@/server/AuthServer";
// import { TUser } from "@/types";
// import {
//   createContext,
//   Dispatch,
//   SetStateAction,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// type TUserProviderValue = {
//   user: TUser | null;
//   isLoading: boolean;
//   setUser: (user: TUser | null) => void;
//   setIsLoading: Dispatch<SetStateAction<boolean>>;
// };

// // ✅ Export UserContext
// export const UserContext = createContext<TUserProviderValue | undefined>(
//   undefined
// );

// // ✅ Capitalized Component Name
// const UserProvider = ({ children }: { children: React.ReactNode }) => {
//   const [user, setUser] = useState<TUser | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   // ✅ Fixed function name
//   const handleUserInfo = async () => {
//     const userData = await getCurrentUser();
//     setUser(userData);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     handleUserInfo();
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

// // ✅ Custom Hook for using User Context
// export const useUser = () => {
//   const context = useContext(UserContext);
//   if (context === undefined) {
//     throw new Error("useUser must be used within the UserProvider context");
//   }
//   return context;
// };

// export default UserProvider;
