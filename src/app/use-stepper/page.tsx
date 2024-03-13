import Link from "next/link";
import { Code } from "@/components/Code";
import { GITHUB_HOOKS_URL } from "@/lib/constants";
import { Preview } from "./preview";

export default function StepperPage() {
  return (
    <div>
      <h1>use-stepper</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      <Preview />
      <Code
        filepath="src/hooks/useStepper.tsx"
        githubLink={`${GITHUB_HOOKS_URL}/useStepper.tsx`}
        className="my-8"
      />
    </div>
  );
}
