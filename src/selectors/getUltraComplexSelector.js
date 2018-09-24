import { createSelector } from "reselect";
import getUserName from "./getUserName";

export default createSelector([getUserName], (userName) => {
  console.log("getUltraComplexSelector gets called");
  if (userName) {
    return `** Ultra complex calculation ** ${userName}`;
  }
});
