import React, { Suspense } from "react";
import Sidebar from "../components/Sidebar";
import { SidebarContextProvider } from "@/context/SidebarContext";
import Navbar from "../components/Navbar";
import LoadingAnimation from "../components/utils/loading";

export default function DPTLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SidebarContextProvider>
        <div className="w-full flex">
          <Sidebar className="w-[80%] md:w-1/5" />
          <main className="w-full md:w-4/5 md:ml-auto min-h-screen bg-slate-100/80">
            <Navbar />
            <div className="p-4 container mx-auto relative">
              <Suspense fallback={<LoadingAnimation />}>{children}</Suspense>
            </div>
          </main>
        </div>
      </SidebarContextProvider>
    </>
  );
}
