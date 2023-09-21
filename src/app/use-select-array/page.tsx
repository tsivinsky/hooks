import { Code } from "@/components/Code";
import { GITHUB_HOOKS_URL } from "@/lib/constants";
import Link from "next/link";
import { Preview } from "./preview";

export default function SelectArrayPage() {
  return (
    <div>
      <h1>use-select-array</h1>
      <Link href="/" className="underline hover:no-underline">
        back
      </Link>
      <Preview />
      <Code
        filepath="src/hooks/useSelectArray.ts"
        githubLink={`${GITHUB_HOOKS_URL}/useSelectArray.ts`}
        className="my-8"
      />
    </div>
  );
}
