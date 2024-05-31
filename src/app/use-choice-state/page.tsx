import { HookPage } from "@/components/HookPage";
import { Preview } from "./preview";

export type Task = {
  id: number;
  title: string;
  disabled: boolean;
};

export default function ChoiceStatePage() {
  return (
    <HookPage name="use-choice-state" fileName="useChoiceState.ts">
      <Preview />
    </HookPage>
  );
}
