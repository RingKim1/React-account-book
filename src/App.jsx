import React from "react";
import Router from "./shared/Router";
import ContextProvider from "./contexts/ContextProvider";

function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}

export default App;
