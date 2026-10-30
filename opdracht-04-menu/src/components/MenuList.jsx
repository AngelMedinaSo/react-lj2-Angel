import { useState } from "react";
import menu from "../data.js";
import MenuItem from "./MenuItem";

function MenuList() {
  const [dishes, setDishes] = useState(menu);

  return (
    <section className="menu-list">
      {dishes.map((dish) => (
        <MenuItem
          key={dish.id}
          title={dish.title}
          price={dish.price}
          img={dish.img}
          desc={dish.desc}
        />
      ))}
    </section>
  );
}

export default MenuList;
