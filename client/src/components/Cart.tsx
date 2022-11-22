import "../css/Cart.css";
import bottle from "../assets/source.svg";
import trolly from "../assets/trolly.svg";
import { AppContext, customCartType } from "../App";
import { useContext } from "react";
import { Item } from "./Card";
import EditIcon from "@mui/icons-material/Edit";
import { CartItemSelected } from "./CartItemSelected";

type cartProps = {
  cartItems: Item[];
  filtered: any;
  count: number;
};

export function Cart({ cartItems, filtered, count }: cartProps) {
  const context = useContext(AppContext);

  // console.log(cartItems);
  // console.log(filtered);

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
          <div
            className="hidescroll"
            style={{
              width: "80%",
              margin: "auto",
              marginTop: "45px",
              overflowY: "scroll",
              height: "75%",
            }}
          >
            <div
              className="header_cart_items"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "25px",
              }}
            >
              <h2 style={{ fontSize: "21px" }}>Shopping list</h2>
              <EditIcon sx={{ fontSize: "20px", marginBottom: "-5px" }} />
            </div>
            {filtered?.fruitsVeg.length !== 0 && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#828282",
                  fontWeight: "bold",
                  marginTop: "38px",
                }}
              >
                Fruits And Vegetables
              </p>
            )}
            {filtered?.fruitsVeg.map((item: customCartType) => {
              return (
                <CartItemSelected
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  quantity={item.quantity}
                />
              );
            })}

            {filtered?.meatFish.length !== 0 && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#828282",
                  fontWeight: "bold",
                  marginTop: "38px",
                }}
              >
                Meat And Fish
              </p>
            )}
            {filtered?.meatFish.map((item: customCartType) => {
              return (
                <CartItemSelected
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  quantity={item.quantity}
                />
              );
            })}

            {filtered?.beverage.length !== 0 && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#828282",
                  fontWeight: "bold",
                  marginTop: "38px",
                }}
              >
                Beverages
              </p>
            )}
            {filtered?.beverage.map((item: customCartType) => {
              return (
                <CartItemSelected
                  id={item.id.toString()}
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                />
              );
            })}

            {filtered?.pets.length !== 0 && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#828282",
                  fontWeight: "bold",
                  marginTop: "38px",
                }}
              >
                Pets
              </p>
            )}
            {filtered?.pets.map((item: customCartType) => {
              return (
                <CartItemSelected
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  quantity={item.quantity}
                />
              );
            })}

            {filtered?.misc.length !== 0 && (
              <p
                style={{
                  fontSize: "13px",
                  color: "#828282",
                  fontWeight: "bold",
                  marginTop: "38px",
                }}
              >
                Misc
              </p>
            )}
            {filtered?.misc.map((item: customCartType) => {
              return (
                <CartItemSelected
                  key={item.id}
                  id={item.id.toString()}
                  name={item.name}
                  quantity={item.quantity}
                />
              );
            })}
          </div>
        )}

        {/*  */}
      </div>
      <div className="save_name">
        <div
          className="input"
          style={{
            border:
              count > 0 ? "2px solid rgb(249, 161, 9)" : "2px solid #C1C1C4",
          }}
        >
          <input type="text" placeholder="Enter a name" />
          <button
            style={{
              backgroundColor: count > 0 ? "rgb(249, 161, 9)" : "#C1C1C4",
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}
