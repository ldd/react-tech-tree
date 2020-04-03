// prettier-ignore
import {
  Button, Columns, Column, Menu, MenuLabel, MenuLink, MenuList,
  Dropdown, DropdownContent, DropdownItem, DropdownMenu, DropdownTrigger
} from "bloomer";
import React, { useState } from "react";
import EffectsTree from "../effects/EffectsTree";
import SuperheroTree from "../superhero/SuperheroTree";

const MyDropdown = ({ clickHandler, labels = [] }) => {
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
          {labels.map(label => (
            <DropdownItem key={label} onClick={() => clickHandler(label)}>
              {label}
            </DropdownItem>
          ))}
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
  );
};
const MenuEntry = ({ clickHandler, label }) => (
  <li>
    <MenuLink onClick={() => clickHandler(label)}>{label}</MenuLink>
  </li>
);
const MyMenu = ({ clickHandler, choices = [] }) => (
  <>
    <Menu style={{ paddingRight: "1.5rem" }} isHidden="mobile">
      <MenuLabel>Simple</MenuLabel>
      <MenuList>
        <MenuEntry label={choices[0]} clickHandler={clickHandler} />
      </MenuList>
      <MenuLabel>Decorated Links</MenuLabel>
      <MenuList>
        <MenuEntry label={choices[1]} clickHandler={clickHandler} />
      </MenuList>
    </Menu>
    <MyDropdown labels={choices} clickHandler={clickHandler} />
  </>
);

export const Examples = () => {
  const [pick, setPick] = useState("superheroe");
  let pickLocation = "effects/EffectsTree.js";
  if (pick === "superheroe") pickLocation = "superhero/SuperheroTree.js";
  const choices = ["effects", "superheroe"];
  return (
    <Columns
      style={{
        width: "100vw",
        alignSelf: "start",
        justifyContent: "space-between"
      }}
    >
      <MyMenu clickHandler={setPick} choices={choices} />
      <Column style={{ maxWidth: "calc(100vw - 1.5rem)", overflowX: "scroll" }}>
        {pick === "superheroe" ? <SuperheroTree /> : <EffectsTree />}
        <Button
          style={{ marginTop: "1.5rem" }}
          href={`https://github.com/ldd/react-tech-tree/blob/master/example/src/${pickLocation}`}
          target="_blank"
        >
          Show Code
        </Button>
      </Column>
    </Columns>
  );
};
