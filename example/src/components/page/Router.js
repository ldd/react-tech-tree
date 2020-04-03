import { NavbarItem } from "bloomer";
import React, { useState } from "react";
import { Examples } from "./Examples";
import { Landing } from "./Landing";

export const RouterPicker = ({ routes = [], activeRoute, clickHandler }) =>
  routes.map(({ label, route }) => (
    <NavbarItem
      isActive={activeRoute === route}
      href={route}
      key={route}
      onClick={() => clickHandler(route)}
    >
      {label}
    </NavbarItem>
  ));

const Empty = () => <></>;

export const RouterPick = ({ activeRoute }) => {
  let InnerContent = Landing;
  if (activeRoute === "#examples") InnerContent = Examples;
  return <InnerContent />;
};

export const routes = [
  { label: "Home", route: "#/" },
  { label: "Examples", route: "#examples" }
];

export const Router = ({ Picker = Empty, Displayer = Empty }) => {
  const [activeRoute, setRoute] = useState(document.location.hash);
  return (
    <>
      <Picker routes={routes} setRoute={setRoute} activeRoute={activeRoute} />
      <Displayer>
        <RouterPick activeRoute={activeRoute} />
      </Displayer>
    </>
  );
};
