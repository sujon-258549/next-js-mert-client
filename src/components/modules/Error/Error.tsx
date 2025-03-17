"use client";

import Image from "next/image";

import NotFoundImage from "../../../assets/error/404-computer.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
const Error = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <div className="flex flex-col items-center justify-center h-screen">
              <Image
                src={NotFoundImage}
                alt="404 Not Found"
                width={400}
                height={300}
              />
              <h1 className="text-4xl font-bold mt-4">404 - Page Not Found</h1>
              <p className="text-lg mt-2">
                The page you are looking for does not exist.
              </p>
            </div>
            <Link href="/">
              <Button> Back to Homepage</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
