import { useState, useRef, useEffect } from "react";
import { getNodeDOMPositions, simplePathMaker } from "../helpers/svgHelper";

const usePosition = ({ links = [], pathMaker = simplePathMaker }) => {
  // https://stackoverflow.com/a/55996413
  const ref = useRef();
  const [nodePositions, setNodePositions] = useState(links);
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
  return { ref, nodePositions };
};

export default usePosition;
