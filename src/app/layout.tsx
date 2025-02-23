import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Provider from "@/providers/Providers";
// Import the font and apply the class
const urbanistFont = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Specify weights if needed
});

export const metadata: Metadata = {
  title: "Next Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={`${urbanistFont.className}`}>
          <Toaster richColors position="top-center" /> {children}
        </body>
      </html>
    </Provider>
  );
}
