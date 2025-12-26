"use client";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import {
  createShortnerFormDataSchema,
  TCreateShortnerFormData,
} from "@/types/form-create-shortner";
import { zodResolver } from "@hookform/resolvers/zod";
import { createShortnerUrl } from "@/app/actions/create-shortner-url";
import { Spinner } from "./ui/spinner";

export default function CreateShortUrl() {
  const [isPending, startTransition] = useTransition();

  const form = useForm<TCreateShortnerFormData>({
    resolver: zodResolver(createShortnerFormDataSchema),
    defaultValues: {
      name: "",
      originalUrl: "",
    },
  });

  function onSubmit(data: TCreateShortnerFormData) {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("originalUrl", data.originalUrl);

    startTransition(async () => {
      const result = await createShortnerUrl(null, formData);
      if (result?.error) {
        form.setError("root", {
          message: result.error,
        });
        return;
      }
      form.reset(); // limpa o form após sucesso
    });
  }

  return (
    <Card className="border-border/50 shadow-lg bg-gradient-to-br from-card to-accent/10">
      <CardHeader>
        <CardTitle className="text-2xl text-balance flex items-center gap-2">
          <Plus className="w-6 h-6" />
          Create New Link
        </CardTitle>
        <CardDescription className="text-pretty">
          Paste the URL you want to shorten below
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="My custom name"
              {...form.register("name")}
              className="bg-background border-border/50"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">
                {form.formState.errors.name.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="url">Original URL</Label>
            <Input
              id="url"
              type="url"
              placeholder="https://example.com/my-very-long-link"
              {...form.register("originalUrl")}
              className="bg-background border-border/50"
            />
            {form.formState.errors.originalUrl && (
              <p className="text-sm text-red-500">
                {form.formState.errors.originalUrl.message}
              </p>
            )}
          </div>

          {form.formState.errors.root && (
            <p className="text-sm text-red-500">
              {form.formState.errors.root.message}
            </p>
          )}

          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? <Spinner /> : "Shorten URL"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
