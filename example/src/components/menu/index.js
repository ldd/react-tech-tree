// prettier-ignore
import {
    Button, Menu, MenuLabel, MenuLink, MenuList,
    Dropdown, DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger
  } from "bloomer";
import React, { useState } from "react";

export const MyMobileMenu = ({ clickHandler, choices = [] }) => {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  return (
    <Dropdown
      style={{ marginBottom: "1.5rem" }}
      isHidden={["desktop", "tablet"]}
      isActive={dropdownStatus}
    >
      <DropdownTrigger>
        <Button
          isColor="light"
          isOutlined
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setDropdownStatus(!dropdownStatus)}
        >
          Example Picker &nbsp; ∨
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownContent>
          {choices.map(({ label, key }) => (
            <DropdownItem key={key} onClick={() => clickHandler(key)}>
              {label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};

export const MenuEntry = ({ clickHandler, choices = [], type = "" }) => (
  <>
    <MenuLabel>{type}</MenuLabel>
    <MenuList>
      {choices
        .filter(choice => choice.type === type)
        .map(({ label: entryLabel, key }) => (
          <li key={key}>
            <MenuLink onClick={() => clickHandler(key)}>{entryLabel}</MenuLink>
          </li>
        ))}
    </MenuList>
  </>
);

export const MyDesktopMenu = ({ clickHandler, choices = [], types = [] }) => (
  <Menu style={{ paddingRight: "1.5rem" }} isHidden="mobile">
    {types.map(type => (
      <MenuEntry
        key={type}
        type={type}
        choices={choices}
        clickHandler={clickHandler}
      />
    ))}
  </Menu>
);

export const MyMenu = ({ clickHandler, choices = [], types = [] }) => (
  <>
    <MyDesktopMenu
      choices={choices}
      clickHandler={clickHandler}
      types={types}
    />
    <MyMobileMenu choices={choices} clickHandler={clickHandler} />
  </>
);

export default MyMenu;
