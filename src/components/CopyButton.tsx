"use client";

import { FC } from "react";
import { toast } from "react-hot-toast";

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
    <button
      type="button"
      className="border border-neutral-900 rounded-md py-1 px-4 hover:bg-neutral-900 hover:text-neutral-100 active:outline outline-neutral-400 outline-offset-1"
      onClick={handleCopy}
    >
      Copy
    </button>
  );
};
