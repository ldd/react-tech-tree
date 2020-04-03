# react-tech-tree

> React tech tree component

[![NPM](https://img.shields.io/npm/v/react-tech-tree.svg)](https://www.npmjs.com/package/react-tech-tree)

Create highly customizable tech trees (or generic graphical trees) from json files

## Features

- Light
  - Zero dependencies (besides react)
  - Tree-shaking ready
- Responsive
  - works on mobile, desktop, etc
- Image Support
  - sprite sheets (e.g: [TexturePacker](https://www.codeandweb.com/texturepacker))
  - individual images
- Customizable
  - style links and nodes
  - ready to use with [react-tooltip](https://github.com/wwayne/react-tooltip), etc
  - [good examples](https://github.com/ldd/react-tech-tree/tree/master/example/src/trees)

## Installation

- npm: `npm install --save react-tech-tree`
- yarn: `yarn add react-tech-tree`

## Usage

```jsx
import React, { Component } from "react";

import { Tree } from "react-tech-tree";
import "react-tech-tree/dist/index.css";

const nodes = [
  [ {id: "A", name: "A"}, {id:"B", name: "B"} ]
];
const links = [{from: "A", to: "B"}];

function Example {
  return <Tree nodes={nodes} links={links}/>;
}
```

## Options

### _Tree_

```js
import { Tree } from "react-tech-tree";
```

| Prop        | Type           | Description                                                                  |
| ----------- | -------------- | ---------------------------------------------------------------------------- |
| id          | string         | id property (should be unique). E.g: [uuuid](https://github.com/uuidjs/uuid) |
| links       | object[]       | object with links information                                                |
| nodes       | object[]       | object with nodes information                                                |
| nodeElement | ReactComponent | (optional) React Element to be used as Node. Defaults to Node.               |
| nodeProps   | object         | Properties to pass down to Node elements. See Node.                          |
| linkProps   | object         | Properties to pass down to Link elements. See Link.                          |

### _Node_

```js
import { Node } from "react-tech-tree";
```

| Prop         | Type       | Description                                  |
| ------------ | ---------- | -------------------------------------------- |
| clickHandler | () => void | Event Handler fired when the Node is clicked |

### _Sprite_

```js
import { Sprite } from "react-tech-tree";
```

| Prop      | Type         | Description                                                            |
| --------- | ------------ | ---------------------------------------------------------------------- |
| name      | string       | name of spritesheet entry or image name for this Sprite                |
| scale     | number       | sprite's scale                                                         |
| styleName | () => object | function to style the Sprite from its name. See examples for more info |

## Tips

For further usage, go to the [examples page](https://github.com/ldd/react-tech-tree/tree/master/example/src/trees)

## License

MIT © [ldd](https://github.com/ldd)
