import type { Metadata } from "next";
import "./globals.css";
import { Nunito } from "next/font/google"
import Navbar from "./components/navbar/Navbar";
import RegisterModal from "./components/modals/RegisterModal";
import ToasterProvider from "./providers/ToasterProvider";

const font = Nunito({
  subsets: ["latin"],
})


export const metadata: Metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone with nextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        <ToasterProvider/>
        <RegisterModal

        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
