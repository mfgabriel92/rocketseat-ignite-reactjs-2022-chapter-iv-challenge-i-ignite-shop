import { ProductProps } from "@typings/product";
import axios from "axios";
import { createContext, ReactElement, useContext, useEffect, useState } from "react";

interface BasketContextProps {
  items: ProductProps[];
  isSummaryOpen: boolean;
  isCheckingOut: boolean;
  placeItemInBasket: (item: ProductProps) => void;
  toggleSummary: () => void;
  buyNow: (priceIds: string[]) => void;
}

const BasketContext = createContext({} as BasketContextProps);

function BasketProvider({ children }: { children: ReactElement }) {
  const [items, setItems] = useState<ProductProps[]>([]);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);

  useEffect(() => {
    const storage = localStorage.getItem("@igniteShop:items");

    if (storage) {
      setItems(JSON.parse(storage));
    }
  }, []);

  function placeItemInBasket(item: ProductProps) {
    setItems((state) => {
      const arr = [...state, item];
      localStorage.setItem("@igniteShop:items", JSON.stringify(arr));
      return arr;
    });
  }

  function toggleSummary() {
    setIsSummaryOpen(!isSummaryOpen);
  }

  async function buyNow(priceIds: string[]) {
    try {
      setIsCheckingOut(true);
      const { data } = await axios.post("/api/checkout", {
        priceIds,
      });
      const { checkoutUrl } = data;
      window.location.href = checkoutUrl;
      localStorage.removeItem("@igniteShop:items");
      setItems([]);
    } catch {
      setIsCheckingOut(false);
      alert("Error");
    }
  }

  return (
    <BasketContext.Provider
      value={{ items, isSummaryOpen, isCheckingOut, placeItemInBasket, toggleSummary, buyNow }}
    >
      {children}
    </BasketContext.Provider>
  );
}

function useBasket() {
  return useContext(BasketContext);
}

export { useBasket, BasketProvider };
