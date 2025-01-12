"use client";

import { useRouter } from "next/navigation";
import { useLayoutEffect, type PropsWithChildren } from "react";

export default function OnboardingLogic({ children }: PropsWithChildren) {
  const router = useRouter();

  useLayoutEffect(() => {
    const isFirstRun = !localStorage.getItem("isFirstRun");

    if (isFirstRun) {
      router.replace("/onboarding");
    }
  }, [router]);

  return children;
}
