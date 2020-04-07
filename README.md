# react-tech-tree

[![NPM](https://img.shields.io/npm/v/react-tech-tree.svg)](https://www.npmjs.com/package/react-tech-tree)
[![Build Status](https://travis-ci.com/ldd/react-tech-tree.png?branch=master)](https://travis-ci.com/ldd/react-tech-tree)
[![Coverage Status](https://coveralls.io/repos/github/ldd/react-tech-tree/badge.svg?branch=master)](https://coveralls.io/github/ldd/react-tech-tree?branch=add-tests)
[![Dependencies](https://david-dm.org/ldd/react-tech-tree.svg)](https://david-dm.org/ldd/react-tech-tree)
[![Size](https://badgen.net/bundlephobia/minzip/react-tech-tree)](https://bundlephobia.com/result?p=react-tech-tree@0.5.1)

Create highly customizable tech trees (or generic graphical trees)

![superheroes tree](https://raw.githubusercontent.com/ldd/react-tech-tree/master/example/public/gifs/x_men.gif)

## Features

- Light
  - Zero dependencies (besides react)
  - Tree-shaking ready
  - < 2Kb gzipped
- Responsive
  - works on mobile, desktop, etc
- Image Support
  - sprite sheets (e.g: [TexturePacker](https://www.codeandweb.com/texturepacker))
  - individual images
- Customizable

  - style links and nodes
  - ready to [use](https://github.com/ldd/react-tech-tree/tree/master/example/src/trees/text_tooltip/index.js) with [react-tooltip](https://github.com/wwayne/react-tooltip), etc
  - [good examples](https://github.com/ldd/react-tech-tree/tree/master/example/src/trees)

## Installation

- npm: `npm install --save react-tech-tree`
- yarn: `yarn add react-tech-tree`

## Usage

```jsx
import React from "react";

import { Tree } from "react-tech-tree";
import "react-tech-tree/dist/index.css";

const nodes = [
  [ {id: "A0", name: "A"}, {id:"B0", name: "B"} ]
];
const links = [ {from: "A0", to: "B0"} ];

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
| NodeElement | ReactComponent | _(optional)_ React Element to be used as Node. Defaults to Node.             |
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

| Prop      | Type         | Description                                                                                                                                        |
| --------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| name      | string       | name of spritesheet entry or image name for this Sprite                                                                                            |
| scale     | number       | sprite's scale                                                                                                                                     |
| styleName | () => object | function to style the Sprite from its name. [Example](https://github.com/ldd/react-tech-tree/blob/master/example/src/trees/superhero/index.js#L18) |

## Tips

For further usage, go to the [examples page](https://github.com/ldd/react-tech-tree/tree/master/example/src/trees)

## Inspiration

- [tech-tree](https://github.com/ldd/tech-tree-js)
  - vanilla javascript project I made a _long_ time ago

## License

MIT © [ldd](https://github.com/ldd)
