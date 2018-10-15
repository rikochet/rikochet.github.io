import React from 'react';
import { BrowserRouter, 
         Route,
         Switch,
         Redirect } from 'react-router-dom';
import { firebase } from '../firestore';

import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';

import PageHeader from '../components/PageHeader';

// Common
// import TopNavigation from '../components/common/TopNavigation';

// Public
import Home from './Home';
import OpenSource from './OpenSource';
import Portfolio from './Portfolio';
import Articles from './Articles';

// Private
// import Dashboard from './Dashboard';

const styles = theme => ({ });

class App extends React.Component {
  
  constructor() {
    super();

    this.state = {
      authed: false,
      loading: true,
      open: false,
    }
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
          user: { displayName: user.displayName,
                  photoURL: user.photoURL }
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { open } = this.state;
    
    return /*this.state.loading === true ? <Spinner /> :*/ (
      <BrowserRouter>
        <div>
          <PageHeader />
          {/* <TopNavigation authed={this.state.authed} user={this.state.user} /> */}
          <Switch>
            {/*}
            <PrivateRoute exactly path="/schemes/add" component={AddScheme} authed={this.state.authed} />
            <PrivateRoute exactly path="/schemes/:id/edit" component={AddScheme} authed={this.state.authed} />
            <PublicRoute exactly path="/schemes" component={Schemes} authed={this.state.authed} />
            
            <PublicRoute exactly path="/podcasts/:id" component={PodcastView} authed={this.state.authed} />
            <PublicRoute exactly path="/podcasts" component={Podcasts} authed={this.state.authed} />
           
            <PublicRoute exactly path="/videos" component={Videos} authed={this.state.authed} />
            <PublicRoute exactly path="/the-twinnovation-nation" component={TheNation} authed={this.state.authed} />
            <PublicRoute exactly path="/login" component={Login} authed={this.state.authed} />

            <PrivateRoute exactly path="/dashboard" component={Dashboard} authed={this.state.authed} />
            {*/}

            <PublicRoute exactly path="/opensource" component={OpenSource} authed={this.state.authed} />
            <PublicRoute exactly path="/portfolio" component={Portfolio} authed={this.state.authed} />
            <PublicRoute exactly path="/articles" component={Articles} authed={this.state.authed} />

            {/* Default Route */}
            <PublicRoute exactly path="/" component={Home} authed={this.state.authed} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}


const PublicRoute = ({ component: Component, authed, ...rest }) => (
  <Route {...rest} render={props => (<Component {...props} />)} />
)

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route {...rest} render={props => (
    authed ? (
      <Component {...props} />
    ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
      )
  )} />
)

export default withRoot(withStyles(styles)(App));