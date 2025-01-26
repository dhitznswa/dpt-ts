"use client";

import { useSidebar } from "@/context/SidebarContext";
import { cx } from "class-variance-authority";
import React from "react";

export default function Sidebar({ className }: { className?: string }) {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div
      className={cx(
        "h-screen shadow-sm fixed transition-all duration-300 bg-white md:bg-transparent",
        isOpen ? "top-0 left-0" : "top-0 -left-full md:left-0",
        className,
        "p-5"
      )}
    >
      <h1 className="text-3xl font-bold text-center">DPT.io</h1>
      <p className="text-xs text-slate-400 text-center">
        Powered by @dhitznswa
      </p>
    </div>
  );
}
