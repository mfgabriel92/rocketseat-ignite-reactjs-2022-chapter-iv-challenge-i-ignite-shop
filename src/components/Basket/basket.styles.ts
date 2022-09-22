import { stitches } from "@styles/index";
import { X } from "phosphor-react";

export const Container = stitches.styled("div", {
  position: "absolute",
  width: "30rem",
  backgroundColor: "$gray800",
  zIndex: 1,
  height: "100vh",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  padding: "4.5rem 3rem 3rem",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  transition: "all 0.2s",
  right: 0,

  h3: {
    marginBottom: "3rem",
  },

  img: {
    background: "linear-gradient(-180deg, #1ea483 0%, #7465d4 100%)",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    objectFit: "cover",
  },

  button: {
    marginTop: "3.56rem",
  },
});

export const Items = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  flex: "1",
});

export const Item = stitches.styled("div", {
  display: "flex",
  marginBottom: "1.5rem",
});

export const ItemDescription = stitches.styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "5px 1.25rem",

  p: {
    color: "$gray300",
  },

  span: {
    fontWeight: "bold",
    color: "$green500",
    cursor: "pointer",
    transition: "color 0.2s",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const PriceDescription = stitches.styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "3px",
});

export const TotalPrice = stitches.styled("strong", {
  fontSize: "$2xl",
});

export const Close = stitches.styled(X, {
  fontSize: 24,
  display: "flex",
  alignSelf: "flex-end",
  marginTop: "-3rem",
  marginRight: "-1.5rem",
  color: "$gray500",
  cursor: "pointer",
  transition: "color 0.2s",

  "&:hover": {
    color: "$green300",
  },
});
