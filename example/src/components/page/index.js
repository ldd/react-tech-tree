//prettier-ignore
import {
  Hero, HeroBody, HeroHeader, Image, Title,
  Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart
} from "bloomer";
import React, { useState } from "react";
import useRouter from "react-simplest-router";
import { Examples } from "./Examples";
import { Landing } from "./Landing";
import "bulma/css/bulma.min.css";

const GithubItem = () => (
  <NavbarItem href="https://github.com/ldd/react-tech-tree" target="_blank">
    <Image
      isSize="24x24"
      src="https://cdn.brandicons.org/icons/github.svg"
      isHidden="touch"
    />
    <Title isSize={6} isHidden="desktop">
      Github
    </Title>
  </NavbarItem>
);

const RoutePicker = ({ routes, clickHandler }) =>
  routes.map(({ label, location, isActive }) => (
    <NavbarItem
      isActive={isActive}
      href={location}
      key={location}
      onClick={() => clickHandler(location)}
    >
      {label}
    </NavbarItem>
  ));

const MyHeader = ({ setRoute, routes }) => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const clickHandler = route => {
    setBurgerStatus(false);
    setRoute(route);
  };
  return (
    <HeroHeader>
      <Navbar>
        <NavbarBrand>
          <NavbarBurger
            isActive={burgerStatus}
            onClick={() => setBurgerStatus(!burgerStatus)}
          />
        </NavbarBrand>
        <NavbarMenu isActive={burgerStatus}>
          <NavbarStart>
            <RoutePicker clickHandler={clickHandler} routes={routes} />
            <GithubItem />
          </NavbarStart>
        </NavbarMenu>
      </Navbar>
    </HeroHeader>
  );
};

const MyBody = ({ children }) => (
  <HeroBody style={{ padding: "1.5rem" }}>{children}</HeroBody>
);

const defaultRoutes = [
  { label: "Home", location: "#/", component: Landing },
  { label: "Examples", location: "#examples", component: Examples }
];

export const Page = () => {
  const { routes, setRoute, ActiveComponent } = useRouter(defaultRoutes);
  return (
    <Hero isColor="info" isSize="medium" isFullHeight isBold>
      <MyHeader routes={routes} setRoute={setRoute} />
      <MyBody>
        <ActiveComponent />
      </MyBody>
    </Hero>
  );
};
