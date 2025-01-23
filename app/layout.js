import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navabar";
import AuthProvider from "@/components/AuthProvider";


export const metadata = {
  title: "Blog For You",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body>
      <Navbar />
        {children}
        <Footer />
      </body>
    </html>
    </AuthProvider>
  );
}
