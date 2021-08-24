import React, {useState, useEffect} from 'react';
import './App.css';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Link, Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import Home from './components/Home';
import StockSearch from './components/StockSearch';
import MarketNews from './components/MarketNews/MarketNews';

function App() {

  return (
    <div>
      <div className="jumbotron">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand >
            <img src="https://cdn-images-1.medium.com/max/1200/1*fmJW9a3HTPWAsCKjnz2FRQ.png" height="30px" width="30px"/>{' '}
            Stock App
          </Navbar.Brand>

          <Nav>
            <NavDropdown title="Stocks">
              <NavDropdown.Item href="/search">Stock Search</NavDropdown.Item>
              <NavDropdown.Item href="/trends">Trends</NavDropdown.Item>
              <NavDropdown.Item href="/options">Options</NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="/charts">Charts</Nav.Link>
            <Nav.Link href="/news">Market News</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>


        </Navbar>
      </div>
      <div>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/search'} component={StockSearch} />
        <Route exact path={'/news'} component={MarketNews} />
      </div>

      <div className="content">
        
      </div>
    </div>
  )
}

export default App;
