/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Category, TCategoryData } from "@/types";
import { TableComponent } from "@/components/utils/table/Table";
import { ColumnDef } from "@tanstack/react-table";
import { MdDelete } from "react-icons/md";
import { deleteCategory } from "@/server/Category";
import Swal from "sweetalert2";
import { toast } from "sonner";
import { FaExternalLinkAlt, FaRegEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import BrandForm from "./BrandForm";
import { deleteBrand } from "@/server/Brand";

const ManageBrand = ({ data, meta }: TCategoryData) => {
  console.log(meta);
  const [storeData, setStoreData] = useState<Category | null>(null); // Define the correct type for storeData
  const [dialogOpen, setDialogOpen] = useState(false); // For controlling dialog open/close

  const handelDeleteBrand = async (brandId: string) => {
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
        const deleteResponse = await deleteBrand(brandId);
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
      accessorKey: "name", // Points to the "name" property directly
      header: "Name",
      cell: ({ row }) => {
        return row.original.name.slice(0, 20); // Slice the name to get the first 2 characters
      },
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
      accessorKey: "createdBy.name",
      header: "Created By Name",
    },
    {
      accessorKey: "createdBy.role",
      header: "Created By Role",
    },
    {
      accessorKey: "logo",
      header: "Icon",
      cell: ({ row }) => (
        <img
          width={50}
          height={50}
          src={row.original?.logo}
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
          <Button onClick={() => handelDeleteBrand(row.original?._id)}>
            <MdDelete />
          </Button>
          <Button
            onClick={() => {
              setStoreData(row.original); // Store the current row data
              setDialogOpen(true); // Open the dialog
            }}
          >
            <FaExternalLinkAlt />
          </Button>
          <Button
            onClick={() => {
              setStoreData(row.original); // Store the current row data for editing
              setDialogOpen(true); // Open the dialog for editing
            }}
          >
            <FaRegEdit />
          </Button>
        </span>
      ),
    },
  ];

  return (
    <section>
      <div className="flex pb-5 justify-between">
        <div>
          <h1 className="text-2xl font-bold">Manage Brands</h1>
        </div>
        <BrandForm />
      </div>

      {/* @ts-expect-error data */}
      <TableComponent data={data} columns={columns} />

      {/* Dialog for showing or editing category */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <img
              src={storeData?.logo}
              alt="Category Icon"
              className="h-20 w-20 object-cover object-cover"
            />
            <DialogTitle>{storeData?.name}</DialogTitle>
            <DialogDescription>
              <div className="text-sm text-muted-foreground"></div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ManageBrand;
