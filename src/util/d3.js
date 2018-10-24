import * as selection from "d3-selection";
import * as transition from "d3-transition";
import * as ease from "d3-ease";
import * as geo from "d3-geo";
import completeAssign from "./complete-assign";

const d3 = completeAssign({},
  selection,
  transition,
  geo,
  ease,
);

export default d3;
