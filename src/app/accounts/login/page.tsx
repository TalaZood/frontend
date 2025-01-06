"use client";

import { z } from "zod";
import { type ChangeEvent } from "react";
import { phoneSchema } from "@/lib/schemas";
import { Input } from "@/components/ui/input";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import { useOtpRequest } from "@/services/accounts";
import { toEnglishDigits } from "@/lib/utils/numbers";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

type Inputs = {
  phone: string;
};

const schema = z.object({ phone: phoneSchema });

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: { phone: searchParams.get("phone") || "" },
  });

  const { mutate, isPending } = useOtpRequest({
    onSuccess: (response) => {
      const params = new URLSearchParams();
      params.set("phone", response.userName);

      const redirectParam = searchParams.get("redirect");
      if (redirectParam) params.set("redirect", redirectParam);

      router.push(`/accounts/verify?${params.toString()}`);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate({ phone: data.phone });
  };

  return (
    <Container className="px-4">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="h-full flex flex-col justify-center"
      >
        <Input
          dir="ltr"
          maxLength={11}
          inputMode="numeric"
          placeholder="شماره همراه"
          className="placeholder:text-right"
          {...register("phone", {
            onChange: (e: ChangeEvent<HTMLInputElement>) =>
              setValue("phone", toEnglishDigits(e.target.value)),
          })}
        />
        <span className="text-red-500 mt-2">{errors.phone?.message || ""}</span>

        <Button disabled={isPending} className="mt-8">
          بررسی شماره همراه
        </Button>
      </form>
    </Container>
  );
}
