/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../ui/form";
import { Input } from "../../../ui/input";
import { Button } from "../../../ui/button";
import { useState } from "react";
import Link from "next/link";
import SingleLogo from "../../../utils/SingleLogo";
import { registerSchema } from "./register.zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "@/server/AuthServer";
import { toast } from "sonner";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
import { useRouter } from "next/navigation";
const Register = () => {
  const router = useRouter();
  const [shotPassword, setShowPassword] = useState<boolean>();
  const form = useForm({
    resolver: zodResolver(registerSchema),
  });
  const password = form.watch("password");
  const conformPassword = form.watch("conformPassword");
  const name = form.watch("name");
  const email = form.watch("email");
  const {
    formState: { isSubmitting },
  } = form;

  const submit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("User Creating...............", {
      duration: 2000,
    });
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };
    try {
      const result = await registerUser(userData);
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        router.push("/");
      } else {
        toast.error(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      return Error(error);
    }
  };
  const isDisabled =
    password !== conformPassword ||
    !name ||
    !email ||
    !password ||
    !conformPassword;
  return (
    <section className="px-5">
      <div className="">
        <div
          style={{ boxShadow: "1px 1px 10px" }}
          className=" w-full md:w-[500px]  border rounded-md p-5 "
        >
          <div className="flex items-center gap-3">
            <div className="">
              <SingleLogo />
            </div>
            <div className="">
              {" "}
              <h1 className="text-xl font-bold lg:text-2xl">
                Registration Form
              </h1>
              <p>Join us, start today</p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(submit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        placeholder="Enter Your Name"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="Enter Your Email"
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormDescription />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div></div>
              </div>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={shotPassword ? "text" : "password"}
                        placeholder="Enter Your password"
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="conformPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type={shotPassword ? "text" : "password"}
                        placeholder="Enter Your Confirm password"
                        value={field.value || ""}
                      />
                    </FormControl>
                    {/* Display error message if passwords do not match */}
                    {password &&
                      conformPassword &&
                      password !== conformPassword && (
                        <FormMessage>Passwords do not match</FormMessage>
                      )}
                    <FormDescription />
                  </FormItem>
                )}
              />
              <div className="flex gap-2">
                <input
                  onChange={() => setShowPassword(!shotPassword)}
                  type="checkbox"
                />
                <p>{shotPassword ? "Hide Password" : "Show Password"}</p>
              </div>
              {isSubmitting ? (
                <Button
                  // disabled={isDisabled}
                  className="w-full my-5"
                  type="submit"
                >
                  <LoaderButton />
                </Button>
              ) : (
                <Button
                  disabled={isDisabled}
                  className="w-full my-5"
                  type="submit"
                >
                  Submit
                </Button>
              )}
            </form>
          </Form>
          <div className="flex gap-2 text-sm md:text-[16px] justify-center">
            <p>Already have an account?</p>
            <Link href="/login" className="text-customcolor hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
