"use server";

import { cookies } from "next/headers";

export async function createShortnerUrl(_: any, formData: FormData) {
  const name = formData.get("name");
  const originalUrl = formData.get("originalUrl");

  const env = process.env.NEXT_PUBLIC_API_URL;

  if (!name || !originalUrl) {
    return { error: "Field are required." };
  }

  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken");

    if (!token) {
      console.log("Token does not exist...");
      return { success: false };
    }

    const res = await fetch(`${env}/Link`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: JSON.stringify({ name, originalUrl }),
      cache: "no-store",
    });

    if (!res.ok) {
      return { error: "Failed to create link." };
    }

    return await res.json();
  } catch (e) {
    return { error: "Something went wrong." };
  }
}
