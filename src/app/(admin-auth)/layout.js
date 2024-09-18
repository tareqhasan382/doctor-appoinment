// import Navbar from "@/components/UI/Navbar";
import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "@/Providers";
export const metadata = {
  title: "Authentication",
  description: "appoinment-booking-Page",
};

export default function AdminAuthLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-gray-200`}>
        <AuthProvider>
          <div>
            <ToastContainer />
            {/* <Navbar /> */}
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
