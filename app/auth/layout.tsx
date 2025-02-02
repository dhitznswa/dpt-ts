import React from "react";
import Card from "../components/utils/card";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="max-w-[300px] w-full">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-center">DPT.io</h1>
          <p className="text-xs text-slate-400 text-center">
            Powered by @dhitznswa
          </p>
        </div>
        <Card className=" border border-slate-300 shadow-lg">{children}</Card>
      </div>
    </div>
  );
}
