import React from "react";
import type { Metadata } from "next";
import SignupForm from "@/app/components/Forms/SignupForm";

export const metadata: Metadata = {
  title: "Sign Up",
};

export default function page() {
  return (
    <div>
      <h2 className="text-xl text-center font-medium">Sign Up</h2>
      <SignupForm />
    </div>
  );
}
