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
          {
            name: "Avacado",
            id: 1,
            category: "Fruits and vegetables",
            img: "https://wp.inews.co.uk/wp-content/uploads/2021/11/PRI_212086616.jpg?resize=2048,1366&strip=all&quality=90",
            note: "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice. ",
          },
        ]}
      />
      <Category
        name="Meat and fish"
        data={[
          {
            name: "Chicken",
            id: 9,
            category: "Meat and fish",
            img: "https://assets.tendercuts.in/product/C/H/7bfc5e2d-3857-4f3e-a736-222c7a617b67.webp",
            note: "Chicken has tryptophan, an amino acid that is responsible for raising serotonin levels in your brain. Serotonin is the “feel-good” neurochemical linked with mood",
          },
        ]}
      />
      <Category
        name="Beverages"
        data={[
          {
            name: "Juice",
            id: 1,
            category: "Beverages",
            img: "https://www.thelittleepicurean.com/wp-content/uploads/2021/03/passionfruit-juice-1-700x1050.jpg",
          },
        ]}
      />
      <Category
        name="Pets"
        data={[
          {
            name: "Oats",
            id: 1,
            category: "Pets",
            img: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/06/dog-food-1296x728-header.jpg?w=1155&h=1528",
          },
        ]}
      />
    </div>
  );
}
