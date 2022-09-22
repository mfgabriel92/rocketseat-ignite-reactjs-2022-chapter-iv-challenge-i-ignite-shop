import { stitches } from "@styles/index";

export const globalStyles = stitches.globalCss({
  "*": {
    margin: 0,
    padding: 0,
  },
  body: {
    "-webkit-font-smoothing": "antialised",
    backgroundColor: "$gray900",
    color: "$gray100",
  },
  "body, input, textarea, button": {
    fontFamily: "Roboto",
    fontWeight: 400,
    overflow: "hidden",
  },
});
