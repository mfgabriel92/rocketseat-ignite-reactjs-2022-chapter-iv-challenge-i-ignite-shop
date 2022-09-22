import { stitches } from "@styles/index";

export const Container = stitches.styled("button", {
  marginTop: "auto",
  backgroundColor: "$green300",
  color: "$white",
  borderRadius: 8,
  border: 0,
  padding: "1.25rem",
  cursor: "pointer",
  fontSize: "$md",
  transition: "background 0.2s ease-in-out",
  fontWeight: "bold",

  "&:hover": {
    backgroundColor: "$green500",
  },

  "&:disabled": {
    backgroundColor: "$green500",
    cursor: "not-allowed",
  },
});
