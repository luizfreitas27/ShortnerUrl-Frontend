"use server"

import { cookies } from "next/headers";

export async function loginAction(_:any, formData: FormData) {

  const username = formData.get("username");
  const password = formData.get("password");
  const env = process.env.NEXT_PUBLIC_API_URL

  if(!username || !password) {
    return {error: "Email and Password Invalid."}
  }

  const res = await fetch(`${env}/Auth/sign-in`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    cache : "no-store"
  });

  if (!res.ok) {
    return { error: "Invalid Credentials." };
  }

  const { accessToken } = await res.json();

  const cookieStore = await cookies();

  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60, // 1h
  });

  return { success: true };
}