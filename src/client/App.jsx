import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import loadable from '@loadable/component'
import './App.css'

const Home = loadable(() => import('./pages/Home'))
const List = loadable(() => import('./pages/List'))

export default function App() {
    return (
        <>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/list">List</NavLink>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
            </div>
            <Switch>
                <Route path="/" exact >
                    <h1 className="bismillah">Apa ya</h1>
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
            </Switch>
        </>
    )
}