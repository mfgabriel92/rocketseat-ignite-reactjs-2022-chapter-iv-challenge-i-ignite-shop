import { stitches } from "@styles/index";

export const Container = stitches.styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px) / 2))",
  marginLeft: "auto",
});

export const Product = stitches.styled("div", {
  background: "linear-gradient(-180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  display: "flex",
  alignItems: "center",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  minWidth: "min-content",

  img: {
    objectFit: "cover",
  },

  "> div": {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "1.5rem",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "rgba(0, 0, 0, 0.6)",
    opacity: 0,
    visibility: "hidden",
    transform: "translateY(110%)",
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray300",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },
  },

  "&:hover": {
    "> div": {
      transform: "translateY(0%)",
      opacity: 1,
      visibility: "visible",
    },
  },
});
