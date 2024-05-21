import Navber from "@/components/Navber";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PhotoFeed ",
  description: "A PhotoFeed App build",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navber />
        <div className="container my-4 lg:my-8">
        {children}

        </div>

        <div id="modal-root-content"></div>
        
        </body>
    </html>
  );
}
