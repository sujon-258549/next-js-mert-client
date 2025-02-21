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

const Register = () => {
  const [shotPassword, setShowPassword] = useState<boolean>();
  const from = useForm();
  const submit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  return (
    <section className=" mt-5 md:mt-20">
      <div className="">
        <div
          style={{ boxShadow: "1px 1px 10px" }}
          className="max-w-md  border rounded-md p-5  mx-auto"
        >
          <h1 className=" text-3xl font-bold text-center py-5 md:text-4xl">
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
        </div>
      </div>
    </section>
  );
};

export default Register;
