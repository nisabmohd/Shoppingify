import { Graph } from "../components/Graph";

export function Statistics() {
  return (
    <div style={{ padding: "3vh 2vw", flex: "3.25" }}>
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
