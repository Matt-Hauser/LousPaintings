import { createContext, useState } from "react";

export const OrderForm = createContext(null);

function Context({ children }) {
  const [petsContext, setPetsContext] = useState();
  const [peopleContext, setPeopleContext] = useState();
  const [canvasContext, setCanvasContext] = useState();
  const [bGContext, setBGContext] = useState();

  return (
    <OrderForm.Provider
      value={{
        petsContext: [petsContext, setPetsContext],
        peopleContext: [peopleContext, setPeopleContext],
        canvasContext: [canvasContext, setCanvasContext],
        bGContext: [bGContext, setBGContext],
      }}
    >
      {children}
    </OrderForm.Provider>
  );
}
export default Context;
