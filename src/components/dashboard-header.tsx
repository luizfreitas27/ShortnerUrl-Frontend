"use client";

import { Link2, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { LogoutAction } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

export default function DashboardHeader({ username }: { username: string }) {
  const router = useRouter();

  const handleLogout = async () => {
    const result = await LogoutAction();

    if (result.success) {
      router.push("/sign-in");
    }
  };

  return (
    <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-5xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <Link2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-lg">Shortner URL</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-sm text-muted-foreground hidden sm:inline">
            Hello,{" "}
            <span className="font-medium text-foreground">{username}</span>
          </span>
          <Button variant="outline" size="sm" onClick={handleLogout}>
            <LogOut className="w-4 h-4 sm:mr-2 " />
            <span className="hidden sm:inline">Log Out</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
