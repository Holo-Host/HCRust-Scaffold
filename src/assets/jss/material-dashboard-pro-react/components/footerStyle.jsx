// ##############################
// // // Footer styles
// #############################

import {
  defaultFont,
  container,
  containerFluid,
  primaryColor
} from "../../material-dashboard-pro-react.jsx";

const footerStyle = {
  block: {},
  left: {
    float: "left!important",
    display: "block"
  },
  right: {
    margin: "0",
    fontSize: "14px",
    float: "right!important",
    padding: "15px"
  },
  footer: {
    backgroundColor: "#121514",
    color:"#424554",
    bottom: "0",
    borderTop: "3px solid #313297",
    padding: "15px 0",
    ...defaultFont,
    zIndex: 4
  },
  container: {
    zIndex: 3,
    ...container,
    position: "relative"
  },
  containerFluid: {
    zIndex: 3,
    ...containerFluid,
    position: "relative"
  },
  a: {
    color: primaryColor,
    textDecoration: "none",
    backgroundColor: "transparent"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0",
    width: "auto"
  },
  whiteColor: {
    "&,&:hover,&:focus": {
      color: "#FFFFFF"
    }
  }
};
export default footerStyle;
