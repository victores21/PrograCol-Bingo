import React, { createContext, useState } from "react";

//creating context
export const TokenContext = createContext();

const TokenContextProvider = (props) => {
  const [token, setBooks] = useState("Asdad1231aslkdjakdlja123a");
  return (
    <TokenContext.Provider value={{ token }}>
      {props.children}
    </TokenContext.Provider>
  );
};

export default TokenContextProvider;
