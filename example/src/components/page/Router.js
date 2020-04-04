import React, { useState } from "react";
import { Examples } from "./Examples";
import { Landing } from "./Landing";

export const defaultRoutes = [
  { label: "Home", route: "#/", component: Landing },
  { label: "Examples", route: "#examples", component: Examples }
];

const Empty = () => <></>;
export const useRouter = (routes = defaultRoutes) => {
  const [activeRoute, setRoute] = useState(document.location.hash);
  const ourRoutes = routes.map(({ label, route }) => ({
    label,
    route,
    isActive: route === activeRoute
  }));
  const route = routes.find(({ route }) => route === activeRoute);
  const ActiveComponent = route === undefined ? Empty : route.component;
  return { setRoute, routes: ourRoutes, ActiveComponent };
};
