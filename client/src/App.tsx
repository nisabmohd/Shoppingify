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
import { helper } from "./utils/seperator";

export const AppContext = createContext<any>({});

export type customCartType = {
  name: string;
  id: string;
  note?: string;
  category: string;
  img?: string;
  quantity: number;
};

function App() {
  const [showCart, setShowCart] = useState<boolean>(true);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [selected, setSelected] = useState<Item>();
  const [cartItems, setCartItems] = useState<customCartType[]>([]);
  const [filtered, setFilterd] = useState<object>({});

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
    const newDataType = {
      ...item,
      quantity: 1,
    };
    setShowCart(true);
    setSelected(undefined);

    if (cartItems.some((e) => e.name === item.name)) {
      cartItems.forEach((d) => {
        if (d.name == item.name) {
          d.quantity = d.quantity + 1;
        }
      });
      setCartItems((cartItems) => [...cartItems]);
      return;
    }

    // seperator
    const newData = helper([...cartItems, newDataType]);
    setCartItems((cartItems) => [...cartItems, newDataType]);
    setFilterd(newData);
  }

  function handleIncOrDecItem(id: string, payload: number) {
    cartItems.forEach((d) => {
      if (d.id == id) {
        if (payload == -1 && d.quantity == 1) {
          const newArr = cartItems.filter((e) => {
            return e.id != id;
          });
          console.log(newArr);
          setCartItems(newArr);
          return;
        } else {
          d.quantity = d.quantity + payload;
          setCartItems((prev) => [...prev]);
          return;
        }
      }
    });
  }

  function handleDeleteItemCart(id: string) {
    console.log(id);
    setCartItems((prev) => prev.filter((item) => item.id != id));
    setFilterd(helper(cartItems.filter((item) => item.id != id)));
    console.log(cartItems);
  }

  function emptyCart() {
    setCartItems([]);
  }

  function saveCart() {
    //
    emptyCart();
  }

  // function completeShopping(){

  // }

  const contextValue = {
    handleSelect,
    toggleAddMenu,
    AddToCart,
    handleIncOrDecItem,
    handleDeleteItemCart,
    emptyCart,
    saveCart,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Leftbar count={Object.keys(cartItems).length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
        {showAdd && <Add />}
        {selected && <Details selected={selected} />}
        {showCart && (
          <Cart
            count={Object.keys(cartItems).length}
            filtered={filtered}
            cartItems={cartItems}
          />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
