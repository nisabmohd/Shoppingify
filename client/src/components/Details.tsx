import "../css/Cart.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Item } from "./Card";
import { AppContext } from "../App";
import { useContext } from "react";

type detailsProp = {
  selected: Item | undefined;
};

export function Details({ selected }: detailsProp) {
  const context = useContext(AppContext);
  return (
    <div
      className="cart"
      style={{
        backgroundColor: "white",
        boxShadow: "none",
        position: "relative",
      }}
    >
      <div
        className="container-nested"
        style={{ width: "80%", margin: "auto", padding: "3vh 0" }}
      >
        <div
          className="navigate_back"
          onClick={() => context.handleSelect(undefined)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <KeyboardBackspaceIcon
            sx={{ color: "#F9A109", fontSize: "15px", fontWeight: "bold" }}
          />
          <p
            style={{
              color: "#F9A109",
              fontSize: "14px",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            back
          </p>
        </div>

        <div className="image" style={{ marginTop: "45px" }}>
          {selected?.img && (
            <img
              style={{
                width: "100%",
                borderRadius: "17px",
                height: "220px",
                objectFit: "cover",
              }}
              src={selected?.img}
              alt=""
            />
          )}
        </div>

        <div className="details" style={{ marginTop: "55px" }}>
          <div className="name" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>name</p>
            <p style={{ ...dataStyle, fontSize: "18px" }}>{selected?.name}</p>
          </div>
          <div className="cat" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>category</p>
            <p style={{ ...dataStyle, fontSize: "16.25px" }}>
              {selected?.category}
            </p>
          </div>
          <div className="note" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>note</p>
            <p style={{ ...dataStyle, fontSize: "15.5px" }}>
              {selected?.note ? selected.note : "-"}
            </p>
          </div>
        </div>

        <div
          className="buttons"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            position: "absolute",
            bottom: "45px",
          }}
        >
          <button
            style={{
              fontWeight: "bold",
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "15px",
              width: "180px",
              cursor: "pointer",
            }}
          >
            delete
          </button>
          <button
            onClick={() => context.AddToCart(selected)}
            style={{
              fontWeight: "bold",
              border: "none",
              outline: "none",
              fontSize: "15px",
              backgroundColor: "#F9A109",
              color: "white",
              padding: "15px 20px",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}
const titleStyle = {
  fontSize: "12px",
  color: "gray",
  margin: "7px 0",
};
const dataStyle = {
  fontWeight: "bold",
  marginBottom: "20px",
};
