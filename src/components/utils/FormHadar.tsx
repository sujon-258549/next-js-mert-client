import React from "react";
import SingleLogo from "./SingleLogo";

interface TFormHade {
  formHadar: string;
  formParagraph: string;
}

const FormHadar = ({ formHadar, formParagraph }: TFormHade) => {
  return (
    <div className="flex items-center gap-3 py-5">
      <div className="">
        <SingleLogo />
      </div>
      <div className="">
        <h1 className="text-xl font-bold lg:text-2xl">{formHadar}</h1>
        <p>{formParagraph}</p>
      </div>
    </div>
  );
};

export default FormHadar;
