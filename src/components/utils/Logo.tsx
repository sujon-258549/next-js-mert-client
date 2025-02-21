import Image from "next/image";
import logo from "../../assets/logo/logo.png";
const Logo = () => {
  return (
    <div>
      <Image src={logo} width={150} height={80} alt="Logo Image" />
    </div>
  );
};

export default Logo;
