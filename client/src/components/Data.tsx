import { Category } from "./Category";

export function Data() {
  return (
    <div
      style={{
        marginTop: "25px",
        height: "50px",
      }}
    >
      <Category
        name="Fruits and vegetables"
        data={[
          { name: "Avacado", id: 1 },
          { name: "Banana", id: 2 },
          { name: "Onion", id: 3 },
          { name: "Silandro", id: 4 },
          { name: "Watermelon", id: 5 },
          { name: "Cooked corn", id: 6 },
          { name: "Carrot", id: 7 },
          { name: "Peas", id: 8 },
        ]}
      />
      <Category
        name="Meat and fish"
        data={[
          { name: "Chicken", id: 9 },
          { name: "Sardina", id: 10 },
          { name: "Leg Peice", id: 11 },
          { name: "Turkey", id: 12 },
          { name: "Salmon", id: 5 },
        ]}
      />
      <Category
        name="Beverages"
        data={[
          { name: "Avacado", id: 1 },
          { name: "Avacado", id: 2 },
          { name: "Avacado", id: 3 },
          { name: "Avacado", id: 4 },
          { name: "Avacado", id: 5 },
          { name: "Avacado", id: 6 },
          { name: "Avacado", id: 7 },
          { name: "Avacado", id: 8 },
        ]}
      />
      <Category
        name="Pets"
        data={[
          { name: "Avacado", id: 1 },
          { name: "Avacado", id: 2 },
          { name: "Avacado", id: 3 },
          { name: "Avacado", id: 4 },
          { name: "Avacado", id: 5 },
          { name: "Avacado", id: 6 },
          { name: "Avacado", id: 7 },
          { name: "Avacado", id: 8 },
        ]}
      />
    </div>
  );
}
