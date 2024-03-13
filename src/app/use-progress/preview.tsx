"use client";

import { Button } from "@/components/Button";
import { PagePreview } from "@/components/PagePreview";
import { useProgress } from "@/hooks/useProgress";

export const Preview = () => {
  const progress = useProgress();

  return (
    <PagePreview>
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
    </PagePreview>
  );
};
