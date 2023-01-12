export const COLOR = {
  ORANGE: "orange",
  WHITE: "white",
  BLACK: "black",
  OUTLINE: "outline",
};

export const getButtonColor = (color: string) => {
  switch (color) {
    case COLOR.ORANGE:
      return "btn-orange btn-orange-arrow";
    case COLOR.WHITE:
      return "btn-white";
    case COLOR.BLACK:
      return "btn-black";
    case COLOR.OUTLINE:
      return "btn-outline";
  }
};
