import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ component: Component, token, loading }) => (
  <Route
    render={() => {
      if (loading) {
        return (
          <Spinner
            animation="border"
            variant="dark"
            className="loading-spinner"
          />
        );
      } else if (!token) {
        return <Redirect to="/signin" />;
      } else {
        return <Component />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  token: state.authToken,
  loading: state.loading,
});

export default connect(mapStateToProps)(PrivateRoute);
