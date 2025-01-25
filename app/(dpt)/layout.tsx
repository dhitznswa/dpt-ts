import React from "react";

export default function DPTLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <main>{children}</main>
      </div>
    </>
  );
}
