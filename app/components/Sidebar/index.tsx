"use client";

import { useSidebar } from "@/context/SidebarContext";
import { cx } from "class-variance-authority";
import React, { useEffect, useRef } from "react";
import SidebarListItems from "./sidebarListItems";
import { usePathname } from "next/navigation";

export default function Sidebar({ className }: { className?: string }) {
  const { isOpen, setStatus } = useSidebar();
  const pathname = usePathname();

  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleOutSideClick = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setStatus(false);
    }
  };

  const activeLink = (path: string) => {
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    document.addEventListener("click", handleOutSideClick);

    return () => {
      document.removeEventListener("click", handleOutSideClick);
    };
  });

  return (
    <div
      className={cx(
        "h-screen shadow-sm fixed transition-all duration-300 bg-white md:bg-transparent z-999",
        isOpen ? "top-0 left-0" : "top-0 -left-full md:left-0",
        className,
        "p-5"
      )}
      ref={sidebarRef}
    >
      <div className="sidebar__brand">
        <h1 className="text-3xl font-bold text-center">DPT.io</h1>
        <p className="text-xs text-slate-400 text-center">
          Powered by @dhitznswa
        </p>
      </div>

      <hr className="my-4" />

      <div className="sidebar__items w-full">
        <SidebarListItems activeLink={activeLink} />
      </div>
    </div>
  );
}
