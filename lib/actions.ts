"use server";

import bcrypt from "bcrypt";
import { prisma } from "./prisma";
import { redirect } from "next/navigation";

interface createUserData {
  fullname: string;
  email: string;
  password: string;
}

export async function signUp(data: createUserData) {
  data["password"] = await bcrypt.hash(data.password, 10);

  try {
    await prisma.userAuth.create({ data });

    redirect("/");
  } catch {
    return {
      status: "failed",
      message: "Internal Server Error",
    };
  }
}
