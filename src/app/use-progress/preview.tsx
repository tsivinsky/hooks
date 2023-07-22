"use client";

import { Button } from "@/components/Button";
import { useProgress } from "@/hooks/useProgress";

export const Preview = () => {
  const progress = useProgress();

  return (
    <div className="my-4">
      <h2 className="text-3xl font-semibold">Preview</h2>
      <div className="my-2">
        <progress
          value={progress.value}
          max={100}
          className="rounded w-[500px]"
        />
      </div>
      <div className="flex gap-2">
        <Button onClick={progress.start}>Start</Button>
        <Button onClick={progress.reset}>Reset</Button>
      </div>
    </div>
  );
};
