"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  registerFormDataScheme,
  TRegisterFormData,
} from "@/types/formRegister";
import { registerAction } from "@/app/actions/register";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export default function RegisterForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<TRegisterFormData>({
    resolver: zodResolver(registerFormDataScheme),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(data: TRegisterFormData) {
    const formData = new FormData();
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("confirmPassword", data.confirmPassword);

    startTransition(async () => {
      const result = await registerAction(null, formData);

      if (result?.error) {
        form.setError("root", {
          message: result.error,
        });
        return;
      }

      if (result?.success) {
        router.push("/sign-in");
      }
    });
  }

  function goToLogin() {
    router.push("/sign-in");
  }

  return (
    <Card className="border-border/50 shadow-lg w-full max-w-md lg:max-w-xl">
      <CardHeader className="space-y-3 pb-6 lg:pb-8 lg:pt-8">
        <CardTitle className="text-3xl lg:text-4xl text-balance font-semibold">
          Sign Up
        </CardTitle>
        <CardDescription className="text-pretty text-base lg:text-lg">
          Fill the fields and sign up in the system
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
                        placeholder="johndoe"
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
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base lg:text-lg">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
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

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base lg:text-lg">
                      Confirm Password
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
                className="w-full h-11 lg:h-14 text-base lg:text-lg"
                disabled={isPending}
              >
                {isPending ? "Loading..." : "Sign Up"}
              </Button>
              <div className="pb-6 lg:pb-8">
                <p className="text-base lg:text-lg">
                  Already have an account?{" "}
                  <span
                    onClick={() => goToLogin()}
                    className="text-[#7d66ff] cursor-pointer hover:underline font-medium"
                  >
                    Sign in
                  </span>
                </p>
              </div>
            </CardContent>
          </form>
        </Form>
      </div>
    </Card>
  );
}
