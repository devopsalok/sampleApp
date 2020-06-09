import React from "react";
import MenuElement from "./MenuElement";

const dummyArr = [0, 1, 2, 3, 4, 5, 6];

function SecondaryMenu() {
  return dummyArr.map(el => {
    return <MenuElement key={el} />;
  });
}

export default SecondaryMenu;
