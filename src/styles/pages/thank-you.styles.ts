import { stitches } from "@styles/index";

export const Container = stitches.styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
    textAlign: "center",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    marginTop: "2rem",
    textAlign: "center",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    textDecoration: "none",
    color: "$green300",
    transition: "color 0.2s ease-in-out",

    "&:hover": {
      color: "$green500",
    },
  },
});

export const ImagesContainer = stitches.styled("div", {
  display: "flex",
  gap: "0.5rem",
});

export const ImageContainer = stitches.styled("div", {
  background: "linear-gradient(-180deg, #1ea483 0%, #7465d4 100%)",
  width: "100%",
  maxWidth: 130,
  height: 145,
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",

  img: {
    objectFit: "cover",
  },
});
