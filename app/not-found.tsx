import { type Metadata } from "next";
import React from "react";
import { Button } from "./components/utils/button";

export const metadata: Metadata = {
  title: "404 - Error Not Found",
};

export default function NotFound() {
  return (
    <div className="w-screen h-dvh container mx-auto flex items-center justify-center">
      <div className="max-w-xl flex-row gap-4 justify-center">
        <h1 className="text-2xl ">404 - Not Found</h1>
        <p className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          alias reprehenderit provident neque sunt ad? Sint accusantium,
          quibusdam illo dolore eius est assumenda libero aliquam veniam ipsa
          sequi animi! Ratione.
        </p>
        <Button>Kembali</Button>
      </div>
    </div>
  );
}
