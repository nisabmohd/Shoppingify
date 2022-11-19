import "../css/Cart.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

export function Details() {
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
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
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
          <img
            style={{
              width: "100%",
              borderRadius: "17px",
              height: "220px",
              objectFit: "cover",
            }}
            src="https://wp.inews.co.uk/wp-content/uploads/2021/11/PRI_212086616.jpg?resize=2048,1366&strip=all&quality=90"
            alt=""
          />
        </div>

        <div className="details" style={{ marginTop: "55px" }}>
          <div className="name" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>name</p>
            <p style={{ ...dataStyle, fontSize: "18px" }}>Avacado</p>
          </div>
          <div className="cat" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>category</p>
            <p style={{ ...dataStyle, fontSize: "16.25px" }}>
              Fruits and vegetables
            </p>
          </div>
          <div className="note" style={{ marginTop: "15px" }}>
            <p style={titleStyle}>note</p>
            <p style={{ ...dataStyle, fontSize: "15.5px" }}>
              Nutrient-dense foods are those that provide substantial amounts of
              vitamins, minerals and other nutrients with relatively few
              calories. One-third of a medium avocado (50 g) has 80 calories and
              contributes nearly 20 vitamins and minerals, making it a great
              nutrient-dense food choice.{" "}
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
