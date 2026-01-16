import type { Metadata } from "next";

import "../index.css";
import Providers from "@/components/providers";
import { getToken } from "@/lib/auth-server";

export const metadata: Metadata = {
  description: "fobos",
  title: "fobos",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const token = await getToken();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers initialToken={token}>{children}</Providers>
      </body>
    </html>
  );
}
