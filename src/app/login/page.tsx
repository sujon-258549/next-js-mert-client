// @ts-expect-error
import Login from "../../components/Shared/auth/login/Login";
const page = () => {
  return (
    <div className="w-screen h-screen md:flex justify-center items-center">
      <div>
        <Login />
      </div>
    </div>
  );
};

export default page;
