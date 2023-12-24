// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";

const Menu = () => {
  // Define addToCartHandler function here
  const addToCartHandler = (itemNum) => {
    console.log(`Item ${itemNum} added to cart`);
  };
  return (
    <div id="menu">
      <h1>Our Menu</h1>
      <div>
        <MenuCard
          itemNum={1}
          burgerSrc={burger1}
          price={200}
          title="Cheese Burger"
          handler={addToCartHandler} // Pass the addToCartHandler function as a prop
          delay={0.1}
        />
        <MenuCard
          itemNum={2}
          burgerSrc={burger2}
          price={200}
          title="VEG CHESSE BURGER”"
          handler={addToCartHandler} // Pass the addToCartHandler function as a prop
          delay={0.5}
        />
        <MenuCard
          itemNum={3}
          burgerSrc={burger3}
          price={200}
          title="Cheese Burger with French Fries"
          handler={addToCartHandler} // Pass the addToCartHandler function as a prop
          delay={0.9}
        />
      </div>
    </div>
  );
};

export default Menu;
