import { useState } from "react";
import { Examples } from "../components/page/Examples";
import { Landing } from "../components/page/Landing";

export const defaultRoutes = [
  { label: "Home", route: "#/", component: Landing },
  { label: "Examples", route: "#examples", component: Examples }
];

export const useRouter = (routes = defaultRoutes) => {
  const [activeRoute, setRoute] = useState(document.location.hash);
  const ourRoutes = routes.map(({ label, route }) => ({
    label,
    route,
    isActive: route === activeRoute
  }));
  const route = routes.find(({ route }) => route === activeRoute);
  const ActiveComponent = route === undefined ? Landing : route.component;
  return { setRoute, routes: ourRoutes, ActiveComponent };
};
