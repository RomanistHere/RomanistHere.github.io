import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

import Card from '../components/Card/Card'

import Offer from '../pages/Offer/Offer'
import Apps from '../pages/Apps/Apps'
import Form from '../pages/Form/Form'

const App = () => {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
                <Card />
            </Route>
            <Route path="/offer">
                <Offer />
            </Route>
            <Route path="/apps">
                <Apps />
            </Route>
            <Route path="/form">
                <Form />
            </Route>
        </Switch>
    </Router>
  )
}

export default App
