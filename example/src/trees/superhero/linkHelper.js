const EPSILON = 1;

export const linkPathMaker = (p0, p1, linkProps) => {
  const { x: x0, y: y0, width: w0, height: h0 } = p0;
  const { x: x1, y: y1, width: w1, height: h1 } = p1;

  const [sx, sy] = [Math.floor(x0 + w0 / 2), Math.floor(y0 + h0 / 2)];
  const [tx, ty] = [Math.floor(x1 + w1 / 2), Math.floor(y1 + h1 / 2)];
  const { className: type } = linkProps;
  if (type === "offspring") {
    if (Math.abs(sx - tx) < 50) {
      return `M ${sx} ${sy + h0 / 2} L ${tx} ${ty}`;
    }
    return `
      M ${sx} ${sy + h0 / 2} L ${sx} ${sy + h0 / 2 + 10}
      M ${sx} ${sy + h0 / 2 + 10}
        Q ${tx} ${sy + (ty - sy) / 2} ${tx} ${ty - 10 - h1 / 2}
      M ${tx} ${ty - 10 - h1 / 2} L ${tx} ${ty}
      `;
  }

  if (Math.abs(sy - ty) < EPSILON) {
    return `M ${sx} ${sy} Q ${(sx + tx) / 2} ${sy - (tx - sx) / 5} ${tx} ${ty}`;
  }
  if (Math.abs(sx - tx) < EPSILON) {
    return `M ${sx} ${sy} L ${tx} ${ty}`;
  }

  return `M ${sx} ${sy} Q ${tx} ${sy + (ty - sy) / 2} ${tx} ${ty}`;
};
