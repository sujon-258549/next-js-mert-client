import styles from "./products.module.css";

import React from "react";
type THadding = {
  title: string;
  path: string;
};

const CommonBanner = ({ title, path }: THadding) => {
  return (
    <section className="mt-5 container">
      <div className={`${styles.productBanner}`}>
        <div className="mx-auto py-10">
          <h3 className="text-[28px] text-center font-semibold">{title}</h3>
          <p className="text-center ">{path}</p>
        </div>
      </div>
    </section>
  );
};

export default CommonBanner;
