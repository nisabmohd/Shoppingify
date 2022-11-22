import { AppContext } from "../App";
import { useContext, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

type CartItemSelectedProps = {
  id: string;
  name: string;
  quantity: number;
};

export function CartItemSelected({
  id,
  name,
  quantity,
}: CartItemSelectedProps) {
  const context = useContext(AppContext);
  const [hidden, setHidden] = useState<boolean>(true);

  function handleAdd() {
    context.handleIncOrDecItem(id, 1);
  }

  function handleMinus() {
    context.handleIncOrDecItem(id, -1);
  }

  function handleDelete() {
    context.handleDeleteItemCart(id);
  }

  function handleShow() {
    setHidden((prev) => !prev);
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "5px 0",
        height: "50px",
      }}
    >
      <p style={{ fontWeight: "bold" }}>{name}</p>
      <div
        className="container_add_minus"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: !hidden ? "white" : "transparent",
          borderRadius: "6px",
          padding: "5px 5px",
        }}
      >
        {!hidden && (
          <button
            onClick={() => handleDelete()}
            style={{
              border: "none",
              outline: "none",
              backgroundColor: "#F9A109",
              borderRadius: "5px",
              cursor: "pointer",
              padding: "7px 6px",
            }}
          >
            <DeleteOutlineIcon sx={{ color: "white", fontSize: "19px" }} />
          </button>
        )}

        {!hidden && (
          <button
            style={{
              color: "#F9A109",
              backgroundColor: "transparent",
              fontSize: "22px",
              fontWeight: "bold",
              outline: "none",
              border: "none",
              margin: "0 9px",
              cursor: "pointer",
            }}
            onClick={() => handleMinus()}
          >
            -
          </button>
        )}

        <p
          style={{
            color: "#F9A10A",
            border: "1px solid #F9A10A",
            borderRadius: "14px",
            padding: "6px 15px",
            fontSize: "12px",
            cursor: "pointer",
          }}
          onClick={() => handleShow()}
        >
          {quantity} pcs
        </p>
        {!hidden && (
          <button
            style={{
              color: "#F9A109",
              backgroundColor: "transparent",
              fontSize: "20px",
              fontWeight: "bold",
              outline: "none",
              border: "none",
              margin: "0 9px",
              cursor: "pointer",
            }}
            onClick={() => handleAdd()}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
