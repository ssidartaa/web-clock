import { useContext } from "react";

import { TimeContext } from "./contexts/TimeContext";

import { Clock } from "./components/Clock";

import { Global } from "./styles/global";

export const App = () => {
  const { backgroundColor } = useContext(TimeContext);

  return (
    <>
      <Global backgroundColor={backgroundColor} />
      <Clock />
    </>
  );
};
