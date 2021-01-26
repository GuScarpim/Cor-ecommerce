import React from "react";

import { ShoppingContextProvider } from "./shopping/index";

const GlobalContext: React.SFC = ({ children }) => {
  return (
    <>
      <ShoppingContextProvider>{children}</ShoppingContextProvider>
    </>
  );
};

export default GlobalContext;