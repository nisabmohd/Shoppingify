import { Search } from "./Search";

export function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: "30px",
      }}
    >
      <h2 style={{ width: "60%", fontSize: "31px" }}>
        <span style={{ color: "#F9A109" }}>Shoppingify</span> allows you take
        your shopping list wherever you go
      </h2>
      <Search />
    </div>
  );
}
