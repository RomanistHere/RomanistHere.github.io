import React from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

import Card from './Card/Card'
import Offer from './Offer/Offer'
import Apps from './Apps/Apps'
import Form from './Form/Form'

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
