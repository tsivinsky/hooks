import { FC, ReactNode } from "react";

export const PagePreview: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="my-4">
      <h2 className="text-3xl font-semibold">Preview</h2>
      {children}
    </div>
  );
};
