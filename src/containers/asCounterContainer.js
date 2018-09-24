import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import increase from "../actions/increase";

const mapStateToProps = (state) => ({ counter: state.counter });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ increase }, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
