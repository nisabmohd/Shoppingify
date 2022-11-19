import { Card, Item } from "./Card";

export type CategoryProps = {
  name: string;
  data: Item[];
};

export function Category({ name, data }: CategoryProps) {
  return (
    <div style={{ marginTop: "55px" }}>
      <h3 style={{ fontSize: "21px", marginBottom: "25px" }}>{name}</h3>
      <div
        className="cards"
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginLeft: "-9px",
          gap: "38px",
        }}
      >
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
