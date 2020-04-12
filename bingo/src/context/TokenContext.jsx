import React, { createContext, useState } from "react";

//creating context
export const TokenContext = createContext({});

const TokenContextProvider = (props) => {
  const [token, setBooks] = useState({
    TokenFun: () => {},
  });
  return (
    <TokenContext.Provider value={{ token }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
