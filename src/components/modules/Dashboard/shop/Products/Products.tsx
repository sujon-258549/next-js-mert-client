/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TCategoryData } from "@/types";
import { TableComponent } from "@/components/utils/table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { MdDelete } from "react-icons/md";
import { deleteCategory } from "@/server/Category";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { FaExternalLinkAlt, FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {} from "@/components/ui/dialog";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
const Products = ({ data, meta }: TCategoryData) => {
  console.log(meta, data);

  const handelDeleteCategory = async (categoryId: string) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const deleteResponse = await deleteCategory(categoryId);
        if (deleteResponse) {
          toast.success(deleteResponse?.message, { duration: 2000 });
          Swal.fire({
            title: "Deleted!",
            text: "Your category has been deleted.",
            icon: "success",
          });
        }
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      Swal.fire({
        title: "Error!",
        text: "There was an issue deleting the category. Please try again.",
        icon: "error",
      });
    }
  };

  const columns: ColumnDef<TCategoryData>[] = [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "category.name",
      header: "Category",
    },
    {
      accessorKey: "slug",
      header: "Slug",
    },
    {
      accessorKey: "isActive",
      header: "Active",
      cell: ({ row }) => (
        <span
          className={
            row.original?.isActive
              ? "px-2 py-[2px] bg-customcolor text-white rounded-md"
              : "px-2 py-[2px] bg-red-500 text-white rounded-md"
          }
        >
          {row.original?.isActive ? "Yes" : "No"}
        </span>
      ),
    },
    {
      accessorKey: "stock",
      header: "Stock",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
    {
      accessorKey: "imageUrls",
      header: "Image",
      cell: ({ row }) => (
        <img
          width={50}
          height={50}
          src={row.original?.imageUrls[0]}
          alt="Category Icon"
          className="w-10 h-10 object-cover"
        />
      ),
    },
    {
      accessorKey: "Action",
      header: "Action",
      cell: ({ row }) => (
        <span className="flex gap-2 flex-wrap">
          <Button onClick={() => handelDeleteCategory(row.original?._id)}>
            <MdDelete />
          </Button>
          <Link
            href={`/user/shop/products/update-product/${row?.original?._id}`}
          >
            <Button>
              <FaRegEdit />
            </Button>
          </Link>
          <Button
            onClick={() => {
              // @ts-expect-error row
              setStoreData(row.original); // Store the current row data for editing
            }}
          >
            <FaExternalLinkAlt />
          </Button>
        </span>
      ),
    },
  ];

  return (
    <section>
      <div className="flex pb-5 justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Products</h1>
        </div>
        <Button>
          <Link
            className="flex gap-2 items-center"
            href={"/user/shop/products/add-product"}
          >
            Add Product <IoMdAdd />{" "}
          </Link>
        </Button>
      </div>

      {/* @ts-expect-error data */}
      <TableComponent data={data} columns={columns} />
    </section>
  );
};

export default Products;
