import { connect } from "react-redux";
import { compose } from "redux"
import { withRouter } from 'react-router-dom';

import { onLanguageChange } from "./actions";

import SideDrawer from "../../components/UI/SideDrawer/SideDrawer"

const mapStateToProps = (state, ownProps) => {
  const { languageSelectorReducer } = state;

  return {
    ...languageSelectorReducer,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: newLanguage => dispatch(onLanguageChange(newLanguage))
  };
};


const enhance = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(SideDrawer);
