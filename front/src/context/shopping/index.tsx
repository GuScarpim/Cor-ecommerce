import React, { createContext, useState } from "react";

type ShoppingType = {
  counter: number;
};

type PropsShoppingContext = {
  state: ShoppingType;
  setState: React.Dispatch<React.SetStateAction<ShoppingType>>;
};

const DEFAULT_VALUE = {
  state: {
    counter: 0,
  },
  setState: () => {},
};

const UserContext = createContext<PropsShoppingContext>(DEFAULT_VALUE);

const ShoppingContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <UserContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { ShoppingContextProvider };
export default UserContext;