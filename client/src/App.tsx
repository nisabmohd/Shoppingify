import { Cart } from "./components/Cart";
import { Leftbar } from "./components/Leftbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Statistics } from "./pages/Statistics";
import { History } from "./pages/History";
import { Add } from "./components/Add";
import { Details } from "./components/Details";
import { createContext, useState } from "react";
import { Item } from "./components/Card";

export const AppContext = createContext<any>({});

function App() {
  const [showCart, setShowCart] = useState<boolean>(true);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [selected, setSelected] = useState<Item>();
  const [cartItems, setCartItems] = useState<Item[]>([]);

  function toggleAddMenu(value: boolean) {
    setShowCart(!value);
    setShowAdd(value);
  }

  function handleSelect(item: Item | undefined) {
    setSelected(item);
    if (!item) {
      return setShowCart(true);
    }
    setShowCart(false);
  }
  function AddToCart(item: Item) {
    setShowCart(true);
    setSelected(undefined);
    setCartItems((cartItems) => [...cartItems, item]);
  }

  const contextValue = {
    handleSelect,
    toggleAddMenu,
    AddToCart,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Leftbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        {showAdd && <Add />}
        {selected && <Details selected={selected} />}
        {showCart && <Cart cartItems={cartItems} />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
