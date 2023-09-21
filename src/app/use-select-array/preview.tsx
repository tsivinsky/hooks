"use client";

import { Button } from "@/components/Button";
import { useSelectArray } from "@/hooks/useSelectArray";
import { useState } from "react";

const FirstChoice = {
  value: "all",
  label: "Все",
};

const defaultItems = [
  { value: "svelte", label: "Svelte" },
  { value: "htmx", label: "htmx" },
  { value: "solid", label: "Solid" },
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
];

export const Preview = () => {
  const [items, setItems] = useState(defaultItems);

  const list = useSelectArray<typeof items[number]>(
    (item) => item,
    FirstChoice,
    items
  );

  return (
    <div className="my-4">
      <div className="flex items-center gap-2">
        <Button
          className="my-2"
          onClick={() =>
            setItems((prev) => [
              ...prev,
              { value: String(Math.random()), label: String(Math.random()) },
            ])
          }
        >
          Add random data to list
        </Button>
        <Button onClick={() => setItems(defaultItems)}>Reset to default</Button>
      </div>
      <h2>List</h2>
      <pre className="whitespace-pre-wrap">{JSON.stringify(list)}</pre>
    </div>
  );
};
