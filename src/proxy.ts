import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  console.log("🔍 Proxy executando para:", request.nextUrl.pathname);

  const token = request.cookies.get("accessToken");
  console.log("🔑 Token encontrado:", !!token);

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!token) {
      console.log("❌ Sem token, redirecionando para /login");
      return NextResponse.redirect(new URL("/sign-in", request.url));
    }
    console.log("✅ Token válido, permitindo acesso ao dashboard");
  }

  if (request.nextUrl.pathname === "/sign-in") {
    if (token) {
      console.log("✅ Já logado, redirecionando para /dashboard");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    console.log("❌ Sem token, permitindo acesso ao login");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/sign-in"],
};
