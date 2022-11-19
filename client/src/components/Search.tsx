import SearchIcon from "@mui/icons-material/Search";

export function Search() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        height: "50px",
        borderRadius: "12px",
        width: "275px",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.04)",
        padding: "5px 15px",
      }}
    >
      <SearchIcon />
      <input
        style={{
          marginLeft: "15px",
          height: "100%",
          width: "80%",
          border: "none",
          outline: "none",
          fontSize: "15px",
          marginTop: "-3px",
        }}
        type="text"
        placeholder="search item"
      />
    </div>
  );
}
