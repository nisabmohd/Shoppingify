import { Graph } from "../components/Graph";

export function Statistics() {
  return (
    <div className="container">
      <h1>Statistics</h1>
      <div
        style={{
          width: "100%",
          height: "450px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Graph />
      </div>
    </div>
  );
}
