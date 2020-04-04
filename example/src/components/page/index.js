//prettier-ignore
import {
  Hero, HeroBody, HeroHeader, Image, Title,
  Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart
} from "bloomer";
import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import { useRouter } from "./Router";

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
  routes.map(({ label, route, isActive }) => (
    <NavbarItem
      isActive={isActive}
      href={route}
      key={route}
      onClick={() => clickHandler(route)}
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

export const Page = () => {
  const { routes, setRoute, ActiveComponent } = useRouter();
  return (
    <Hero isColor="info" isSize="medium" isFullHeight isBold>
      <MyHeader routes={routes} setRoute={setRoute} />
      <MyBody>
        <ActiveComponent />
      </MyBody>
    </Hero>
  );
};
