import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

export type StepperState<TState> = {
  active: number;
  hasPreviousStep: boolean;
  hasNextStep: boolean;
  state: TState;
  updateState: (state: Partial<TState>) => void;
  set: (step: number) => void;
  next: () => void;
  previous: () => void;
};

export const useStepper = <TState,>(
  max: number,
  defaultState: TState
): StepperState<TState> => {
  const [active, set] = useState(0);
  const [state, setState] = useState(defaultState);

  const next = useCallback(() => {
    set((step) => Math.min(step + 1, max - 1));
  }, [max]);

  const previous = useCallback(() => {
    set((step) => Math.max(step - 1, 0));
  }, []);

  const updateState = useCallback((newState: Partial<TState>) => {
    setState((prev) => ({
      ...prev,
      ...newState,
    }));
  }, []);

  const hasNextStep = Math.min(active + 1, max - 1) !== active;
  const hasPreviousStep = Math.max(active - 1, 0) !== active;

  return {
    active,
    hasPreviousStep,
    hasNextStep,
    state,
    updateState,
    set,
    next,
    previous,
  };
};

const stepperContext = createContext<StepperState<any> | null>(null);

export type StepperProviderProps<TState> = {
  state: StepperState<TState>;
  children: ReactNode;
};

export const StepperProvider = <TState,>({
  state,
  children,
}: StepperProviderProps<TState>) => {
  return (
    <stepperContext.Provider value={state}>{children}</stepperContext.Provider>
  );
};

export const useStepperContext = <TState,>() => {
  const context = useContext(stepperContext);
  if (!context) {
    throw new Error("useStepperContext must be used within a StepperProvider");
  }

  return context as StepperState<TState>;
};
