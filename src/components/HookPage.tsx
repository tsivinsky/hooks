import { FC, ReactNode } from "react";
import Link from "next/link";
import { GITHUB_HOOKS_URL } from "@/lib/constants";
import { Code } from "./Code";

export type HookPageProps = {
  name: string;
  fileName: string;
  children: ReactNode;
};

export const HookPage: FC<HookPageProps> = ({ name, fileName, children }) => {
  return (
    <div>
      <h1>{name}</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      {children}
      <Code
        filepath={`src/hooks/${fileName}`}
        githubLink={`${GITHUB_HOOKS_URL}/${fileName}`}
        className="my-8"
      />
    </div>
  );
};
