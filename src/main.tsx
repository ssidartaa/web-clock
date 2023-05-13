import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";

import { TimeProvider } from "./contexts/TimeContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TimeProvider>
      <App />
    </TimeProvider>
  </React.StrictMode>
);
