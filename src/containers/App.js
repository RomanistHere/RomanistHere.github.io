import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

import Card from '../components/Card'

import Offer from '../pages/Offer'
import Apps from '../pages/Apps'
import Form from '../pages/Form'

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
