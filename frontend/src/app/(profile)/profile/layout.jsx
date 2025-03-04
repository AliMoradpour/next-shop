import vazirFont from "@/constants/localFonts";
import "../globals.css";

import { Toaster } from "react-hot-toast";
import Providers from "@/app/Providers";
import SideBar from "./SideBar";

export const metadata = {
  title: "پروفایل کاربر",
  description: "صفحه پروفایل کاربر",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body suppressHydrationWarning={true} className={`${vazirFont.variable} font-sans`}>
        <Providers>
          <Toaster />
          <div className="grid grid-cols-4 bg-white h-screen">
            <div className="col-span-1 bg-gray-100 overflow-y-auto p-4">
              <SideBar />
            </div>
            <div className="col-span-3 overflow-y-auto p-4">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
