export type Item = {
  name: string;
  id: number;
  note?: string;
  category: string;
  img?: string;
};

type CardProp = {
  item: Item;
};

import AddIcon from "@mui/icons-material/Add";
import { AppContext } from "../App";
import { useContext } from "react";

export function Card({ item }: CardProp) {
  const context = useContext(AppContext);

  const handleAdd = (e: any) => {
    e.stopPropagation();
    context.AddToCart(item);
  };

  return (
    <div
      onClick={() => context.handleSelect(item)}
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
        cursor: "pointer",
      }}
    >
      <h4 style={{ marginLeft: "19px" }}>{item.name}</h4>
      <button
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
          cursor: "pointer",
          marginRight: "14px",
        }}
        onClick={(e) => handleAdd(e)}
      >
        <AddIcon sx={{ color: "#C1C1C4", marginTop: "6px" }} />
      </button>
    </div>
  );
}
