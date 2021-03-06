import React from "react";
import "./Tree.css";
import { Node } from "./Node";
import { Link } from "./Link";
import usePosition from "../hooks/usePosition";

export const Tree = ({
  id = "tech-tree",
  links = [],
  nodes = [],
  NodeElement = Node,
  LinkElement = Link,
  nodeProps = {},
  linkProps = {}
}) => {
  const { pathMaker, ...otherLinkProps } = linkProps;
  const { ref, nodePositions } = usePosition({ links, pathMaker });
  return (
    <div className="Tree" id={id} ref={ref}>
      <svg className="Link-Container">
        <TreeLink
          links={links}
          LinkElement={LinkElement}
          linkProps={otherLinkProps}
          nodePositions={nodePositions}
        />
      </svg>
      <TreeNodes
        nodes={nodes}
        NodeElement={NodeElement}
        nodeProps={nodeProps}
      />
    </div>
  );
};

/**
 * React Component made up of NodeElements inside Tree-Rows made from a 2D array of nodes
 */
const TreeNodes = ({ nodes, NodeElement, nodeProps }) => {
  return nodes.map((siblings, depth) => (
    <div key={`tree-row-${depth}`} className="Tree-Row">
      {siblings.map((props, i) => (
        <NodeElement key={`node-${props.id || i}`} {...nodeProps} {...props} />
      ))}
    </div>
  ));
};
/**
 * React Component made up of LinkElement made from an array of links augmented by nodePositions information
 */
const TreeLink = ({ links, LinkElement, linkProps, nodePositions }) => {
  return links.map(({ from, to, ...props }, i) => {
    const { pathData } = nodePositions[i] || {};
    if (!pathData) return null;

    const id = `${from}-${to}`;
    const allLinkProps = { ...linkProps, ...props };
    return (
      <LinkElement id={id} key={id} pathData={pathData} {...allLinkProps} />
    );
  });
};
