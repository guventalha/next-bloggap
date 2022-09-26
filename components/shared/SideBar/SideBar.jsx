import React from "react";
import { Menu } from "antd";

function getItem(label, key, type) {
  return {
    key,
    label,
    type,
  };
}

const items = [
  getItem("Navigation One", "sub1"),
  getItem("Navigation Two", "sub2"),
  getItem("Navigation Three", "sub4"),
];
function SideBar() {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <Menu
      onClick={onClick}
      style={{
        width: 256,
      }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
}

export default SideBar;
