export const styleScale = scale => ({ transform: `scale(${scale})` });

const frameStyle = ({ frame } = { frame: {} }) => {
  const { w: width = 16, h: height = 16, x = 0, y = 0 } = frame;
  return { width, height, backgroundPosition: `-${x}px -${y}px` };
};

export const prepareSpritesheetStyle = (spriteImage, spriteInformation) => {
  const defaultFrame = Object.values(spriteInformation.frames)[0];

  return name => ({
    backgroundImage: `url(${spriteImage})`,
    ...frameStyle(spriteInformation.frames[name] || defaultFrame)
  });
};
