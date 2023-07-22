import Link from "next/link";
import { Code } from "@/components/Code";
import { GITHUB_HOOKS_URL } from "@/lib/constants";
import { Preview } from "./preview";

export default function ProgressPage() {
  return (
    <div>
      <h1>use-progress</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      <Preview />
      <Code
        filepath="src/hooks/useProgress.ts"
        githubLink={`${GITHUB_HOOKS_URL}/useProgress.ts`}
        className="my-8"
      />
    </div>
  );
}
