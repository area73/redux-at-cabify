import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import increase from "../actions/increase";
import getCounter from "../selectors/getCounter";

const mapStateToProps = (state) => ({ counter: getCounter(state) });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ increase }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
