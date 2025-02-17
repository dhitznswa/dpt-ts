import React from "react";

export default function LoadingAnimation() {
  return (
    <>
      <div className="absolute top-0 left-0 z-9999 w-full h-screen container mx-auto flex items-center justify-center">
        <div className="max-w-[400px] flex-row items-center justify-center space-y-2">
          <div className="w-10 h-10 mx-auto border-4 border-t-slate-300 border-primary animate-spin duration-300 rounded-full"></div>
          <h2>Loading Content...</h2>
        </div>
      </div>
    </>
  );
}
