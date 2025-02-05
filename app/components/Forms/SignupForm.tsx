"use client";

import React, { useState } from "react";
import Input from "../utils/input";
import { Button } from "../utils/button";
import { signUp } from "@/lib/actions";
import { signupSchema } from "@/lib/validation";

export default function SignupForm() {
  const [fieldValid, setFieldValid] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function handleActionForm(formData: FormData) {
    setErrors({});
    const data = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        value instanceof File ? "" : value,
      ])
    ) as Record<string, string>;

    const validatedData = signupSchema.safeParse(data);

    if (!validatedData.success) {
      const fieldErrors = validatedData.error.flatten().fieldErrors;
      const validData = Object.fromEntries(
        Object.entries(data).filter(([key]) => !(key in fieldErrors))
      );

      setFieldValid(validData);
      setErrors(
        Object.fromEntries(
          Object.entries(fieldErrors).map(([k, v]) => [k, v[0]])
        )
      );
    } else {
      const dataFix = {
        fullname: validatedData.data.fullname,
        email: validatedData.data.email,
        password: validatedData.data.password,
      };

      await signUp(dataFix);
    }
  }

  return (
    <form className="mt-5 flex flex-col gap-5" action={handleActionForm}>
      <div className="">
        <Input
          type="text"
          variant={errors.fullname ? "outline_error" : "outline"}
          placeholder="Nama Lengkap"
          name="fullname"
          defaultValue={fieldValid.fullname || ""}
        />
        {errors.fullname && (
          <p className="text-xs text-red-600 mt-2">{errors.fullname}</p>
        )}
      </div>
      <div className="">
        <Input
          type="text"
          variant={errors.fullname ? "outline_error" : "outline"}
          placeholder="Email Address"
          name="email"
          defaultValue={fieldValid.email || ""}
        />
        {errors.email && (
          <p className="text-xs text-red-600 mt-2">{errors.email}</p>
        )}
      </div>
      <div>
        <Input
          type="password"
          variant={errors.fullname ? "outline_error" : "outline"}
          placeholder="Password"
          name="password"
        />
        {errors.password && (
          <p className="text-xs text-red-600 mt-2">{errors.password}</p>
        )}
      </div>
      <div>
        <Input
          type="password"
          variant="outline"
          placeholder="Ulangi Password"
          name="confirm_password"
        />
        {errors.confirm_password && (
          <p className="text-xs text-red-600 mt-2">{errors.confirm_password}</p>
        )}
      </div>
      <Button>Daftar</Button>
    </form>
  );
}
