import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Link2,
  Zap,
  Shield,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Link2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">Short URL</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/sign-up">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary">
            <Sparkles className="w-4 h-4" />
            Modern URL Shortening Platform
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            Shorten URLs.{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Boost Engagement.
            </span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            Transform long, unwieldy links into clean, shareable URLs. Track
            clicks, analyze performance, and take control of your digital
            presence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button size="lg" className="text-lg px-8" asChild>
              <Link href="/sign-up">
                Start Free Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent"
              asChild
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            Everything you need to manage your links
          </h2>
          <p className="text-muted-foreground text-pretty text-lg max-w-2xl mx-auto">
            Powerful features designed to give you complete control over your
            shortened URLs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Lightning Fast</CardTitle>
              <CardDescription className="text-pretty">
                Create shortened links in seconds. No complicated setup, just
                paste and go.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Analytics Dashboard</CardTitle>
              <CardDescription className="text-pretty">
                Track clicks and monitor engagement with detailed analytics for
                every link.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Secure & Reliable</CardTitle>
              <CardDescription className="text-pretty">
                Your links are safe with us. Enterprise-grade security for all
                your shortened URLs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Link2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Custom Links</CardTitle>
              <CardDescription className="text-pretty">
                Generate unique, memorable short codes for all your important
                links.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Modern Interface</CardTitle>
              <CardDescription className="text-pretty">
                Beautiful, intuitive design that makes link management a breeze.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-border/50 hover:border-primary/50 transition-all hover:shadow-lg">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Easy Management</CardTitle>
              <CardDescription className="text-pretty">
                Organize, edit, and delete your links with simple, powerful
                tools.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">
            How it works
          </h2>
          <p className="text-muted-foreground text-pretty text-lg max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
              1
            </div>
            <h3 className="text-xl font-semibold">Create Account</h3>
            <p className="text-muted-foreground text-pretty">
              Sign up for free in seconds. No credit card required.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
              2
            </div>
            <h3 className="text-xl font-semibold">Paste Your URL</h3>
            <p className="text-muted-foreground text-pretty">
              Simply paste your long URL and we'll generate a short link
              instantly.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto">
              3
            </div>
            <h3 className="text-xl font-semibold">Share & Track</h3>
            <p className="text-muted-foreground text-pretty">
              Share your link and monitor its performance in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <Card className="border-border/50 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
          <CardContent className="py-16 px-8 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Ready to get started?
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Join thousands of users who trust ShortURL to manage their links.
              Start shortening URLs today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button size="lg" className="text-lg px-8" asChild>
                <Link href="/sign-up">
                  Create Free Account
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Link2 className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-bold">ShortURL</span>
            </div>
            <p className="text-sm text-muted-foreground">
              2025 ShortURL. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
