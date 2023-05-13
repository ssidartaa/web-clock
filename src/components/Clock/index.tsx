import { useContext } from "react";

import { TimeContext } from "../../contexts/TimeContext";

import { Time } from "../Time";

import { Container } from "./style";

export const Clock = () => {
  const { time } = useContext(TimeContext);

  return (
    <Container>
      <Time timeType="Horas" time={time ? time.hours : 0} />
      <Time timeType="Minutos" time={time ? time.minutes : 0} />
      <Time timeType="Segundos" time={time ? time.seconds : 0} />
    </Container>
  );
};
