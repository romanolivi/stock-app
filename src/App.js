import React from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand, Dropdown, NavItem, DropdownItem } from 'reactstrap';
import Home from './components/Home';
import StockSearch from './components/StockSearch';
import MarketNews from './components/MarketNews/MarketNews';
import Trends from './components/Trends';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';



const defaultHistory = createBrowserHistory();

const App = ( props, {history = defaultHistory}) => {

  const loggedIn = props.loggedIn

  return (
    <BrowserRouter history={history}>
      <div>
        <div className="jumbotron">
          { loggedIn && <Navbar bg="dark" variant="dark" sticky="top">
            <NavbarBrand className="home-logo" tag={NavLink} to={'/'}>
              <img src="https://cdn-images-1.medium.com/max/1200/1*fmJW9a3HTPWAsCKjnz2FRQ.png" height="30px" width="30px"/>{' '}
              Stock App
            </NavbarBrand>
            
              <Nav className="me-auto">
                
                <NavItem>
                  <NavLink className="nav-link" id="navl" to={'/trends'}>Trends</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" id="navl" to={'/news'}>Market News</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" id="navl" to={'/contact'}>Contact</NavLink>
                </NavItem>
              </Nav> 
          
          </Navbar> }
        </div>
        <div>
          <Switch>  
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/search'} component={StockSearch} />
            <Route exact path={'/news'}component={MarketNews} />
            <Route exact path={'/trends'} component={Trends} />
            <Route exact path={'/sign'} component={SignUp} />
          </Switch>
        </div>

      </div>
    </BrowserRouter>
  )
}

const mapStateToProps = ({loggedIn}) => {
  return { loggedIn }
}

export default connect(mapStateToProps)(App);
