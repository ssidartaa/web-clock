import { createContext, useEffect, useState } from "react";

import { colorRandomizer } from "../utils/colorRandomizer.util";

import { ITime, ITimeContext, ITimeContextProviderProp } from "./interfaces";

export const TimeContext = createContext({} as ITimeContext);

export const TimeProvider = ({ children }: ITimeContextProviderProp) => {
  const [dateToday, setDateToday] = useState<Date>(new Date());
  const [time, setTime] = useState<ITime | null>(null);

  const [backgroundColor, setBackgroundColor] = useState<string>(
    colorRandomizer()
  );

  useEffect(() => {
    setInterval(() => {
      setDateToday(new Date());
    });

    setTime({
      hours: dateToday.getHours(),
      minutes: dateToday.getMinutes(),
      seconds: dateToday.getSeconds(),
    });
  }, [dateToday]);

  useEffect(() => {
    setInterval(() => {
      setBackgroundColor(colorRandomizer());
    }, 60000);
  }, []);

  return (
    <TimeContext.Provider value={{ time, backgroundColor }}>
      {children}
    </TimeContext.Provider>
  );
};
