import { hot } from 'react-hot-loader/root';
import React from 'react'
import { Switch, Route, NavLink, Link } from 'react-router-dom'
import loadable from '@loadable/component'
import './App.css'

const Home = loadable(() => import('./components/pages/Home'))  
const List = loadable(() => import('./components/pages/List'))  
const Catalogue = loadable(() => import('./components/items/Catalogue'))  
// const Home = isLoadable ? loadable(() => import('./components/pages/Home')) : require('./components/pages/Home') 
// const List = isLoadable ? loadable(() => import('./components/pages/List')) : require('./components/pages/List') 
// import Home from './components/pages/Home'
// import List from './components/pages/List'
// const Home = require('./components/pages/Home');
// const List = require('./components/pages/Home');
// const Home = import('./components/pages/Home');
// const List = import('./components/pages/Home');
// let Home = () => <></>
// let List = () => <></>


function App() {
    return (
        <>
            <div>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/list">List</NavLink>
                <NavLink to="/catalogue">Catalogue</NavLink>
            </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/list">List</Link>
                <Link to="/catalogue">Catalogue</Link>
            </div>
            <Switch>
                <Route path="/" exact >
                    <h1 className="bismillah">Apa ya</h1>
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/catalogue" component={Catalogue} />
            </Switch>
            <div>
                <p>ini footer</p>
            </div>
        </>
    )
}
export default hot(App);