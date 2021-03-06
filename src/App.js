import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';

import './App.css';

class App extends React.Component {

  unsubscribeFromAuth = null;

  /**
   * componentDidMount() is invoked immediately after a component is mounted 
   * (inserted into the tree). Initialization that requires DOM nodes should go here. 
   * If you need to load data from a remote endpoint, this is a good place to instantiate 
   * the network request.
   */
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  /**
   * componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. 
   * Perform any necessary cleanup in this method, such as invalidating timers, canceling network 
   * requests, or cleaning up any DOM elements that were created in componentDidMount
   */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    // exact: it means that path must be exactly same in order to render component
    return (
      <div>

        {/* Rendering Header component */}
        <Header></Header>

        {/*
          The <Switch /> component will only render the first route that matches/includes the path. 
          Once it finds the first route that matches the path, it will not look for any other matches.
          Not only that, it allows for nested routes to work properly, which is something that <Router /> 
          will not be able to handle
        */}

        <Switch>

          {/* If the route is "/" then render HomePage component" */}
          <Route exact path='/' component={HomePage} />

          {/* If the route is "/shop" then render ShopPage component" */}
          <Route path='/shop' component={ShopPage} />

          {/* If the route is "/shop" then render ShopPage component" */}
          <Route exact path='/checkout' component={CheckoutPage} />

          {/** 
            If the route is "/signin" then check if user logged in or not by checking this.props.currentUser 
            property.
            If this.props.currentUser has value then redirect to home page i.e. "/" component.
            If this.props.currentUser is null then redirect to SignInAndSignUp component
          */}

          <Route exact path='/signin'
            render={() =>
              this.props.currentUser ?
                (<Redirect to='/' />) :
                (<SignInAndSignUp />)}
          />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
