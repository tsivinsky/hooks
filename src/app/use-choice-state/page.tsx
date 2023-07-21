import Link from "next/link";
import { Code } from "@/components/Code";
import { Preview } from "./preview";

export type Task = {
  id: number;
  title: string;
};

export default function ChoiceStatePage() {
  return (
    <div>
      <h1>use-choice-state</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      <Preview />
      <Code filepath="src/hooks/useChoiceState.ts" className="my-8" />
    </div>
  );
}
