import UserProvider from "@/Context/UserContext";
import StoreProvider from "./StoreProvider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <StoreProvider>{children}</StoreProvider>
    </UserProvider>
  );
};

export default Provider;
