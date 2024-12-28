import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./styles/globals.scss";
import type { Metadata } from "next";

import BootstrapClient from "@/components/BootstrapClient";
import NavBar from "./common/NavBar";

export const metadata: Metadata = {
  title: "Core Dreams",
  description: "Sample Frontend Figma -> HTML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
