import "../css/Cart.css";
import bottle from "../assets/source.svg";
import trolly from "../assets/trolly.svg";
import { padding } from "@mui/system";
import { AppContext } from "../App";
import { useContext } from "react";
import { Item } from "./Card";

type cartProps = {
  cartItems: Item[];
};

export function Cart({ cartItems }: cartProps) {
  const context = useContext(AppContext);

  console.log(cartItems);

  return (
    <div className="cart">
      <div className="item_select">
        <div className="not_find">
          <img
            src={bottle}
            alt=""
            style={{ marginTop: "-20px", marginBottom: "10px" }}
          />
          <div
            className="right"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              marginLeft: "auto",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                color: "white",
                fontWeight: "bold",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              Didn’t find what you <br></br>need?
            </p>
            <button
              style={{
                backgroundColor: "white",
                border: "none",
                outline: "none",
                width: "50%",
                padding: "10px 10px",
                fontWeight: "bold",
                borderRadius: "9px",
                cursor: "pointer",
              }}
              onClick={() => context.toggleAddMenu(true)}
            >
              Add item
            </button>
          </div>
        </div>

        {/* conditional render when nothing selected */}
        {cartItems.length == 0 ? (
          <>
            <div
              className="no_item"
              style={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <p
                style={{
                  color: "black",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "-8vh",
                }}
              >
                No items
              </p>
            </div>
            <div
              className="trolly_img"
              style={{
                position: "absolute",
                bottom: 115,
                right: "69px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img style={{ margin: "auto" }} src={trolly} alt="" />
            </div>
          </>
        ) : (
          // cartItems render
          <div style={{ width: "80%", margin: "auto", marginTop: "25px" }}>
            <h2 style={{ fontSize: "21px" }}>Shopping list</h2>
            {cartItems.map((item) => (
              <pre
                style={{ fontWeight: "bold", marginTop: "12px" }}
                key={item.id}
              >
                {item.name}
              </pre>
            ))}
          </div>
        )}

        {/*  */}
      </div>
      <div className="save_name">
        <div className="input">
          <input type="text" placeholder="Enter a name" />
          <button>save</button>
        </div>
      </div>
    </div>
  );
}
