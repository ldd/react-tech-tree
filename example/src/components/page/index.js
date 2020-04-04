//prettier-ignore
import {
  Hero, HeroBody, HeroHeader, Image, Title,
  Navbar, NavbarBrand, NavbarBurger, NavbarItem, NavbarMenu, NavbarStart
} from "bloomer";
import "bulma/css/bulma.min.css";
import React, { useState } from "react";
import { Router, RouterPicker } from "./Router";

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

const MyHeader = ({ setRoute, ...otherProps }) => {
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
            <RouterPicker {...otherProps} clickHandler={clickHandler} />
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
  return (
    <Hero isColor="info" isSize="medium" isFullHeight isBold>
      <Router Picker={MyHeader} Displayer={MyBody} />
    </Hero>
  );
};
