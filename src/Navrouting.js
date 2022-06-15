import React from 'react'
import Header from './component/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import About from './component/Pages/About1';
import Contact from './component/Pages/Contact';
import Faqs from './component/Pages/Faqs';
import Home from './component/Home';
import Shop from './component/Pages/Shop';
export default function Navrouting() {
    return (
        <div>
        <Router>
        <Header/>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
          <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            
            <Route exact path='/shop' component={Shop} />
            <Route exact path='/faqs' component={Faqs} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
      
      </Router>
        </div>
    )
}
