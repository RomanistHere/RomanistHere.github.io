import React, { lazy, Suspense } from 'react'
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css'

import Preloader from '../components/Preloader/Preloader'

const Offer = lazy(() => import('./Offer/Offer'))
const Card = lazy(() => import('./Card/Card'))
const Apps = lazy(() => import('./Apps/Apps'))
const Form = lazy(() => import('./Form/Form'))
const Post = lazy(() => import('./Post/Post'))

const App = () => {
  return (
    <Router>
        <Suspense fallback={<section className="main"><Preloader /></section>}>
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
        </Suspense>
    </Router>
  )
}

export default App
