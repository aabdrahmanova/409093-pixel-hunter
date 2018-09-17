
export const resize = function (frame, image) {
  let width = image.width;
  let height = image.height;
  let newSize = {};

  if (width === height) {
    newSize = {
      width: frame.width,
      height: frame.height
    };
  } else if (width > height) {
    newSize = {
      width: frame.width,
      height: Math.floor(frame.height / 2)
    };
  } else if (width < height) {
    newSize = {
      width: Math.floor(frame.width / 2),
      height: frame.height
    };
  }
  return newSize;
};

