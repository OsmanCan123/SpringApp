import React from "react";
import UserSıgnupPage from '../pages/UserSıgnupPage';
import LoginPage from "../pages/LoginPage";
import LanguageSelector from '../components/LanguageSelector';
import HomePage from '../pages/HomePage';
import UserPage from "../pages/UserPage";
import { HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import TopBar from "../components/TopBar";
import { Authentication} from '../shared/AuthenticationContext';

class App extends React.Component {
   static contextType = Authentication;
 



  render(){
    const isLoggedIn = this.context.state.isLoggedIn;
   


    return (
      <React.StrictMode>
        <div>
          <Router>
            <TopBar  />
          <Switch>
          <Route exact path="/" component={HomePage}/>
          {!isLoggedIn &&<Route path="/login" component={LoginPage}/>}
          <Route path="/signup" component={UserSıgnupPage}/>
          <Route path="/user/:username" component={UserPage}/>
          <Redirect to="/" />
          </Switch>
          </Router>
          
      </div>
      <LanguageSelector/>
      </React.StrictMode>
      
      
    );


  }

}

export default App;
