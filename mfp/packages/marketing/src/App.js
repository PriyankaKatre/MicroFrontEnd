import React from 'react';
import { Switch, Route, BrowserRouter, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core'

import Landing from './components/Landing.js';
import Pricing from './components/Pricing.js'

const generateClassName = createGenerateClassName({
    productionPrefix: 'ma'
})

export default ({ history}) => {
    return (
        <>
            <StylesProvider generateClassName={generateClassName}>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing}></Route>
                        <Route path="/" component={Landing}></Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </>
    )
}
