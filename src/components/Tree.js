import React, { useState, useRef, useEffect } from "react";
import "./Tree.css";
import { Node } from "./Node";
import { getNodeDOMPositions, simplePathMaker } from "../helpers/svgHelper";

export const Tree = ({
  id = "tech-tree",
  links = [],
  nodes = [],
  NodeElement = Node,
  nodeProps = {},
  linkProps = {}
}) => {
  // https://stackoverflow.com/a/55996413
  const ref = useRef();
  const [nodePositions, setNodePositions] = useState(links);
  const { pathMaker = simplePathMaker, ...otherLinkProps } = linkProps;
  const repositionLinks = () =>
    setNodePositions(
      getNodeDOMPositions(nodePositions, ref.current, pathMaker)
    );

  // https://gist.github.com/gaearon/cb5add26336003ed8c0004c4ba820eae
  useEffect(() => {
    repositionLinks();
    window.addEventListener("resize", repositionLinks);
    return () => window.removeEventListener("resize", repositionLinks);
  }, []);
  return (
    <div className="Tree" id={id} ref={ref}>
      <svg className="Tree-Links">
        <TreeLink
          links={links}
          nodePositions={nodePositions}
          linkProps={otherLinkProps}
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

const TreeNodes = ({ nodes, NodeElement, nodeProps }) =>
  nodes.map((siblings, depth) => (
    <div key={depth} className="Tree-Row">
      {siblings.map((props, i) => (
        <NodeElement
          key={`node-${props.id || i}`}
          scale={1}
          {...nodeProps}
          {...props}
        />
      ))}
    </div>
  ));

const TreeLink = ({ nodePositions = [], links = [], linkProps = {} }) => {
  return links.map(({ from, to, ...props }, i) => {
    const { pathData } = nodePositions[i];
    if (!pathData) return null;
    const id = `${from}-${to}`;
    return <path d={pathData} id={id} key={id} {...linkProps} {...props} />;
  });
};
