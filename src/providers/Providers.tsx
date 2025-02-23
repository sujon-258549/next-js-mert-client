import UserProvider from "@/Context/UserContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default Provider;
