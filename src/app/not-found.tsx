import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-secondary/10 p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="relative">
          <h1 className="text-[200px] sm:text-[280px] font-bold leading-none bg-gradient-to-br from-primary via-secondary to-primary bg-clip-text text-transparent opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-border">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Search className="w-12 h-12 text-primary-foreground" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Page Not Found</h2>
              <p className="text-muted-foreground text-lg">Oops! The page you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 pt-32">
          <p className="text-muted-foreground max-w-md mx-auto">
            The link you followed may be broken, or the page may have been removed. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="min-w-[200px]">
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[200px] bg-transparent">
              <Link href="/dashboard">
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Dashboard
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 pt-8 opacity-40">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0ms" }} />
          <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "150ms" }} />
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
