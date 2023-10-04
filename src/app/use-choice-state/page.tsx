import Link from "next/link";
import { Code } from "@/components/Code";
import { GITHUB_HOOKS_URL } from "@/lib/constants";
import { Preview } from "./preview";

export type Task = {
  id: number;
  title: string;
  disabled: boolean;
};

export default function ChoiceStatePage() {
  return (
    <div>
      <h1>use-choice-state</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      <Preview />
      <Code
        filepath="src/hooks/useChoiceState.ts"
        githubLink={`${GITHUB_HOOKS_URL}/useChoiceState.ts`}
        className="my-8"
      />
    </div>
  );
}
