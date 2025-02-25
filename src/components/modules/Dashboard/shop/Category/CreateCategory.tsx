/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Category, TCategoryData } from "@/types";
import CategoryForm from "./CategoryForm";
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

const CreateCategory = ({ data, meta }: TCategoryData) => {
  const [storeData, setStoreData] = useState<Category | null>(null); // Define the correct type for storeData
  const [dialogOpen, setDialogOpen] = useState(false); // For controlling dialog open/close

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
      accessorKey: "createdBy.name",
      header: "Created By Name",
    },
    {
      accessorKey: "createdBy.role",
      header: "Created By Role",
    },
    {
      accessorKey: "icon",
      header: "Icon",
      cell: ({ row }) => (
        <img
          width={50}
          height={50}
          src={row.original?.icon}
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
          <h1 className="text-2xl font-bold">Manage Category</h1>
        </div>
        <CategoryForm />
      </div>

      {/* @ts-expect-error data */}
      <TableComponent data={data} columns={columns} />

      {/* Dialog for showing or editing category */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <img
              src={storeData?.icon}
              alt="Category Icon"
              className="h-20 w-20 object-cover object-cover"
            />
            <DialogTitle>{storeData?.name}</DialogTitle>
            <DialogDescription>
              <div className="text-sm text-muted-foreground">
                {storeData?.description}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CreateCategory;
