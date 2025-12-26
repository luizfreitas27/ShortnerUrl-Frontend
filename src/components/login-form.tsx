"use client";

import { authAction } from "@/app/actions/auth";
import { loginFormDataSchema, TLoginFormData } from "@/types/formLogin";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Spinner } from "./ui/spinner";

export default function LoginForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TLoginFormData>({
    resolver: zodResolver(loginFormDataSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(data: TLoginFormData) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);

    startTransition(async () => {
      const result = await authAction(null, formData);

      if (result?.error) {
        form.setError("root", {
          message: result.error,
        });
        return;
      }

      if (result?.success) {
        router.push("/dashboard");
      }
    });
  }

  function goToRegister() {
    router.push("/sign-up");
  }
  return (
    <Card className="border-border/50 shadow-lg w-full max-w-md lg:max-w-xl">
      <CardHeader className="space-y-3 lg:px-12 pb-6 lg:pb-8 lg:pt-8">
        <CardTitle className="text-2xl lg:text-xl text-left font-semibold">
          Sign In
        </CardTitle>
        <CardDescription className="text-pretty text-left lg:text-lg">
          Enter your credentials to access the dashboard
        </CardDescription>
      </CardHeader>
      <div className="flex w-full flex-col gap-4 lg:gap-6 items-center justify-center">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 lg:space-y-8"
          >
            <CardContent className="space-y-5 lg:space-y-7 px-8 lg:px-12">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base lg:text-lg">
                      Username
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="your@email.com"
                        disabled={isPending}
                        className="h-11 lg:h-14 text-base lg:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base lg:text-lg">
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        disabled={isPending}
                        className="h-11 lg:h-14 text-base lg:text-lg"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {form.formState.errors.root && (
                <div className="rounded-md bg-destructive/10 p-3 lg:p-4 text-sm lg:text-base text-destructive">
                  {form.formState.errors.root.message}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-11 lg:h-14 text-base lg:text-lg bg-[#7d66ff]"
                disabled={isPending}
              >
                {isPending ? <Spinner/> : "Sign In"}
              </Button>
            </CardContent>
          </form>
        </Form>

        <div className="pb-6 lg:pb-8">
          <p className="text-base lg:text-lg">
            Don't have an account?{" "}
            <span
              onClick={() => goToRegister()}
              className="text-[#7d66ff] cursor-pointer hover:underline font-medium"
            >
              Sign up
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
}
