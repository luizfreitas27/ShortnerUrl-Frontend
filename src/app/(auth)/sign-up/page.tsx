import RegisterForm from "@/components/register-form";

export default function SignUpPage() {
  return (
    <div className="min-h-screen max-w-full flex items-center justify-center">
      <div className="space-y-6 text-center min-w-full flex flex-col justify-center items-center">
        <RegisterForm />
      </div>
    </div>
  );
}
