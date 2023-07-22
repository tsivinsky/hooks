"use client";

import { FC } from "react";
import { toast } from "react-hot-toast";
import { Button } from "./Button";

export type CopyButtonProps = {
  text: string;
};

export const CopyButton: FC<CopyButtonProps> = ({ text }) => {
  const handleCopy = () => {
    try {
      if (!("clipboard" in navigator)) {
        return toast.error("Clipboard not supported for some reason");
      }

      navigator.clipboard.writeText(text);

      toast.success("Source code copied to clipboard");
    } catch (err) {
      toast.error("Copying didn't succeeded for some reason");
    }
  };

  return (
    <Button type="button" onClick={handleCopy}>
      Copy
    </Button>
  );
};
