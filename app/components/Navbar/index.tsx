"use client";

import { useSidebar } from "@/context/SidebarContext";
import React from "react";

export default function Navbar() {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-full bg-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <div className="">Search</div>
        <div className="flex items-center gap-5">
          <div className="">Notif</div>
          <div className="">User</div>
          <div className="">
            <button onClick={toggleSidebar}>x</button>
          </div>
        </div>
      </div>
    </div>
  );
}
