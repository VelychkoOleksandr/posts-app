import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { save_selected_post } from '../../../redux/action-creators/action-creators';

function NavBar(props) {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/" onClick={ props.clearSelectedPost }>MAIN</Link>
    </nav>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    clearSelectedPost: () => dispatch({
      type: save_selected_post(),
      payload: ''
    })
  }
}

export default connect(null, mapDispatchToProps)(NavBar);