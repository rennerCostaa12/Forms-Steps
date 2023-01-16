import { BrowserRouter } from "react-router-dom";

import RoutesSteps from "./routes/RoutesSteps";
import { FormStepContextProvider } from "./contexts/formContext/ContextFormSteps";
import { GlobalStyle } from "./GlobalStyle/GlobalStyle";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <FormStepContextProvider>
        <RoutesSteps />
      </FormStepContextProvider>
    </BrowserRouter>
  );
}
