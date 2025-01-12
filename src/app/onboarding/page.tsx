"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Step01 from "./components/steps/Step01";
import Step02 from "./components/steps/Step02";
import Step03 from "./components/steps/Step03";
import Container from "@/components/Container";

export default function Onboarding() {
  const steps = [Step01, Step02, Step03];
  const [step, setStep] = useState(0);
  const router = useRouter();

  const CurrentStep = steps[step];

  const onStepChange = () => {
    const isDone = step === steps.length - 1;

    if (isDone) {
      return router.replace("/");
    }

    setStep((prevState) => prevState + 1);
  };

  return (
    <Container>
      <CurrentStep onChange={onStepChange} />
    </Container>
  );
}
