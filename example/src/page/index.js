//prettier-ignore
import { 
  Content, Footer,
  Hero, HeroBody, HeroFooter, HeroHeader,
  Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart
} from "bloomer";
import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import { Examples } from "./Examples";

const MyHeader = ({ routes = [], activeRoute, setRoute }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <HeroHeader>
      <Navbar>
        <NavbarBrand>
          <NavbarItem>
            <b>React Tech Tree</b>
          </NavbarItem>
          <NavbarBurger
            isActive={burgerStatus}
            onClick={() => setBurgerStatus(!burgerStatus)}
          />
        </NavbarBrand>
        <NavbarMenu isActive={burgerStatus}>
          <NavbarStart>
            {routes.map(({ label, route }) => (
              <NavbarItem
                isActive={activeRoute === route}
                href={route}
                key={route}
                onClick={() => setRoute(route)}
              >
                {label}
              </NavbarItem>
            ))}
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    </HeroHeader>
  );
};
const MyContent = ({ route }) => {
  let InnerContent = () => null;
  if (route === "#examples") InnerContent = Examples;
  return (
    <HeroBody style={{ padding: "1.5rem" }}>
      <InnerContent />
    </HeroBody>
  );
};
export const MyFooter = () => (
  <HeroFooter>
    <Footer className="dark">
      <Content isSize="small">
        Source code licensed under the <a href="_blank">MIT License</a>.
      </Content>
    </Footer>
  </HeroFooter>
);

export const Page = () => {
  const [route, setRoute] = useState(document.location.hash);
  const routes = [
    { label: "Home", route: "#/" },
    { label: "Examples", route: "#examples" }
  ];
  return (
    <Hero isColor="info" isSize="medium" isFullHeight isBold>
      <MyHeader routes={routes} activeRoute={route} setRoute={setRoute} />
      <MyContent route={route} />
    </Hero>
  );
};
