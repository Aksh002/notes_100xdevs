import { createContext } from "react";

export const CountContext=createContext(null) //0 if only count we are teleporting
// Just like we use useState() to declare a state variable, we use createContext() to teleport the state variable