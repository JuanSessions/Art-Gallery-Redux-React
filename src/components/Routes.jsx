import React from 'react';
import { Switch, Route } from "react-router-dom";
import Cart from './Cart';
import Home from './Home';
import Products from './products/Products';
import SingleItem from './SingleItem';


function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/> 
            <Route exact path='/products' component={Products}/>
            <Route exact path='/cart' component={Cart}/>
            <Route exact path='/product/:id' component={SingleItem}/>
        </Switch>
    )
}

export default Routes
