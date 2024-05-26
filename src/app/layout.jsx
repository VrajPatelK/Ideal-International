import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = { ...openGraphImage };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar-div">
          <Navbar></Navbar>
        </div>
        <div className="layout-div">{children}</div>
        <div className="footer-div">
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
