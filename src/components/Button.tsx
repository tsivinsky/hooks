import clsx from "clsx";
import { FC } from "react";

export const Button: FC<JSX.IntrinsicElements["button"]> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "border-2 border-neutral-900 bg-neutral-900 rounded-md py-1 px-4 hover:bg-transparent active:outline outline-neutral-700 outline-offset-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
