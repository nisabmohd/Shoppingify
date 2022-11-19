import "../css/Cart.css";

export function Add() {
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
            style={{ display: "flex", flexDirection: "column" }}
            className="input-box"
          >
            <label htmlFor="name">Name</label>
            <input
              style={{
                height: "55px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
              }}
              type="text"
              id="name"
              placeholder="Enter a name"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="input-box"
          >
            <label htmlFor="name">Note (optional)</label>
            <textarea
              style={{
                height: "95px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
                resize: "none",
              }}
              id="name"
              placeholder="Enter a name"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="input-box"
          >
            <label htmlFor="name">Image (optional)</label>
            <input
              style={{
                height: "55px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
              }}
              type="text"
              id="name"
              placeholder="Enter a name"
            />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="input-box"
          >
            <label htmlFor="name">Category</label>
            <input
              style={{
                height: "55px",
                borderRadius: "8px",
                border: "2px solid #BDBDBD",
              }}
              type="text"
              id="name"
              placeholder="Enter a name"
            />
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
