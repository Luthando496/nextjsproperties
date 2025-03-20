import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navabar";
import AuthProvider from "@/components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";
import { Suspense } from "react";

export const metadata = {
  title: "Blog For You",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions); // Fetch session on server
  return (
    <html lang="en">
      <body>
        <AuthProvider session={session}>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}