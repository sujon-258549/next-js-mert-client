"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react";

export default function PaymentCanceledPage() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <Card className="w-full max-w-md p-6 text-center rounded-2xl shadow-lg">
        <CardContent className="flex flex-col items-center">
          <XCircle className="w-16 h-16 text-yellow-500" />
          <h2 className="mt-4 text-2xl font-semibold text-black">
            Payment Canceled
          </h2>
          <p className="text-gray-500">
            You have canceled the transaction. If this was a mistake, you can
            try again.
          </p>
          <Button
            className="mt-6 w-full bg-yellow-600 hover:bg-yellow-700 text-white rounded-full"
            onClick={() => router.push("/")}
          >
            Go Back
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
