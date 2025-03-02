"use client";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";
import { TPagination } from "@/types";
import React, { useEffect, useState } from "react";
import ResponsivePagination from "react-responsive-pagination";
import "react-responsive-pagination/themes/classic.css";
// 👆 classic theme, see below for other theme / css options

const PagePagination = ({ meta }: { meta: TPagination }) => {
  const { total, totalPage: totalPages } = meta;
  console.log(total, totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    router.push(`${path}?page=${currentPage}`);
  }, [currentPage, path, router]);
  return (
    <div className="py-10">
      <ResponsivePagination
        current={currentPage}
        total={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PagePagination;
