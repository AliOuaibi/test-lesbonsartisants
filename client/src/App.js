import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from './components' 
import { Acceuil, ProductsList, ProductsInsert, ProductsUpdate } from './pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
              <Route path="/" exact component={Acceuil} />
              <Route path="/product/list" exact component={ProductsList} />
              <Route path="/product/create" exact component={ProductsInsert} />
              <Route
                  path="/product/update/:id"
                  exact
                  component={ProductsUpdate}
              />
            </Switch>
        </Router>
    )
}

export default App