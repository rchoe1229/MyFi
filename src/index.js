import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "./context/context";
import { SpeechProvider } from "@speechly/react-client";

ReactDOM.render(
  <SpeechProvider appId="3ae6622a-395a-4ce9-afd3-dc4daf1ebaf0" language="en-US">
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>
  </SpeechProvider>,
  document.getElementById("root")
);
