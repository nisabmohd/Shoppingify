export type Item = {
  name: string;
  id: number;
};

type CardProp = {
  item: Item;
};
import AddIcon from "@mui/icons-material/Add";

export function Card({ item }: CardProp) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "152px",
        minHeight: "50px",
        height: "fit-content",
        justifyContent: "space-between",
        boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.05)",
        borderRadius: "12px",
        margin: "10px 5px",
      }}
    >
      <h4 style={{ marginLeft: "19px" }}>{item.name}</h4>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          marginRight: "13px",
          cursor: "pointer",
        }}
      >
        <AddIcon sx={{ color: "#C1C1C4", marginTop: "6px" }} />
      </button>
    </div>
  );
}
