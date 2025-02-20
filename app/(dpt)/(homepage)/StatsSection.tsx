"use client";

import Card from "@/app/components/utils/card";
import useClientIP from "@/hooks/useClientIP";
import React from "react";

export default function StatsSection() {
  const dataIP = useClientIP();

  return (
    <>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        <Card>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="text-lg font-bold">192k</h3>
              <span className="-mt-1 text-sm text-slate-400 font-medium tracking-wide">
                Pengunjung
              </span>
            </div>
            <div className="">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <i className="fa-solid fa-users"></i>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="text-lg font-bold">20+</h3>
              <span className="-mt-1 text-sm text-slate-400 font-medium tracking-wide">
                Tools Tersedia
              </span>
            </div>
            <div className="">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <i className="fa-solid fa-screwdriver-wrench"></i>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="text-lg font-bold">
                {dataIP?.data?.ip ?? "Loading ..."}
              </h3>
              <span className="-mt-1 text-sm text-slate-400 font-medium tracking-wide">
                IP Address
              </span>
            </div>
            <div className="">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <i className="fa-solid fa-bolt"></i>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex justify-between items-center">
            <div className="">
              <h3 className="text-lg font-bold">1.0.0</h3>
              <span className="-mt-1 text-sm text-slate-400 font-medium tracking-wide">
                Version
              </span>
            </div>
            <div className="">
              <div className="h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <i className="fa-solid fa-tags"></i>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
