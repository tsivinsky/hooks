"use client";

import { FC, FormEvent, useState } from "react";
import { useStepperContext } from "@/hooks/useStepper";
import { StepState } from "./preview";
import { Button } from "@/components/Button";

export const Step: FC = () => {
  const stepper = useStepperContext<StepState>();

  const [name, setName] = useState(stepper.state.name);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    stepper.updateState({ name });
  };

  return (
    <div>
      <h1>Step: {stepper.active}</h1>
      <h2>Name: {stepper.state.name}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button type="submit">Update name</Button>
      </form>
    </div>
  );
};
