import { timeFormatter } from "../../utils/timeFormatter.util";

import { Container } from "./style";

export const Time = ({ time, timeType }: ITimeProps) => {
  return (
    <Container>
      <span>{timeFormatter(time)}</span>
      <p>{timeType}</p>
    </Container>
  );
};
