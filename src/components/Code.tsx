import { FC } from "react";
import fs from "fs/promises";
import { CopyButton } from "./CopyButton";

export type CodeProps = {
  filepath: string;
  className?: string;
};

export const Code: FC<CodeProps> = async ({ filepath, className }) => {
  const data = await fs.readFile(filepath, "utf-8");

  return (
    <div className={className}>
      <div className="flex items-center gap-4 mb-2">
        <h2 className="text-3xl font-semibold">Source code</h2>
        <CopyButton text={data} />
      </div>
      <pre className="bg-neutral-300 p-4 rounded-lg max-h-[500px] overflow-x-auto">
        {data}
      </pre>
    </div>
  );
};
