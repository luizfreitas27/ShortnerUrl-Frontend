"use server"

import { cookies} from "next/headers";
import { redirect } from "next/navigation";

export async function authAction(_: any, formData: FormData) {
  const username = formData.get("username");
  const password = formData.get("password");
  const env = process.env.NEXT_PUBLIC_API_URL;

  if (!username || !password) {
    return { error: "Email and Password Invalid." };
  }

  try {
    const res = await fetch(`${env}/Auth/sign-in`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      cache: "no-store"
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      return { 
        error: errorData.message || "Invalid Credentials." 
      };
    }

    const { accessToken } = await res.json();

    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60, // 1h
    });

    return { success: true };
  } catch (error) {
    console.error("Login error:", error);
    return { error: "An error occurred. Please try again." };
  }
}

export async function LogoutAction () {

  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken");

  if (!token) {
    console.log("Token does not exist...")
    return;
  }

  cookieStore.delete("accessToken");

  redirect("/login");
}