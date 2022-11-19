import { FormControl, MenuItem, Select } from "@mui/material";
import { AppContext } from "../App";
import "../css/Cart.css";
import { useContext } from "react";

export function Add() {
  const context = useContext(AppContext);
  return (
    <div className="cart" style={{ boxShadow: "none", position: "relative" }}>
      <div
        className="container-nested"
        style={{ width: "80%", margin: "auto", padding: "3vh 0" }}
      >
        <div className="heading_add">
          <h2>Add a new item</h2>
        </div>

        <div className="inputs">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
            className="input-box"
          >
            <label style={labeStyle} htmlFor="name">
              Name
            </label>
            <input
              className="form"
              style={{
                height: "55px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
                marginTop: "12px",
                padding: "5px 8px",
                fontSize: "14px",
                background: "transparent",
              }}
              type="text"
              id="name"
              autoComplete="off"
              placeholder="Enter a name"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
            className="input-box"
          >
            <label style={labeStyle} htmlFor="note">
              Note (optional)
            </label>
            <textarea
              className="form"
              style={{
                height: "95px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
                resize: "none",
                marginTop: "12px",
                padding: "10px 8px",
                fontSize: "14px",
                background: "transparent",
              }}
              id="note"
              placeholder="Enter a note"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
            className="input-box"
          >
            <label style={labeStyle} htmlFor="img">
              Image (optional)
            </label>
            <input
              className="form"
              style={{
                height: "55px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
                marginTop: "12px",
                padding: "5px 8px",
                fontSize: "14px",
                background: "transparent",
              }}
              autoComplete="off"
              type="text"
              id="img"
              placeholder="Enter a url"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "30px",
            }}
            className="input-box"
          >
            <label style={labeStyle} htmlFor="cat">
              Category
            </label>
            <FormControl
              sx={{
                width: "100%",
                marginTop: "12px",
                border: "1px solid #BDBDBD",
                borderRadius: "10px",
                outline: "none",
              }}
            >
              <Select
                displayEmpty
                inputProps={{
                  "aria-label": "Without label",
                }}
                sx={{ border: "none", outline: "none" }}
              >
                <MenuItem
                  style={{
                    margin: "7px 5px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  value={10}
                >
                  Fruits and vegetables
                </MenuItem>
                <MenuItem
                  style={{
                    margin: "7px 5px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  value={20}
                >
                  Meat and Fish
                </MenuItem>
                <MenuItem
                  style={{
                    margin: "7px 5px",
                    borderRadius: "8px",
                    padding: "10px",
                  }}
                  value={30}
                >
                  Thirty
                </MenuItem>
              </Select>
            </FormControl>
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
            onClick={() => context.toggleAddMenu(false)}
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
            cancel
          </button>
          <button
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
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
const labeStyle = {
  fontWeight: "bold",
  fontSize: "13px",
};
