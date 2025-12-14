import { cookies } from "next/headers";

export async function authFetch(
  url: string,
  options: RequestInit = {}
) {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken")?.value;

  const headers = new Headers(options.headers);
  
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  
  headers.set("Content-Type", "application/json");

  return fetch(url, {
    ...options,
    headers,
  });
}