import React from "react";
import type { Metadata } from "next";
import Input from "@/app/components/utils/input";
import { Button } from "@/app/components/utils/button";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <div>
      <h2 className="text-xl text-center font-medium">Sign Up</h2>
      <form className="mt-5 flex flex-col gap-5">
        <Input type="text" variant="outline" placeholder="Nama Lengkap" />
        <Input type="text" variant="outline" placeholder="Email Address" />
        <Input type="text" variant="outline" placeholder="Password" />
        <Input type="text" variant="outline" placeholder="Re-type Password" />
        <Button>Daftar</Button>
      </form>
    </div>
  );
}
