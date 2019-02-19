import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Landing from './Landing'
const Dashboard=()=><h2>Dashboard</h2>
const SurveyNew=()=><h2>SurveyNew</h2>


class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }
  
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <Route key={0} exact path="/" component={Landing} />
      default:
        return [
          <Route key={0} exact path="/" component={Dashboard} />
        ];
    }
  }
  
  render() {
    return (
      <div className="container">
       <BrowserRouter>
       <div>
       <Header />
       {this.renderContent()}
       <Route exact path="/surveys" component={Dashboard} />
       <Route exact path="/surveys/new" component={SurveyNew} />
       
       </div>
       </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps({auth}){
    return {auth:auth}
}

export default connect(mapStateToProps,actions)(App);
