import { FC } from "react";
import Link from "next/link";
import fs from "fs/promises";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import { CopyButton } from "./CopyButton";
import { Button } from "./Button";

export type CodeProps = {
  filepath: string;
  githubLink: string;
  className?: string;
};

export const Code: FC<CodeProps> = async ({
  filepath,
  githubLink,
  className,
}) => {
  const data = await fs.readFile(filepath, "utf-8");

  return (
    <div className={className}>
      <div className="flex items-center flex-wrap gap-4 mb-2">
        <h2 className="text-3xl font-semibold">Source code</h2>
        <CopyButton text={data} />
        <Link href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button>View code on GitHub</Button>
        </Link>
      </div>
      <pre
        className="bg-neutral-900 p-4 rounded-lg max-h-[500px] overflow-x-auto"
        dangerouslySetInnerHTML={{
          __html: hljs.highlight(data, { language: "ts" }).value,
        }}
      />
    </div>
  );
};
