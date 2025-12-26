import DashboardHeader from "@/components/dashboard-header";
import { getUser } from "../actions/auth";
import { redirect } from "next/dist/server/api-utils";
import CreateShortUrl from "@/components/create-short-url";

export default async function Dashboard() {
  const user = await getUser();

  return (
    <div className="min-w-screen bg-background">
      <DashboardHeader username={user?.username as string} />
      <div className="max-w-5xl container mx-auto px-4 py-8 ">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-balance mb-2">Dashbord</h2>
            <p className="text-muted-foreground text-pretty">
              Manage your shortner links
            </p>
          </div>
          <CreateShortUrl />
        </div>
      </div>
    </div>
  );
}
