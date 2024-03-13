"use client";

import { FC } from "react";
import { StepperProvider, useStepper } from "@/hooks/useStepper";
import { Step } from "./step";
import { Button } from "@/components/Button";
import { PagePreview } from "@/components/PagePreview";

const components = [Step, Step, Step, Step, Step];

export type StepState = {
  name: string;
};

export const Preview: FC = () => {
  const stepper = useStepper<StepState>(components.length, {
    name: "Dan",
  });

  const Step = components[stepper.active];

  return (
    <PagePreview>
      <StepperProvider state={stepper}>
        <Step />
      </StepperProvider>
      <div className="flex items-center gap-4 mt-4">
        <Button disabled={!stepper.hasPreviousStep} onClick={stepper.previous}>
          Previous step
        </Button>
        <Button disabled={!stepper.hasNextStep} onClick={stepper.next}>
          Next step
        </Button>
      </div>
    </PagePreview>
  );
};
