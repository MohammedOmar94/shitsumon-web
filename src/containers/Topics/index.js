import { connect } from "react-redux";
import { updateTopics } from "./actions";
import Topics from "../../components/Topics";

const mapStateToProps = state => {
  const { topicsReducer } = state;
  const { hasData, topics } = topicsReducer;

  return {
    hasData,
    topics
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onUpdateTopics: data => {
      dispatch(updateTopics(data));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Topics);
