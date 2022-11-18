import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import "../css/Leftbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import ReplayIcon from "@mui/icons-material/Replay";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Leftbar() {
  return (
    <div className="leftbar">
      <div className="logo" style={{ marginTop: "4vh" }}>
        <img src={logo} alt="" />
      </div>
      <div className="tabs">
        <NavLink
          className="mtd-4"
          style={({ isActive }) =>
            isActive
              ? {
                  ...tabStyle,
                  ...activeStyle,
                }
              : tabStyle
          }
          to="/"
        >
          <MenuIcon sx={{ fontSize: "24.75px", marginLeft: "-5px" }} />
        </NavLink>
        <NavLink
          className="mtd-4"
          style={({ isActive }) =>
            isActive
              ? {
                  ...tabStyle,
                  ...activeStyle,
                }
              : tabStyle
          }
          to="/history"
        >
          <ReplayIcon sx={{ fontSize: "24.75px", marginLeft: "-5px" }} />
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive
              ? {
                  ...tabStyle,
                  ...activeStyle,
                }
              : tabStyle
          }
          className={`mtd-4`}
          to="/statistics"
        >
          <AssessmentOutlinedIcon
            sx={{ fontSize: "24.75px", marginLeft: "-5px" }}
          />
        </NavLink>
      </div>
      <div className="cart_icon" style={{ marginBottom: "3.85vh" }}>
        <button
          className="cart_btn"
          style={{
            backgroundColor: "#F9A109",
            outline: "none",
            border: "none",
            borderRadius: "50%",
            padding: "10px",
            width: "45px",
            height: "45px",
          }}
        >
          <ShoppingCartOutlinedIcon sx={{ color: "white" }} />
        </button>
      </div>
    </div>
  );
}
const activeStyle = {
  borderLeft: "5px solid #F9A109",
  borderRadius: "1.5px",
};
const tabStyle = {
  textDecoration: "none",
  color: "#454545",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "55px",
  borderLeft: "5px solid white",
};
