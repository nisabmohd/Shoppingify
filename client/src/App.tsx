import { Cart } from "./components/Cart";
import { Leftbar } from "./components/Leftbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Statistics } from "./pages/Statistics";
import { History } from "./pages/History";
import { Add } from "./components/Add";
import { Details } from "./components/Details";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexDirection: "row" }}>
      <Leftbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>

      {/* conditional render right component */}

      {/* <Add /> */}
      {/* <Details /> */}
      <Cart />
    </div>
  );
}

export default App;
