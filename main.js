import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import MainLayout from './components/layout'

import Home from './components/home/home'
import List from './components/list/list'
import Preview from './components/preview/preview'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/promotions" component={List} title="promocje" category="promocje" />
      <Route path="/promotions/:entryID"
             component={Preview}
             title="Promocje"
             description="Nazwa promocji"
             time_label="Promocja obowiązuje"
             return="/promotions" />
           <Route path="/collections" component={List} title="nowe kolekcje" category="kolekcje" />
      <Route path="/collections/:entryID"
             component={Preview}
             title="Nowe kolekcje"
             description="Nazwa kolekcji"
             time_label="Kolekcja dostępna"
             return="/collections" />
    </Route>
  </Router>
), document.getElementById('root'));
