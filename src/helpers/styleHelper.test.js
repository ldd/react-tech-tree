import { prepareSpritesheetStyle, DEFAULT_FRAME } from "./styleHelper";

describe("helper [styleHelper]", () => {
  const someImage = "someImage";

  it("generates valid properties", () => {
    const frame = { x: 8, y: 8, w: 8, h: 8 };
    const { x, y, w: width, h: height } = frame;
    const styleName = prepareSpritesheetStyle(someImage, {
      frames: { A: { frame } }
    });

    // check a valid frame
    const validFrameProps = styleName("A");
    expect(validFrameProps).toBeDefined();
    expect(validFrameProps.backgroundImage).toContain(someImage);
    expect(validFrameProps.backgroundPosition).toContain(x);
    expect(validFrameProps.backgroundPosition).toContain(y);
    expect(validFrameProps).toHaveProperty("width", width);
    expect(validFrameProps).toHaveProperty("height", height);

    // check an invalid frame
    const invalidFrameProps = styleName("B");
    expect(invalidFrameProps).toBeDefined();
    expect(invalidFrameProps.backgroundImage).toContain(someImage);
    expect(invalidFrameProps.backgroundPosition).toContain(x);
    expect(invalidFrameProps.backgroundPosition).toContain(y);
    expect(invalidFrameProps).toHaveProperty("width", width);
    expect(invalidFrameProps).toHaveProperty("height", height);
  });
  it("generates invalid properties", () => {
    const { w, h, x, y } = DEFAULT_FRAME;
    const styleName = prepareSpritesheetStyle(someImage, {
      frames: { A: undefined }
    });
    // check a valid frame
    const validFrameProps = styleName("A");
    expect(validFrameProps).toBeDefined();
    expect(validFrameProps.backgroundImage).toContain(someImage);
    expect(validFrameProps.backgroundPosition).toContain(x);
    expect(validFrameProps.backgroundPosition).toContain(y);
    expect(validFrameProps).toHaveProperty("width", w);
    expect(validFrameProps).toHaveProperty("height", h);

    // check a valid frame
    const invalidFrameProps = styleName("B");
    expect(invalidFrameProps).toBeDefined();
    expect(invalidFrameProps.backgroundImage).toContain(someImage);
    expect(invalidFrameProps.backgroundPosition).toContain(x);
    expect(invalidFrameProps.backgroundPosition).toContain(y);
    expect(invalidFrameProps).toHaveProperty("width", w);
    expect(invalidFrameProps).toHaveProperty("height", h);
  });
});
