export function helper(data: any) {
  let fruitsVeg = [];
  let meatFish = [];
  let misc = [];
  let pets = [];
  let beverage = [];
  for (const key in data) {
    if (data[key].category === "Fruits and vegetables") {
      fruitsVeg.push(data[key]);
    }
    if (data[key].category === "Meat and fish") {
      meatFish.push(data[key]);
    }
    if (data[key].category === "Beverages") {
      beverage.push(data[key]);
    }
    if (data[key].category === "Pets") {
      pets.push(data[key]);
    }
    if (data[key].category === "Misc") {
      misc.push(data[key]);
    }
  }
  const newData = {
    fruitsVeg,
    meatFish,
    beverage,
    pets,
    misc,
  };
  return newData;
}
