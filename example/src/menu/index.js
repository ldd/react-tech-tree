// prettier-ignore
import {
    Button, Menu, MenuLabel, MenuLink, MenuList,
    Dropdown, DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger
  } from "bloomer";
import React, { useState } from "react";

export const MyMobileMenu = ({ clickHandler, labels = [] }) => {
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
          {labels.map(({ label, key }) => (
            <DropdownItem key={key} onClick={() => clickHandler(key)}>
              {label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};

export const MenuEntry = ({ clickHandler, label, entries = [] }) => (
  <>
    <MenuLabel>{label}</MenuLabel>
    <MenuList>
      {entries.map(({ label: entryLabel, key }) => (
        <li key={key}>
          <MenuLink onClick={() => clickHandler(key)}>{entryLabel}</MenuLink>
        </li>
      ))}
    </MenuList>
  </>
);

export const MyDesktopMenu = ({ choices = [], clickHandler }) => (
  <Menu style={{ paddingRight: "1.5rem" }} isHidden="mobile">
    <MenuEntry
      label={"Simple"}
      entries={choices.slice(0, 1)}
      clickHandler={clickHandler}
    />
    <MenuEntry
      label={"Decorated Links"}
      entries={choices.slice(1)}
      clickHandler={clickHandler}
    />
  </Menu>
);

export const MyMenu = ({ clickHandler, choices = [] }) => (
  <>
    <MyDesktopMenu choices={choices} clickHandler={clickHandler} />
    <MyMobileMenu labels={choices} clickHandler={clickHandler} />
  </>
);

export default MyMenu;
