/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import ReCAPTCHA from "react-google-recaptcha";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import LoaderButton from "@/components/utils/Loader/LoaderButton";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginSchema } from "./login.ts";
import { loginUser, verifyRecapta } from "../../../../server/AuthServer/index";
import { useUser } from "../../../../Context/UserContext.tsx";
const Login = () => {
  const { setIsLoading } = useUser();
  const router = useRouter();
  const [shotPassword, setShowPassword] = useState<boolean>();
  const [recaptaStatus, setRecaptaStatus] = useState(false);
  const from = useForm({
    resolver: zodResolver(loginSchema),
  });
  const {
    formState: { isSubmitting },
  } = from;
  const email = from.watch("email");
  const password = from.watch("password");
  const isDisabled = !email || !password || !recaptaStatus;
  const handelRecapta = async (value: string | null) => {
    try {
      const res = await verifyRecapta(value!);
      if (res?.success) {
        setRecaptaStatus(true);
      }
    } catch (err: any) {
      console.log(err);
    }
  };
  const submit: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("User Creating...............", {
      duration: 2000,
    });
    const userData = {
      email: data.email,
      password: data.password,
    };
    try {
      const result = await loginUser(userData);
      if (result?.success) {
        toast.success(result?.message, { id: toastId, duration: 2000 });
        setIsLoading(true);
        router.push("/");
        // window.location.reload();
      } else {
        toast.error(result?.message, { id: toastId, duration: 2000 });
      }
    } catch (error: any) {
      return Error(error);
    }
  };

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
              <h1 className="text-xl font-bold lg:text-2xl">Login Form</h1>
              <p>Welcome back</p>
            </div>
          </div>
          <Form {...from}>
            <form onSubmit={from.handleSubmit(submit)}>
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
              <div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTA_CLIENT_KYE}
                  onChange={handelRecapta}
                />
              </div>
              ,
              <div className="flex gap-2">
                <input
                  className="text-customcolor"
                  onChange={() => setShowPassword(!shotPassword)}
                  type="checkbox"
                />
                <p>{shotPassword ? "Hide Password" : "Show Password"}</p>
              </div>
              {isSubmitting ? (
                <Button
                  disabled={isDisabled}
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
            <p>Don,t have an account?</p>
            <Link href="/register" className="text-customcolor hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
