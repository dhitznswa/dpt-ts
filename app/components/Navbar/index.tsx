"use client";

import { useSidebar } from "@/context/SidebarContext";
import React, { useEffect, useState } from "react";
import { Button } from "../utils/button";
import { cx } from "class-variance-authority";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { toggleSidebar } = useSidebar();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cx(
        "w-full p-5 sticky top-0 transition-all duration-300",
        isScrolled ? "shadow-sm bg-white" : ""
      )}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="">
          <input type="text" className="" />
        </div>
        <div className="flex items-center gap-10">
          <div className="">
            <i className="fa-regular fa-bell"></i>
          </div>
          <div className="">
            <i className="fa-regular fa-user"></i>
          </div>
          <div className="md:hidden">
            <Button size="sm" variant="ghost" onClick={toggleSidebar}>
              <i className="fa-regular fa-bars"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
