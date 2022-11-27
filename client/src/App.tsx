import { Cart } from "./components/Cart";
import { Leftbar } from "./components/Leftbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Statistics } from "./pages/Statistics";
import { History } from "./pages/History";
import { Add } from "./components/Add";
import { Details } from "./components/Details";
import { createContext, useState, useEffect } from "react";
import { Item } from "./components/Card";
import { helper } from "./utils/seperator";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import toast, { Toaster } from "react-hot-toast";
import { Protected } from "./Routers/Protected";
import { useAuth } from "./contexts/AuthContext";
import useFetch from "./hooks/useFetch";

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
  //check useFetch hook
  const [data, err, pending] = useFetch({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/users",
  });
  console.log(data, err, pending);

  const [showCart, setShowCart] = useState<boolean>(true);
  const [showAdd, setShowAdd] = useState<boolean>(false);
  const [selected, setSelected] = useState<Item>();
  const [cartItems, setCartItems] = useState<customCartType[]>([]);
  const [filtered, setFilterd] = useState<object>({});
  const { isAuth } = useAuth();
  const [isAuthPage] = useState(() => {
    if (
      window.location.pathname == "/login" ||
      window.location.pathname == "/signup"
    ) {
      return false;
    }
    return true;
  });

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
    setFilterd({});
  }

  function showToast(msg: string) {
    toast(msg);
  }

  const contextValue = {
    handleSelect,
    toggleAddMenu,
    AddToCart,
    handleIncOrDecItem,
    handleDeleteItemCart,
    emptyCart,
    showToast,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App" style={{ display: "flex", flexDirection: "row" }}>
        <Toaster />
        {isAuthPage && isAuth && (
          <Leftbar count={Object.keys(cartItems).length} />
        )}
        <Routes>
          <Route
            path="/"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>

        {showAdd && isAuthPage && isAuth && <Add />}
        {selected && isAuthPage && isAuth && <Details selected={selected} />}
        {showCart && isAuthPage && isAuth && (
          <Cart count={Object.keys(cartItems).length} filtered={filtered} />
        )}
      </div>
    </AppContext.Provider>
  );
}

export default App;
