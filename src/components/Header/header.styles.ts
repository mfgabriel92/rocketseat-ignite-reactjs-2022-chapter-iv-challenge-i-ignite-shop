import { stitches } from "@styles/index";

export const Container = stitches.styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
});

export const Basket = stitches.styled("div", {
  backgroundColor: "$gray800",
  width: 42,
  height: 42,
  borderRadius: 6,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s",
  cursor: "pointer",
  position: "relative",

  div: {
    position: "absolute",
    background: "$green500",
    color: "$white",
    width: 21,
    height: 22,
    fontWeight: "bold",
    borderRadius: "100%",
    top: -10,
    right: -10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "&:hover": {
    filter: "brightness(0.8)",
  },
});
