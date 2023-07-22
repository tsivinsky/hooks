import { useCallback, useRef, useState } from "react";

export const useProgress = (interval = 20) => {
  const [value, setValue] = useState(0);

  const timer = useRef<number>();

  const start = useCallback(async () => {
    setValue((prev) => prev + 1);

    timer.current = window.setInterval(
      () => setValue((prev) => prev + 1),
      interval
    );
  }, [interval]);

  const stop = useCallback(() => {
    window.clearTimeout(timer.current);
  }, []);

  const reset = useCallback(() => {
    window.clearTimeout(timer.current);
    setValue(0);
  }, []);

  return {
    value,
    start,
    stop,
    reset,
  };
};
