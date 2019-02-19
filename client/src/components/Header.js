import React , {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class Header extends Component{
//     componentDidMount(){
//     this.props.fetchUser();
//   }

    renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login With Google</a></li>;
      default:
        return [
          <li key="1"><a href="/api/logout">Logout</a></li>
        ];
    }
  }
    render(){
        console.log(this.props)
        return (
            <nav>
    <div className="nav-wrapper">
      <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            FeedBack App</Link>
      <ul id="nav-mobile" className="right ">
        {this.renderContent()}
      </ul>
    </div>
  </nav>
            )
    }
}
function mapStateToProps({auth}){
    return {auth:auth}
}
export default connect(mapStateToProps)(Header);