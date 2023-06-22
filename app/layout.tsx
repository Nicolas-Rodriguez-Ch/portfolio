import NavBar from "./components/NavBar";
import "./styles/globals.scss";
import { Inter } from "next/font/google";
import { assets } from "@/utils/assets";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nicolás Rodríguez",
  description: "Front End Web Developer",
  type: "website",
  siteName: "Nicolas Rodriguez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={assets.logo} sizes="any" />
      </head>
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
