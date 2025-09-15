import { useState, useEffect } from "react";
import { PriceContext } from "./PriceContext";
import { useLocation } from "react-router-dom";

export function PriceProvider({ children }) {
  const location = useLocation();
  const { product } = location.state || {};

  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [unitPrice, setUnitPrice] = useState(product?.price || 0);

  useEffect(() => {
    if (product?.price) {
      setUnitPrice(product.price);
      setPrice(product.price * quantity);
    }
  }, [product, quantity]);

  function handleAddCount() {
    setQuantity((prev) => prev + 1);
  }

  function handleMinusCount() {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  }

  return (
    <PriceContext.Provider
      value={{
        handleAddCount,
        handleMinusCount,
        price,
        quantity,
        unitPrice,
        product,
      }}
    >
      {children}
    </PriceContext.Provider>
  );
}
