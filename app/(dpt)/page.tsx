"use client";

import useClientIP from "@/hooks/useClientIP";
import HeaderTool from "../components/HeaderTool";
import Card from "../components/utils/card";

export default function Home() {
  const dataIP = useClientIP();
  return (
    <>
      <div className="mb-4">
        <HeaderTool
          title="Homepage"
          description="Selamat datang di Dynamic Power Tools, Mudahkan hidupmu dengan berbagai tools kami."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-duotone fa-tags text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              versi
            </span>
            <span className="text-2xl font-medium">1.0</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Jumlah Tools
            </span>
            <span className="text-2xl font-medium">20+</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-signal-stream text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              IP Address
            </span>
            <span className="text-2xl font-medium">{dataIP?.data?.ip}</span>
          </div>
        </Card>
        <Card className="flex items-center gap-4">
          <div className="w-1/2">
            <i className="fa-solid fa-users text-2xl"></i>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
              Visitors
            </span>
            <span className="text-2xl font-medium">3079</span>
          </div>
        </Card>
      </div>
    </>
  );
}
