import { ReactNode } from "react";

interface ITimeContextProviderProp {
  children: ReactNode;
}

interface ITimeContext {
  time: ITime | null;
  backgroundColor: string;
}

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}
