import { createContext, useContext } from "react";

export const PriceContext = createContext();

export function usePrice() {
  return useContext(PriceContext);
}