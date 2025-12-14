import LoginForm from "@/components/login-form";

export default function SignInPage() {
  return (
    <div className="min-h-screen max-w-full flex items-center justify-center">
      <div className="space-y-6 text-center min-w-full flex flex-col justify-center items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-balance mb-2 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            ShortURL
          </h1>
          <p className="text-muted-foreground text-pretty">
            Shorten your links quickly and easily.
          </p>
        </div>

        <LoginForm />
      </div>
    </div>
  );
}
