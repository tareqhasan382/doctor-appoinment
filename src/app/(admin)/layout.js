import { AuthProvider } from "@/Providers";
import "../globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminNavbar from "@/components/Dashboard/Admin-Navbar";
import Aside from "@/components/Dashboard/Aside";
export const metadata = {
  title: "Admin",
  description: "appoinment-booking-Page",
};
// lg:px-28
export default function AdminLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${inter.className} bg-white text-black `}>
        <AuthProvider>
          <div>
            <ToastContainer />
            <AdminNavbar />
            <div className=" min:w-screen h-[1px] bg-gray-400 "></div>
            <div className=" w-full flex ">
              <Aside />
              <div className=" min-h-screen w-[1px] bg-gray-400 "></div>
              <div className=" w-full  p-5 "> {children}</div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
