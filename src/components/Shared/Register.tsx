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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import Link from "next/link";

const Register = () => {
  const [shotPassword, setShowPassword] = useState<boolean>();
  const from = useForm();
  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <section className=" py-5 lg:py-0 px-5">
      <div className="">
        <div
          style={{ boxShadow: "1px 1px 10px" }}
          className=" w-full md:w-[500px]  border rounded-md p-5 "
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center py-5 lg:text-4xl">
            Registration From
          </h1>
          <Form {...from}>
            <form onSubmit={from.handleSubmit(submit)}>
              <FormField
                control={from.control}
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
                  control={from.control}
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
                control={from.control}
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
                control={from.control}
                name="conformPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Conform Password</FormLabel>
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
              <div className="flex gap-2">
                <input
                  onChange={() => setShowPassword(!shotPassword)}
                  type="checkbox"
                />
                <p>{shotPassword ? "Hide Password" : "Show Password"}</p>
              </div>
              <Button className="w-full my-5" type="submit">
                Submit
              </Button>
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
