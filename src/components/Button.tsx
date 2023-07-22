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
        "border border-neutral-900 rounded-md py-1 px-4 hover:bg-neutral-900 hover:text-neutral-100 active:outline outline-neutral-400 outline-offset-1",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
