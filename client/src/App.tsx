import { Cart } from "./components/Cart";
import { Leftbar } from "./components/Leftbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Statistics } from "./pages/Statistics";
import { History } from "./pages/History";
import { Add } from "./components/Add";
import { Details } from "./components/Details";
import { createContext, useState } from "react";

export const AppContext = createContext<any>({});

function App() {
  const [rightActive, setRightActive] = useState<number>(3);
  function toggleRight(item: number) {
    setRightActive(item);
  }
  const contextValue = {
    toggleRight,
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

        {rightActive === 1 && <Add />}
        {rightActive === 2 && <Details />}
        {rightActive === 3 && <Cart />}
      </div>
    </AppContext.Provider>
  );
}

export default App;
