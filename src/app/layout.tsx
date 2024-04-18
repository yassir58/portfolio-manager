import "~/styles/globals.css";

import { Inter } from "next/font/google";

import { TRPCReactProvider } from "~/trpc/react";
import { SessionProvider } from "next-auth/react";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "devPort",
  description: "A portfolio builder for developers",
  icons: [{ rel: "icon", url: "/Logo-small.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
      </body>
    </html>
  );
}
