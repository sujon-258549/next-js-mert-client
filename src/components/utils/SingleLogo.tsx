import React from "react";
import logo from "../../assets/logo/sn.png";
import Image from "next/image";
const SingleLogo = () => {
  return (
    <div>
      <Image src={logo} width={60} height={40} alt="logo-Image" />
    </div>
  );
};

export default SingleLogo;
