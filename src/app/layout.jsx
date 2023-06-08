"use client";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Border from "@/components/Border";

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

// 2. Call `createTheme` and pass your custom values
const lightTheme = createTheme({
  type: "light",
  theme: {
    colors: {
      backgroundColor: "#f7fff7",
      color: "#101010",
    },
  },
});

const darkTheme = createTheme({
  type: "dark",
  theme: {
    colors: {
      color: "#f7fff7",
      backgroundColor: "#101010",
    },
  },
});

/*export const metadata = {
  title: "Ivan Nikolic",
  description: "Welcome to my portfolio!",
  openGraph: {
    title: "ivan nikolic",
    description: "Welcome to my portfolio!",
    siteName: "ivan.nikolic.xyz",
    locale: "en-GB",
    type: "website",
  },
};*/

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <body>
            <Navbar />
            {children}
            <Footer />
            <Border />
          </body>
        </NextUIProvider>
      </NextThemesProvider>
    </html>
  );
}
