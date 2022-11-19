import { Category } from "./Category";
import data from "../data.json";

export function Data() {
  console.log(data);
  return (
    <div
      style={{
        marginTop: "25px",
        height: "50px",
      }}
    >
      {data.map((item) => (
        <Category key={item.category} name={item.category} data={item.items} />
      ))}
    </div>
  );
}
